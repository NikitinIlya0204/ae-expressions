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

var title = thisComp.layer("название вашего текстового слоя");
var title2 = thisComp.layer("название вашего текстового слоя");
var t1 = title.sourceRectAtTime().width;
var t2 = title2.sourceRectAtTime().width;
var w = Math.max(t1,t2);

[w,100]// вместо "100" написать любое число, в зависимости от нужной высоты


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