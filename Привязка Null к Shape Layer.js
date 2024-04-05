// Привязка null object к Shape layer для дальнейшей
// привязки каких-либо элементов к плашке, вставлять в параметр Position

//-------------------------------------------------------------------------
// Верхний левый угол 
//-------------------------------------------------------------------------

var shapeLayer = thisComp.layer("Имя вашего Shape Layer"); // Замените на имя вашего Shape Layer
var shapeBounds = shapeLayer.sourceRectAtTime(time, false); // Получаем размеры и положение содержимого Shape Layer
var topLeft = shapeLayer.toComp([shapeBounds.left, shapeBounds.top]); // Конвертируем локальные координаты в глобальные

[topLeft[0], topLeft[1]]

//-------------------------------------------------------------------------
// Верхний правый угол
//-------------------------------------------------------------------------

var shapeLayer = thisComp.layer("Имя вашего Shape Layer"); // Замените на имя вашего Shape Layer
var shapeBounds = shapeLayer.sourceRectAtTime(time, false); // Получаем размеры и положение содержимого Shape Layer
var topRight = shapeLayer.toComp([shapeBounds.left + shapeBounds.width, shapeBounds.top]); // Конвертируем локальные координаты в глобальные

[topRight[0], topRight[1]]

//-------------------------------------------------------------------------
// Левый нижний
//-------------------------------------------------------------------------

var shapeLayer = thisComp.layer("Имя вашего Shape Layer"); // Замените на имя вашего Shape Layer
var shapeBounds = shapeLayer.sourceRectAtTime(time, false); // Получаем размеры и положение содержимого Shape Layer
var bottomLeft = shapeLayer.toComp([shapeBounds.left, shapeBounds.top + shapeBounds.height]); // Конвертируем локальные координаты в глобальные

[bottomLeft[0], bottomLeft[1]]

//-------------------------------------------------------------------------
// Правый нижний
//-------------------------------------------------------------------------

var shapeLayer = thisComp.layer("Имя вашего Shape Layer"); // Замените на имя вашего Shape Layer
var shapeBounds = shapeLayer.sourceRectAtTime(time, false); // Получаем размеры и положение содержимого Shape Layer
var bottomRight = shapeLayer.toComp([shapeBounds.left + shapeBounds.width, shapeBounds.top + shapeBounds.height]); // Конвертируем локальные координаты правого нижнего угла в глобальные

[bottomRight[0], bottomRight[1]]

//-------------------------------------------------------------------------
// Левая сторона
//-------------------------------------------------------------------------

var shapeLayer = thisComp.layer("Имя вашего Shape Layer"); // Замените на имя вашего Shape Layer
var shapeBounds = shapeLayer.sourceRectAtTime(time, false); // Получаем размеры и положение содержимого Shape Layer
var middleLeft = shapeLayer.toComp([shapeBounds.left, shapeBounds.top + shapeBounds.height / 2]); // Конвертируем локальные координаты в глобальные

[middleLeft[0], middleLeft[1]]

//-------------------------------------------------------------------------
// Правая сторона
//-------------------------------------------------------------------------

var shapeLayer = thisComp.layer("Имя вашего Shape Layer"); // Замените на имя вашего Shape Layer
var shapeBounds = shapeLayer.sourceRectAtTime(time, false); // Получаем размеры и положение содержимого Shape Layer
var middleRight = shapeLayer.toComp([shapeBounds.left + shapeBounds.width, shapeBounds.top + shapeBounds.height / 2]); // Конвертируем локальные координаты в глобальные

[middleRight[0], middleRight[1]]

//-------------------------------------------------------------------------
// Верхняя сторона
//-------------------------------------------------------------------------

var shapeLayer = thisComp.layer("Имя вашего Shape Layer"); // Замените на имя вашего Shape Layer
var shapeBounds = shapeLayer.sourceRectAtTime(time, false); // Получаем размеры и положение содержимого Shape Layer
var middleTop = shapeLayer.toComp([shapeBounds.left + shapeBounds.width / 2, shapeBounds.top]); // Конвертируем локальные координаты в глобальные

[middleTop[0], middleTop[1]]

//-------------------------------------------------------------------------
// Нижняя сторона
//-------------------------------------------------------------------------

var shapeLayer = thisComp.layer("Имя вашего Shape Layer"); // Замените на имя вашего Shape Layer
var shapeBounds = shapeLayer.sourceRectAtTime(time, false); // Получаем размеры и положение содержимого Shape Layer
var middleBottom = shapeLayer.toComp([shapeBounds.left + shapeBounds.width / 2, shapeBounds.top + shapeBounds.height]); // Конвертируем локальные координаты в глобальные

[middleBottom[0], middleBottom[1]]