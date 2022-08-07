summon bridge:marker ~ ~ ~ default teleport_check_white

tag @e[type=bridge:marker,name=teleport_check_white,c=1] add notfound
execute @e[type=bridge:teleport_anchor_white,c=1] ~ ~ ~ tag @e[type=bridge:marker,name=teleport_check_white,c=1] remove notfound
# execute @e[type=bridge:teleport_anchor_white,c=1] ~ ~ ~ tag @e[type=bridge:marker,name=teleport_check_white,c=1] add found
execute @e[type=bridge:marker,name=teleport_check_white,c=1,tag=notfound] ~ ~ ~ tellraw @p[c=1] {"rawtext":[{"translate": "teleport_anchor.white_not_found"}]}
# execute @e[type=bridge:marker,name=teleport_check_white,c=1,tag=found] ~ ~ ~ playsound mob.shulker.teleport @a[r=10] ~ ~ ~ 1 1 1

tag @e[type=bridge:marker,name=teleport_check_white,c=1] add despawn

tp @s @e[type=bridge:teleport_anchor_white,c=1]
# execute @e[type=bridge:teleport_anchor_white,c=1] ~ ~ ~ playsound mob.shulker.teleport @a[r=10] ~ ~ ~ 1 1 1
