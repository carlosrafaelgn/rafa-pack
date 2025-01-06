// https://github.com/JaylyDev/ScriptAPI
// https://github.com/microsoft/minecraft-scripting-samples
// https://learn.microsoft.com/en-us/minecraft/creator/commands/commands/loot?view=minecraft-bedrock-stable
// https://learn.microsoft.com/en-us/minecraft/creator/documents/customcomponents?view=minecraft-bedrock-stable
// https://learn.microsoft.com/en-us/minecraft/creator/documents/customcomponentstutorial?view=minecraft-bedrock-stable
// https://learn.microsoft.com/en-us/minecraft/creator/documents/introductiontoaddentity?view=minecraft-bedrock-stable
// https://learn.microsoft.com/en-us/minecraft/creator/documents/scriptinggettingstarted?view=minecraft-bedrock-stable
// https://learn.microsoft.com/en-us/minecraft/creator/documents/scriptversioning?view=minecraft-bedrock-stable
// https://learn.microsoft.com/en-us/minecraft/creator/reference/content/recipereference/examples/recipedefinitions/recipetaglist?view=minecraft-bedrock-stable
// https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityequippablecomponent?view=minecraft-bedrock-stable
// https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemcomponentregistry?view=minecraft-bedrock-stable#registercustomcomponent
// https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemcustomcomponent?view=minecraft-bedrock-stable
// https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/player?view=minecraft-bedrock-stable
// https://wiki.bedrock.dev/entities/render-controllers#dynamically-changing-texture
// https://wiki.bedrock.dev/items/item-events
// https://wiki.bedrock.dev/items/item-event-migration
// https://wiki.bedrock.dev/scripting/resources.html

import {
	BlockVolume,
	EntityComponentTypes,
	EquipmentSlot,
	GameMode,
	world
} from "@minecraft/server";

function findTeleportAnchor(color) {
	const colors = [color];
	for (let i = 0; i < 3; i++) {
		const entities = world.getDimension(i === 2 ? "the_end" : (i === 1 ? "nether" : "overworld")).getEntities({
			type: "rafapack:teleport_anchor",
			tags: colors
		});
		if (entities && entities.length)
			return entities[0];
	}
	return null;
}

world.beforeEvents.worldInitialize.subscribe(initEvent => {
	initEvent.itemComponentRegistry.registerCustomComponent("rafapack:bedrock_item_behavior", {
		onBeforeDurabilityDamage: function (event) {
			event.durabilityDamage = 0;
		}
	});

	initEvent.itemComponentRegistry.registerCustomComponent("rafapack:blue_apple_behavior", {
		onConsume: function (event) {
			event.source.addEffect("night_vision", 600 * 20, {
				showParticles: false
			});
		}
	});

	initEvent.itemComponentRegistry.registerCustomComponent("rafapack:blue_cake_behavior", {
		onConsume: function (event) {
			const source = event.source;
			source.addEffect("health_boost", 600 * 20, {
				amplifier: 19,
				showParticles: false
			});
			source.addEffect("regeneration", 600 * 20, {
				amplifier: 4,
				showParticles: false
			});
			source.addEffect("haste", 600 * 20, {
				amplifier: 4,
				showParticles: false
			});
			source.addEffect("speed", 600 * 20, {
				amplifier: 2,
				showParticles: false
			});
		}
	});

	initEvent.blockComponentRegistry.registerCustomComponent("rafapack:clickable_cookie_behavior", {
		onPlayerInteract: function (event) {
			const player = event.player;
			const equippableComponent = player.getComponent(EntityComponentTypes.Equippable);
			let itemStack;
			if (equippableComponent && (itemStack = equippableComponent.getEquipment(EquipmentSlot.Mainhand)) && itemStack.typeId)
				return;
			const block = event.block;
			const permutation = block.permutation;
			const turn = permutation.getState("rafapack:turn");
			player.sendMessage({ translate: "clickable_cookie.click" });
			if (turn < 9) {
				block.setPermutation(permutation.withState("rafapack:turn", turn + 1));
				return;
			}
			const prize = permutation.getState("rafapack:prize");
			const bottomCenter = block.bottomCenter();
			player.runCommandAsync(`loot spawn ${bottomCenter.x} ${(bottomCenter.y + 1)} ${bottomCenter.z} loot "clickable_cookie_0${prize}"`);
			block.setPermutation(permutation.withState("rafapack:turn", 0).withState("rafapack:prize", (prize + 1) % 10));
		}
	});

	initEvent.blockComponentRegistry.registerCustomComponent("rafapack:disc_maker_behavior", {
		onPlayerInteract: function (event) {
			const player = event.player;
			const equippableComponent = player.getComponent(EntityComponentTypes.Equippable);
			if (equippableComponent) {
				const itemStack = equippableComponent.getEquipment(EquipmentSlot.Mainhand);
				if (itemStack && itemStack.typeId === "minecraft:coal") {
					const block = event.block;
					const bottomCenter = block.bottomCenter();
					player.runCommandAsync(`loot spawn ${bottomCenter.x} ${(bottomCenter.y + 1)} ${bottomCenter.z} loot "disc_maker"`);
					if (player.getGameMode() !== GameMode.creative)
						player.runCommand("clear @s minecraft:coal 0 1");
				}
			}
		}
	});

	initEvent.itemComponentRegistry.registerCustomComponent("rafapack:erasure_wand_behavior", {
		onUseOn: function (event) {
			const block = event.block;
			const source = event.source;
			source.dimension.setBlockType(block.location, "air");
			source.runCommandAsync(`particle rafapack:generic_smoke ${block.x} ${block.y} ${block.z}`);
		}
	});

	initEvent.blockComponentRegistry.registerCustomComponent("rafapack:lava_transformer_behavior", {
		onTick: function (event) {
			const block = event.block;
			const permutation = block.permutation;
			let count = permutation.getState("rafapack:count");
			if (count >= 4)
				return;
			count++;
			block.setPermutation(permutation.withState("rafapack:count", count));
			if (count < 4)
				event.dimension.fillBlocks(new BlockVolume({
					x: block.x - count,
					y: block.y - count,
					z: block.z - count
				}, {
					x: block.x + count,
					y: block.y + count,
					z: block.z + count
				}), "diamond_block", {
					ignoreChunkBoundErrors: true,
					blockFilter: {
						includeTypes: ["lava"]
					}
				});
		}
	});

	initEvent.itemComponentRegistry.registerCustomComponent("rafapack:lightning_hammer_behavior", {
		onUse: function (event) {
			const source = event.source;
			source.runCommand("execute unless entity @e[family=monster,c=1,r=10] run summon lightning_bolt ^ ^ ^5");
			source.runCommand("execute at @e[family=monster,c=1,r=10] run summon lightning_bolt ~ ~ ~");
		}
	});

	initEvent.blockComponentRegistry.registerCustomComponent("rafapack:pepper_bomb_behavior", {
		onPlayerInteract: function (event) {
			const player = event.player;
			const equippableComponent = player.getComponent(EntityComponentTypes.Equippable);
			if (equippableComponent) {
				const itemStack = equippableComponent.getEquipment(EquipmentSlot.Mainhand);
				if (itemStack && itemStack.typeId === "minecraft:flint_and_steel") {
					const block = event.block;
					const permutation = block.permutation;
					const count = permutation.getState("rafapack:count");
					if (!count)
						block.setPermutation(permutation.withState("rafapack:count", 1));
				}
			}
		},
		onTick: function (event) {
			const block = event.block;
			const permutation = block.permutation;
			let count = permutation.getState("rafapack:count");
			if (!count)
				return;
			if (count >= 8) {
				event.dimension.setBlockType(block.location, "air");
				event.dimension.createExplosion(block.center(), 7, {
					allowUnderwater: true,
					breaksBlocks: true,
					causesFire: false
				});
				return;
			}
			count++;
			block.setPermutation(permutation.withState("rafapack:count", count));
		}
	});

	initEvent.blockComponentRegistry.registerCustomComponent("rafapack:reactor_core_behavior", {
		onPlayerInteract: function (event) {
			const player = event.player;
			const equippableComponent = player.getComponent(EntityComponentTypes.Equippable);
			if (equippableComponent) {
				const itemStack = equippableComponent.getEquipment(EquipmentSlot.Mainhand);
				if (itemStack && itemStack.typeId === "minecraft:diamond") {
					const block = event.block;
					const permutation = block.permutation;
					const running = permutation.getState("rafapack:running");
					block.setPermutation(permutation.withState("rafapack:running", !running));
				}
			}
		},
		onTick: function (event) {
			const block = event.block;
			const permutation = block.permutation;
			const running = permutation.getState("rafapack:running");
			const count = permutation.getState("rafapack:count");
			if (running) {
				if (count >= 9) {
					event.dimension.setBlockType(block.location, "air");
					event.dimension.createExplosion(block.center(), 5, {
						allowUnderwater: true,
						breaksBlocks: true,
						causesFire: true
					});
				} else {
					const bottomCenter = block.bottomCenter();
					block.setPermutation(permutation.withState("rafapack:count", count + 1));
					event.dimension.runCommandAsync(`loot spawn ${bottomCenter.x} ${(bottomCenter.y + 1)} ${bottomCenter.z} loot "reactor_core_tick"`);
				}
			}
		}
	});

	initEvent.blockComponentRegistry.registerCustomComponent("rafapack:ruby_surprise_behavior", {
		onPlayerDestroy: function (event) {
			const player = event.player;
			if (player.getGameMode() !== GameMode.creative)
				player.dimension.setBlockType(event.block.location, "rafapack:ruby_surprise");
		}
	});

	initEvent.blockComponentRegistry.registerCustomComponent("rafapack:sticker_album_behavior", {
		onPlayerInteract: function (event) {
			const player = event.player;
			const equippableComponent = player.getComponent(EntityComponentTypes.Equippable);
			if (equippableComponent) {
				const block = event.block;
				const permutation = block.permutation;
				let stickers = permutation.getState("rafapack:nibble0") | (permutation.getState("rafapack:nibble1") << 4) | (permutation.getState("rafapack:nibble2") << 8);
				if (stickers === 1023) {
					player.sendMessage({ translate: "sticker_album.album_complete" });
					return;
				}
				const itemStack = equippableComponent.getEquipment(EquipmentSlot.Mainhand);
				let sticker;
				if (itemStack &&
					itemStack.typeId.startsWith("rafapack:sticker") &&
					!isNaN(sticker = parseInt(itemStack.typeId.substring(16))) &&
					!(stickers & (1 << (sticker - 1)))) {
					stickers |= (1 << (sticker - 1));
					block.setPermutation(permutation.withState("rafapack:nibble0", stickers & 0x0F).withState("rafapack:nibble1", (stickers >> 4) & 0x0F).withState("rafapack:nibble2", (stickers >> 8) & 0x03));
					player.sendMessage({ translate: (stickers === 1023 ? "sticker_album.album_complete" : "sticker_album.sticker_ok") });
					if (player.getGameMode() !== GameMode.creative)
						player.runCommand(`clear @s rafapack:sticker${(sticker < 10 ? "0" : "")}${sticker} 0 1`);
					return;
				}
				const missingStickers = [];
				for (let i = 0; i < 10; i++) {
					if (!(stickers & (1 << i)))
						missingStickers.push(i + 1);
				}
				player.sendMessage({ translate: (missingStickers.length === 1 ? "sticker_album.missing_sticker" : "sticker_album.missing_stickers"), with: [missingStickers.join(", ")] });
			}
		},
		onPlayerDestroy: function (event) {
			const player = event.player;
			if (player.getGameMode() !== GameMode.creative) {
				const block = event.block;
				const bottomCenter = block.bottomCenter();
				const permutation = event.destroyedBlockPermutation;
				const stickers = permutation.getState("rafapack:nibble0") | (permutation.getState("rafapack:nibble1") << 4) | (permutation.getState("rafapack:nibble2") << 8);
				for (let i = 0; i < 10; i++) {
					if ((stickers & (1 << i))) {
						const sticker = i + 1;
						player.runCommandAsync(`loot spawn ${bottomCenter.x} ${bottomCenter.y} ${bottomCenter.z} loot "sticker_album_${(sticker < 10 ? "0" : "")}${sticker}"`);
					}
				}
			}
		}
	});

	initEvent.blockComponentRegistry.registerCustomComponent("rafapack:sticker_pack_behavior", {
		onPlayerInteract: function (event) {
			const player = event.player;
			const equippableComponent = player.getComponent(EntityComponentTypes.Equippable);
			if (equippableComponent) {
				const itemStack = equippableComponent.getEquipment(EquipmentSlot.Mainhand);
				if (itemStack && itemStack.typeId === "minecraft:shears") {
					const block = event.block;
					const bottomCenter = block.bottomCenter();
					player.dimension.setBlockType(block.location, "air");
					player.runCommandAsync(`loot spawn ${bottomCenter.x} ${bottomCenter.y} ${bottomCenter.z} loot "sticker_pack"`);
				}
			}
		}
	});

	initEvent.itemComponentRegistry.registerCustomComponent("rafapack:teleport_summon_wand_behavior", {
		onUse: function (event) {
			const source = event.source;
			const location = source.location;
			const color = event.itemStack.typeId.substring(30);
			let anchor = findTeleportAnchor(color);
			if (!anchor) {
				anchor = source.dimension.spawnEntity("rafapack:teleport_anchor", {
					x: (location.x | 0) + (location.x < 0 ? -0.5 : 0.5),
					y: (location.y | 0),
					z: (location.z | 0) + (location.z < 0 ? -0.5 : 0.5)
				});
				anchor.addTag(color);
				anchor.triggerEvent("rafapack:event_" + color);
				source.sendMessage({ translate: `teleport_anchor.${color}_summoned` });
				return;
			}
			const anchorLocation = anchor.location;
			const dx = anchorLocation.x - location.x;
			const dy = anchorLocation.y - location.y;
			const dz = anchorLocation.z - location.z;
			const distance = Math.sqrt((dx * dx) + (dy * dy) + (dz * dz));
			if (anchor.dimension.id !== source.dimension.id || distance > 10) {
				source.sendMessage({ translate: `teleport_anchor.${color}_far_away` });
				return;
			}
			anchor.addTag("despawn");
			source.dimension.spawnEntity("lightning_bolt", anchorLocation);
			source.sendMessage({ translate: `teleport_anchor.${color}_destroyed` });
		}
	});

	initEvent.itemComponentRegistry.registerCustomComponent("rafapack:teleport_wand_behavior", {
		onUse: function (event) {
			const color = event.itemStack.typeId.substring(23);
			const anchor = findTeleportAnchor(color);
			if (!anchor) {
				event.source.sendMessage({ translate: `teleport_anchor.${color}_not_found` });
				return;
			}
			event.source.runCommandAsync(`tp @s @e[type=rafapack:teleport_anchor,tag=${color},c=1]`);
		}
	});
});
