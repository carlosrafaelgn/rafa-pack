# Rafa Pack
Rafa Pack - Minecraft Bedrock Add-On

# The Add-On

My son (born in 2016) really loves Minecraft! It was thanks to this love of his that I ended up getting contact with the game. 😅

After having played countless hours of regular Minecraft on a server I set up in a Ubuntu VM, and after a thousand times my son and I came up with questions like "what if there were a item that...", I decided it was time to start creating simple add-ons to help us both in survival and in creative maps.

And so... many days of research later, this add-on was born! 😱😅

This is a living add-on as my son and I are always coming up with more and more ideas, which I am more than glad to help bring to reality. 💖

I decided to make this add-on available on GitHub because I think this could be a starting point for others trying to begin creating add-ons for Minecraft Bedrock. Although there is plenty of documentation on the web, I feel like there is a lack of up-to-date sample code to help, because Bedrock components, features, items and commands are in active development, which, in turn, ends up deprecating parts of some old sample code I came across on the web (mostly because of different behaviors in files with different `format_version`).

The add-on itself can be [downloaded here](https://github.com/carlosrafaelgn/rafa-pack/raw/main/builds/Rafa%20Pack.mcaddon). 😁

**In order for the add-on to be used, both `Holiday Creator Features` and `Custom Biomes` experimental features must be turned on**. Also, do not forget to activate both the resource pack as well as the behavior pack, otherwise the add-on will not work properly. 😊

Most textures are simply modified versions of Minecraft's vanilla textures, whereas a few of them have been entirely created by myself (or by my son! 💖). All the characters shown on the stickers are reduced/modified versions of images taken from https://minecraft.fandom.com/wiki/Minecraft_Wiki.

This add-on is licensed under the [MIT License](https://github.com/carlosrafaelgn/rafa-pack/blob/main/LICENSE).

## Bedrock and Bedrock Tools and Armor

You can produce `Bedrock` by smelting one `Soft Bedrock` (which can be produced by combining 9 `Stone`s).

Having created a `Bedrock`, you can use it to create

- `Bedrock Axe`
- `Bedrock Boots`
- `Bedrock Chestplate`
- `Bedrock Helmet`
- `Bedrock Hoe`
- `Bedrock Leggings`
- `Bedrock Pickaxe`
- `Bedrock Shovel`
- `Bedrock Sword`

Their recipes are the same as the `Iron XXX` recipes, except that you must replace `Iron Ingot` with `Bedrock`. 😊

My son asked for something with more color... Therefore, we created the tools below, which can be produced by replacing `Stick` with `Gold Ingot`, and by replacing `Iron Ingot` with `Diamond`. They look a bit different from `Bedrock` tools, but they behave exactly the same!

- `Dream Axe`
- `Dream Hoe`
- `Dream Pickaxe`
- `Dream Shovel`
- `Dream Sword`

## Bluestone

Combining `Redstone Dust` with either `Blue Dye` or `Lapis Lazuli` produces `Bluestone Dust`. This dust can be combined with `Apple` or with `Cake` to produce `Blue Apple` and `Blue Cake`, respectively. These two items are invaluable food sources with a bunch of cool side effects!!! 💖

## Teleportation

Even in creative mode, it can be really time consuming to get from one location to another sometimes. To help with that, we created six special teleport wands: black, blue, green, red, white and yellow.

`XXX Teleport Anchor Summon Wand`s, when used, create a special totem where you can teleport to later, using a `XXX Teleport Wand`.

If a `XXX Teleport Wand` is used when its related totem is still not created, a warning message appears.

Using a `XXX Teleport Anchor Summon Wand` more than 10 blocks away from an existing totem displays a warning message. On the other hand, if you are less than 10 blocks away from an existing totem when using a `XXX Teleport Anchor Summon Wand`, the existing totem is destroyed. **Beware** not to destroy the totem while being too close to it, because a lightning strikes the totem when it is destroyed. 😅

`XXX Teleport Wand`s can teleport you even between dimensions! 💖

### `XXX Teleport Anchor Summon Wand`

```
Crafting table:

A
B
C

Where:

A = Black, Blue, Green, Red, White or Yellow Dye
B = Ender Pearl
C = Iron Ingot
```

### `XXX Teleport Wand`

```
Crafting table:

A
B
C

Where:

A = Black, Blue, Green, Red, White or Yellow Dye
B = Ender Pearl
C = Copper Ingot
```

## Fake Blocks

A few fake blocks can be crafted with the help of an `Invisibility Potion`: `Fake Cobblestone`, `Fake Dirt` and `Fake Stone`. Although looking just like their original counter parts, these fake blocks are not solid, so you can walk through them. 😅

```
Crafting table:

AAA
ABA
AAA

Where:

A = Cobblestone, Dirt or Stone
B = Invisibility Potion
```

## Disc Maker

We have always found it very difficult to obtain discs. That is why we created the `Disc Maker`! 😅

```
Crafting table:

ABA
ACA
AAA

Where:

A = Iron Ingot
B = Redtone Dust
C = Note Block
```

Once the `Disc Maker` is placed somewhere, a random disc is produced when you interact with the block while holding `Coal`.

## Clickable Cookie

There is a famous online game where all you do is clicking a cookie to produce more cookies! We both love that game so much that we bought a [version of it](https://store.steampowered.com/app/1454400/Cookie_Clicker/) just because of its soundtrack! 😅

That is why we created the `Clickable Cookie`: to quench that thirst for clicking (and getting a few items in return at the same time 😁)!

```
Crafting table:

AAA
ABA
AAA

Where:

A = Cookie
B = Ender Chest
```

After placing the `Clickable Cookie`, interact with it 10 times using your bare hands to get a few items. There are 10 different items that can be obtained from the `Clickable Cookie`. They are produced in sequence, always after 10 "clicks".

## Nether Reactor Core Light

Gathering all items necessary to get to "The End" can be extremely time consuming and dangerous! 😱

Add to that the fact my son has been fascinated by the [Nether Reactor](https://minecraft.fandom.com/wiki/Nether_reactor) ever since he first saw it in an online video.

Therefore, I thought it would be a great idea to create the `Nether Reactor Core Light`, a block that produces all the items necessary to travel to "The End", without all the hassle of venturing to the Nether. 😅

```
Crafting table:

ABA
ACA
ABA

Where:

A = Diamond
B = Iron Ingot
C = Redtone Block
```

Once activated by a `Diamond`, the block will produce 8 random items (one at a time) before turning black/purple, and then completely black. If mined before turning completely black, it is possible to obtain all the items used to craft a new `Nether Reactor Core Light`. If mined when completely black, 9 `Coal`s will be produced. If not mined at all, the block explodes after some time it has turned completely black! 😅

The block can be deactivate by a `Diamond`, halting the item production and the countdown.

## Stickers Packs and Sticker Album

Just as a lot of people here in Brazil, my son became obsessed with this year's world cup stickers. ⚽ That is why he asked me a million times to do something like that in the game. 😅

That led us to the creation of two new blocks: `Sticker Album` and `Sticker Pack`.

The `Sticker Album` is crafted by combining `Cyan Dye`, `Magenta Dye`, `Yellow Dye`, `Black Dye`, `White Dye` and one `Book`.

The `Sticker Pack`'s recipe is almost the same as the `Sticker Album`'s, only replacing the `Book` with `Paper`.

Once placed, you can use `Shears` to open a `Sticker Pack` and obtain 3 random stickers.

Stick all the stickers on the album, from `Sticker 01` to `Sticker 10` in ascending order, to make the album shine! 😊

Should it become a little too difficult to get a specific sticker, try talking to a librarian... 😉

## Lightning Hammer

The `Lightning Hammer` will cause a lightning to strike the nearest monster in a range of 10 blocks. If there are no monsters in that range, a lightning will strike the block exactly 5 blocks in front of you.

```
Crafting table:

AAA
AAA
BCB

Where:

A = Iron Ingot
B = Stick
C = Redstone Dust
```

## Erasure Wand

An `Erasure Wand` can be crafted using the recipe below. This wand erases the block with which you interact, including unbreakable block such as `Bedrock` or `Command Block`.

```
Crafting table:

BAB
 B
 C

Where:

A = Lava
B = Ruby
C = Iron Ingot
```

## Ruby Surprise

Inspired by those "one block" maps, we created the `Ruby Surprise`. Place it somewhere and mine it to produce a new random item. In order to actually destroy the `Ruby Surprise` you must use an `Erasure Wand`. 😅

```
Crafting table:

AAA
BCD
AAA

Where:

A = Netherrack
B = Block of Copper
C = Ruby
D = Block of Redstone
```

## Pepper Bomb

The `Pepper Bomb` is a block that after placed and activated by `Flint and Steel`, will trigger a countdown and will explode and damage pretty much everything in a range of 5 blocks. It can be crafted by combining `Paper`, `Gunpowder` and `Green Dye`.

## Lava Transformer

When placed next to a lava pool the `Lava Transformer` will transform into `Block of Diamond` all lava within a range of 1, 2 and 3 blocks (in turns). Mine it before the fourth turn or else you will not be able to reuse it.

```
Crafting table:

AAA
ABA
ACA

Where:

A = Bluestone Dust
B = Sponge
C = Magma Block
```

## Chain Armor

It is possible to craft the full "chain armor" set by using regular boots/chestplate/helmet/leggings recipes with `Iron Bars`.

## Command Block

I don't know how a `Command Block` works, but my son insisted it should have its own recipe. 😳 So... We came up with a recipe for it:

```
Crafting table:

AAA
ABA
ACA

Where:

A = Bedrock
B = Ender Eye
C = Block of Redstone
```

## Emerald and Ruby

When my son found out about the removed/never-released `Ruby` item, he went crazy with the idea of actually bringing it into the game. 😅 That way, I created a new ore, the `Ruby Ore`, and made it be placed on the overworld alongside regular stone.

One `Ruby` produces four `Redstone Dust`. Combining four `Redstone Dust` in a shape like the one below, produces an `Unfinished Ruby`, which can be smelted to produce one `Ruby`. One `Unfinished Ruby` also produces four `Redstone Dust`.

```
Crafting table:

 A
A A
 A

Where:

A = Redstone Dust
```

Combining one `Ruby` with one `Green Dye` produces one `Unfinished Emerald`, which can be smelted to produce one `Emerald`. One `Unfinished Emerald`, by itself, produces back one `Ruby` and one `Green Dye`.

## Missing Horse Armors

My son asked me for a way to craft the missing horse armors (iron, golden and diamond). Therefore, here are their recipes:

```
Crafting table:

  A
ABA
AAA

Where:

A = Iron Ingot, Golden Ingot or Diamond
B = Wool
```

## Rocks

Combining one `Cobblestone` with one `Stick` produces a rustic piece of decoration, called `Rocks`.

## Buckets

Place one these buckets into a crafting table (or into a regular crafting slot) to extract their contents. Combining the contents with empty buckets produces the original bucket back:

- `Bucket of Axolotl`
- `Bucket of Cod`
- `Lava Bucket`
- `Powder Snow Bucket`
- `Bucket of Pufferfish`
- `Bucket of Salmon`
- `Bucket of Tadpole`
- `Bucket of Tropical Fish`
- `Water Bucket`

## Fire

Place one `Flint and Steel` into a crafting table (or into a regular crafting slot) to produce fire! 🔥😅

# Documentation

Overall, after a lot of research, I realized these are the best references to go to when in doubt:

- https://bedrock.dev/
- https://learn.microsoft.com/en-us/minecraft/creator/
- https://minecraft.fandom.com/wiki/Minecraft_Wiki
- https://minecraftitemids.com/
- https://wiki.bedrock.dev/

Also, it is worthy checking https://bugs.mojang.com due to a few known Minecraft bugs that can affect custom items and blocks, like [this bug](https://bugs.mojang.com/browse/MCPE-163988) that interfered with a couple of my own blocks. 😅

In my case, I found these specific links to be very helpful:

- https://bedrock.dev/docs/1.16.0.0/1.16.100.4/Item
- https://bedrock.dev/docs/1.16.0.0/1.16.210.5/MoLang
- https://bedrock.dev/docs/1.16.0.0/1.16.200.2/Blocks
- https://bedrock.dev/docs/stable/Molang#Conditionals
- https://bedrock.dev/docs/stable/Features#Feature%20rules
- https://bedrock.dev/docs/1.18.0.0/1.18.30.32/Features#minecraft%3Aore_feature

- https://github.com/JaylyDev/ScriptAPI
- https://github.com/microsoft/minecraft-scripting-samples

- https://learn.microsoft.com/en-us/minecraft/creator/documents/experimentalfeaturestoggle
- https://learn.microsoft.com/en-us/minecraft/creator/documents/introductiontoloottables
- https://learn.microsoft.com/en-us/minecraft/creator/documents/introductiontoaddentity
- https://learn.microsoft.com/en-us/minecraft/creator/documents/packagingaskinpack
- https://learn.microsoft.com/en-us/minecraft/creator/documents/mashuppackoverview
- https://learn.microsoft.com/en-us/minecraft/creator/reference/content/itemreference/examples/itemcomponentlist
- https://learn.microsoft.com/en-us/minecraft/creator/reference/content/itemreference/examples/itemcomponents/minecraft_digger
- https://learn.microsoft.com/en-us/minecraft/creator/reference/content/blockreference/examples/blockcomponents/blockcomponentslist
- https://learn.microsoft.com/en-us/minecraft/creator/reference/content/molangreference/examples/molangconcepts/molangintroduction
- https://learn.microsoft.com/en-us/minecraft/creator/reference/content/molangreference/examples/molangconcepts/queryfunctions
- https://learn.microsoft.com/en-us/minecraft/creator/reference/source/vanillabehaviorpack_snippets/spawn_rules/bat
- https://learn.microsoft.com/en-us/minecraft/creator/reference/source/vanillabehaviorpack_snippets/entities/armor_stand
- https://learn.microsoft.com/en-us/minecraft/creator/reference/content/entityreference/examples/entitycomponents/minecraftcomponent_conditional_bandwidth_optimization
- https://learn.microsoft.com/en-us/minecraft/creator/reference/content/entityreference/examples/entityproperties/minecraftproperty_type_family
- https://learn.microsoft.com/en-us/minecraft/creator/commands/commands/loot?view=minecraft-bedrock-stable
- https://learn.microsoft.com/en-us/minecraft/creator/documents/customcomponents?view=minecraft-bedrock-stable
- https://learn.microsoft.com/en-us/minecraft/creator/documents/customcomponentstutorial?view=minecraft-bedrock-stable
- https://learn.microsoft.com/en-us/minecraft/creator/documents/scriptinggettingstarted?view=minecraft-bedrock-stable
- https://learn.microsoft.com/en-us/minecraft/creator/documents/scriptversioning?view=minecraft-bedrock-stable
- https://learn.microsoft.com/en-us/minecraft/creator/reference/content/recipereference/examples/recipedefinitions/recipetaglist?view=minecraft-bedrock-stable
- https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityequippablecomponent?view=minecraft-bedrock-stable
- https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemcomponentregistry?view=minecraft-bedrock-stable#registercustomcomponent
- https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemcustomcomponent?view=minecraft-bedrock-stable
- https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/player?view=minecraft-bedrock-stable

- https://minecraft.fandom.com/wiki/Effect
- https://minecraft.fandom.com/wiki/Health_Boost
- https://minecraft.fandom.com/wiki/Regeneration
- https://minecraft.fandom.com/wiki/Absorption
- https://minecraft.fandom.com/wiki/Haste
- https://minecraft.fandom.com/wiki/Speed
- https://minecraft.fandom.com/wiki/Target_selectors
- https://minecraft.fandom.com/wiki/Commands/damage
- https://minecraft.fandom.com/wiki/Commands/execute
- https://minecraft.fandom.com/wiki/Commands/playsound
- https://minecraft.fandom.com/wiki/Sounds.json#Bedrock_Edition_values
- https://minecraft.fandom.com/wiki/Particles
- https://minecraft.fandom.com/wiki/Bedrock_Edition_data_values#Item_IDs
- https://minecraft.fandom.com/wiki/Scoreboard
- https://minecraft.fandom.com/wiki/Commands/scoreboard
- https://minecraft.fandom.com/wiki/Commands/tag
- https://minecraft.fandom.com/wiki/Commands/loot
- https://minecraft.fandom.com/wiki/Commands/tellraw
- https://minecraft.fandom.com/wiki/Formatting_codes

- https://wiki.bedrock.dev/guide/format-version.html
- https://wiki.bedrock.dev/items/items-intro.html
- https://wiki.bedrock.dev/items/items-16.html
- https://wiki.bedrock.dev/items/custom-armor.html
- https://wiki.bedrock.dev/items/custom-weapon.html
- https://wiki.bedrock.dev/blocks/block-tags
- https://wiki.bedrock.dev/blocks/blocks-16.html#minecraft-ticking
- https://wiki.bedrock.dev/blocks/blocks-16.html#minecraft-unit-cube
- https://wiki.bedrock.dev/items/spawning-items.html
- https://wiki.bedrock.dev/concepts/molang.html
- https://wiki.bedrock.dev/entities/runtime-identifier.html
- https://wiki.bedrock.dev/entities/invulnerable-entities.html
- https://wiki.bedrock.dev/visuals/remove-shadows.html
- https://wiki.bedrock.dev/commands/nbt-commands.html
- https://wiki.bedrock.dev/documentation/queries.html#query-is-item-name-any
- https://wiki.bedrock.dev/entities/render-controllers#dynamically-changing-texture
- https://wiki.bedrock.dev/items/item-events
- https://wiki.bedrock.dev/items/item-event-migration
- https://wiki.bedrock.dev/scripting/resources.html
- https://wiki.bedrock.dev/concepts/text-and-translations

## Tools and IDE's

These are the three main apps I use to create our add-on:

- https://editor.bridge-core.app/
- https://www.gimp.org/
- https://web.blockbench.net/

In addition, it is extremely useful to have Minecraft's vanilla packs in hand for reference:

- https://aka.ms/behaviorpacktemplate
- https://aka.ms/resourcepacktemplate
- https://bedrock.dev/packs
