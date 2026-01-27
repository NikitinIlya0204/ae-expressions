//Focus distance = object position
// слой, который всегда должен быть в фокусе
var target = thisComp.layer("FOOTAGE"); // ← замени на имя слоя

// позиция камеры и слоя в мировых координатах
var camPos = thisLayer.toWorld([0,0,0]);
var tgtPos = target.toWorld(target.anchorPoint);

// расстояние между ними
length(camPos, tgtPos);
