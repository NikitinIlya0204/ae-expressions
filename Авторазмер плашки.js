// Авторазмер плашки под текст // Вставляется в параметр Size шейпового слоя
//---------------------------------------------------------------------------
title = thisComp.layer("название текстового слоя");
w = title.sourceRectAtTime().width; // Вычисляем длину текстового слоя
h = title.sourceRectAtTime().height;// Вычисляем высоту текстового слоя
[w,h] // Через "+N" Можно расщирять плашку по высоте и длине


//---------------------------------------------------------------------------
// Авторазмер плашки под 2 текста, если например есть имя и регалии
// Только длинна, высота настраивается индивидуально. Вставляется в параметр Size
//---------------------------------------------------------------------------

x = thisComp.layer("TEXT 1").sourceRectAtTime();
w = thisComp.layer("TEXT 2").sourceRectAtTime();
if(x.width > w.width)
{t = x.width+65}
else
{t = w.width}
h = w.height + x.height; 
[t,h]
// Необходима корректировка позиции

//---------------------------------------------------------------------------
// Авторазмер картинки под текст
// Вставлять в парметр "Scale" пнг картинки
//---------------------------------------------------------------------------

// 1. На слой с картинкой добавить 2 слайдера 

var textLayer = thisComp.layer("имя вашего текстового слоя");

// Get the size of the text layer's content
var textRect = textLayer.sourceRectAtTime(time, false);
var textWidth = textRect.width;
var textHeight = textRect.height;

// Get the original size of the PNG image (replace with actual dimensions if known)
var myWidth = thisLayer.source.width;  // Assuming 'this' is the PNG layer
var myHeight = thisLayer.source.height;  // Assuming 'this' is the PNG layer

// Calculate scale factors
var scaleX = (textWidth / myWidth) * 100 + effect("Slider Control")("Slider");
var scaleY = (textHeight / myHeight) * 100 + effect("Slider Control 2")("Slider");

// Apply non-uniform scaling
[scaleX, scaleY]
