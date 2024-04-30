// Привязка null object к text layer для дальнейшей
// привязки каких-либо элементов к тексту, вставлять в параметр Position

//-------------------------------------------------------------------------
// Верхний левый угол 
//-------------------------------------------------------------------------

var textLayer = thisComp.layer("Text Layer");
var rect = textLayer.sourceRectAtTime(time, false);
var topLeft = [rect.left, rect.top]; // Создаем массив с левой и верхней координатами

// Преобразуем локальные координаты в мировые
var worldPos = textLayer.toComp(topLeft);

worldPos;