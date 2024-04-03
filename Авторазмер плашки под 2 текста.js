//Авторазмер плашки под 2 текста, если например есть имя и регалии // Только длинна, высота настраивается индивидуально.// Вставляется в параметр Size
title = thisComp.layer("название текстового слоя");
title2 = thisComp.layer("название текстового слоя");
if (title.sourceRectAtTime().width > title2.sourceRectAtTime().width)
{w = title.sourceRectAtTime().width}
else
{w = title2.sourceRectAtTime().width}
h = title.sourceRectAtTime().height;// Вычисляем высоту текстового слоя
[w,h] // Через "+N" Можно расширять плашку по высоте и длине, вместо "h" можно написать "value [1]"