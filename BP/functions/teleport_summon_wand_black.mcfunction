tag @e[type=bridge:marker,name=teleport_summon_check_black] add despawn

summon bridge:marker teleport_summon_check_black ~ ~ ~

tag @e[type=bridge:marker,name=teleport_summon_check_black,c=1] add recreate
execute as @e[type=bridge:teleport_anchor_black,c=1] at @s run tag @e[type=bridge:marker,name=teleport_summon_check_black,c=1] remove recreate
execute as @e[type=bridge:teleport_anchor_black,c=1] at @s run tag @e[type=bridge:marker,name=teleport_summon_check_black,c=1] add far_away
execute as @e[type=bridge:teleport_anchor_black,c=1,r=10] at @s run tag @e[type=bridge:marker,name=teleport_summon_check_black,c=1] remove far_away
execute as @e[type=bridge:teleport_anchor_black,c=1,r=10] at @s run tag @e[type=bridge:marker,name=teleport_summon_check_black,c=1] add destroy

execute at @e[type=bridge:marker,name=teleport_summon_check_black,c=1,tag=far_away] run tellraw @s {"rawtext":[{"translate": "teleport_anchor.black_far_away"}]}

# Using micraft:tick_world component instead of this technique
execute at @e[type=bridge:marker,name=teleport_summon_check_black,c=1,tag=destroy] run tellraw @s {"rawtext":[{"translate": "teleport_anchor.black_destroyed"}]}
# execute as @e[type=bridge:marker,name=teleport_summon_check_black,c=1,tag=destroy] run tickingarea remove teleport_anchor_black
execute as @e[type=bridge:marker,name=teleport_summon_check_black,c=1,tag=destroy] run execute at @e[type=bridge:teleport_anchor_black,c=1] run summon lightning_bolt ~ ~ ~
execute as @e[type=bridge:marker,name=teleport_summon_check_black,c=1,tag=destroy] run tag @e[type=bridge:teleport_anchor_black,c=1] add despawn

# execute as @e[type=bridge:marker,name=teleport_summon_check_black,c=1,tag=recreate] run tickingarea remove teleport_anchor_black
# execute at @e[type=bridge:marker,name=teleport_summon_check_black,c=1,tag=recreate] run tickingarea add ~ ~ ~ ~ ~ ~ teleport_anchor_black true
execute as @e[type=bridge:marker,name=teleport_summon_check_black,c=1,tag=recreate] at @s align xyz facing ~ ~ ~1 run summon bridge:teleport_anchor_black ~0.5 ~ ~0.5
execute at @e[type=bridge:marker,name=teleport_summon_check_black,c=1,tag=recreate] run tellraw @s {"rawtext":[{"translate": "teleport_anchor.black_summoned"}]}

tag @e[type=bridge:marker,name=teleport_summon_check_black,c=1] add despawn
