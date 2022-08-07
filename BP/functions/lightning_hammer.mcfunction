summon bridge:marker ~ ~ ~ default lightning_hammer_check

tag @e[type=bridge:marker,name=lightning_hammer_check,c=1] add no_monsters
execute @e[family=monster,c=1,r=5] ~ ~ ~ tag @e[type=bridge:marker,name=lightning_hammer_check,c=1] remove no_monsters
execute @e[family=monster,c=1,r=5] ~ ~ ~ summon lightning_bolt ~ ~ ~
#damage @e[family=monster,c=1,r=5] 30 lightning

execute @e[type=bridge:marker,name=lightning_hammer_check,c=1,tag=no_monsters] ~ ~ ~ execute @p[c=1] ~ ~ ~ summon lightning_bolt ^ ^ ^5

tag @e[type=bridge:marker,name=lightning_hammer_check,c=1] add despawn
