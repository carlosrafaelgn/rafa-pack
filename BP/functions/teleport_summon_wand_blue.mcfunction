tag @e[type=bridge:marker,name=teleport_summon_check_blue] add despawn

summon bridge:marker ~ ~ ~ default teleport_summon_check_blue

tag @e[type=bridge:marker,name=teleport_summon_check_blue,c=1] add recreate
execute @e[type=bridge:teleport_anchor_blue,c=1] ~ ~ ~ tag @e[type=bridge:marker,name=teleport_summon_check_blue,c=1] remove recreate
execute @e[type=bridge:teleport_anchor_blue,c=1] ~ ~ ~ tag @e[type=bridge:marker,name=teleport_summon_check_blue,c=1] add far_away
execute @e[type=bridge:teleport_anchor_blue,c=1,r=10] ~ ~ ~ tag @e[type=bridge:marker,name=teleport_summon_check_blue,c=1] remove far_away
execute @e[type=bridge:teleport_anchor_blue,c=1,r=10] ~ ~ ~ tag @e[type=bridge:marker,name=teleport_summon_check_blue,c=1] add destroy

execute @e[type=bridge:marker,name=teleport_summon_check_blue,c=1,tag=far_away] ~ ~ ~ tellraw @p[c=1] {"rawtext":[{"translate": "teleport_anchor.blue_far_away"}]}

# Using micraft:tick_world component instead of this technique
execute @e[type=bridge:marker,name=teleport_summon_check_blue,c=1,tag=destroy] ~ ~ ~ tellraw @p[c=1] {"rawtext":[{"translate": "teleport_anchor.blue_destroyed"}]}
# execute @e[type=bridge:marker,name=teleport_summon_check_blue,c=1,tag=destroy] ~ ~ ~ tickingarea remove teleport_anchor_blue
execute @e[type=bridge:marker,name=teleport_summon_check_blue,c=1,tag=destroy] ~ ~ ~ execute @e[type=bridge:teleport_anchor_blue,c=1] ~ ~ ~ summon lightning_bolt ~ ~ ~
execute @e[type=bridge:marker,name=teleport_summon_check_blue,c=1,tag=destroy] ~ ~ ~ tag @e[type=bridge:teleport_anchor_blue,c=1] add despawn

# execute @e[type=bridge:marker,name=teleport_summon_check_blue,c=1,tag=recreate] ~ ~ ~ tickingarea remove teleport_anchor_blue
# execute @e[type=bridge:marker,name=teleport_summon_check_blue,c=1,tag=recreate] ~ ~ ~ tickingarea add ~ ~ ~ ~ ~ ~ teleport_anchor_blue true
execute @e[type=bridge:marker,name=teleport_summon_check_blue,c=1,tag=recreate] ~ ~ ~ summon bridge:teleport_anchor_blue ~ ~ ~
execute @e[type=bridge:marker,name=teleport_summon_check_blue,c=1,tag=recreate] ~ ~ ~ tellraw @p[c=1] {"rawtext":[{"translate": "teleport_anchor.blue_summoned"}]}

tag @e[type=bridge:marker,name=teleport_summon_check_blue,c=1] add despawn