execute unless entity @e[family=monster,c=1,r=10] run summon lightning_bolt ^ ^ ^5
execute at @e[family=monster,c=1,r=10] run summon lightning_bolt ~ ~ ~

# Old behavior (without if/unless)
#
#summon bridge:marker lightning_hammer_check ~ ~ ~
#
#tag @e[type=bridge:marker,name=lightning_hammer_check,c=1] add no_monsters
#execute as @e[family=monster,c=1,r=10] run tag @e[type=bridge:marker,name=lightning_hammer_check,c=1] remove no_monsters
#execute at @e[family=monster,c=1,r=10] run summon lightning_bolt ~ ~ ~
##damage @e[family=monster,c=1,r=10] 30 lightning
#
#execute as @e[type=bridge:marker,name=lightning_hammer_check,c=1,tag=no_monsters] run summon lightning_bolt ^ ^ ^5
#
#tag @e[type=bridge:marker,name=lightning_hammer_check,c=1] add despawn
