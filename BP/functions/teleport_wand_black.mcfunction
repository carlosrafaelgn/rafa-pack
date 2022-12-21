execute unless entity @e[type=bridge:teleport_anchor_black,c=1] run tellraw @s {"rawtext":[{"translate": "teleport_anchor.black_not_found"}]}
tp @s @e[type=bridge:teleport_anchor_black,c=1]

# Old behavior (without if/unless)
#
#summon bridge:marker teleport_check_black ~ ~ ~
#
#tag @e[type=bridge:marker,name=teleport_check_black,c=1] add notfound
#execute as @e[type=bridge:teleport_anchor_black,c=1] run tag @e[type=bridge:marker,name=teleport_check_black,c=1] remove notfound
## execute as @e[type=bridge:teleport_anchor_black,c=1] run tag @e[type=bridge:marker,name=teleport_check_black,c=1] add found
#execute at @e[type=bridge:marker,name=teleport_check_black,c=1,tag=notfound] run tellraw @s {"rawtext":[{"translate": "teleport_anchor.black_not_found"}]}
## execute at @e[type=bridge:marker,name=teleport_check_black,c=1,tag=found] run playsound mob.shulker.teleport @a[r=10] ~ ~ ~ 1 1 1
#
## When teleporting to another dimension, the tag will not have enough time to
## trigger its behavior, leaving the entity active in the original dimension
## until a player returns to that dimension, which allows the trigger to run
#tag @e[type=bridge:marker,name=teleport_check_black,c=1] add despawn
#
#tp @s @e[type=bridge:teleport_anchor_black,c=1]
## execute at @e[type=bridge:teleport_anchor_black,c=1] run playsound mob.shulker.teleport @a[r=10] ~ ~ ~ 1 1 1
