// Центр композиции по Y
compCenter = thisComp.height / 2;

// Координата слоя по Y (в мировом пространстве)
layerPosY = toComp(anchorPoint)[1];

// Расстояние от центра
dist = Math.abs(layerPosY - compCenter);

// Максимальное и минимальное значения масштаба
maxScale = 100;
minScale = 80;

// Радиус действия эффекта
range = 300; // пикселей вверх/вниз от центра

// Интерполяция: чем ближе к центру, тем ближе к maxScale
s = linear(dist, 0, range, maxScale, minScale);
[s, s];
