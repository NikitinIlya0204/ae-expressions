// Автоцентровка текста по центру 
// вставляется в Anchor point текстового слоя
s = thisLayer.sourceRectAtTime(time,true);
width = s.width;
height = s.height;
[s.left + width/2, s.top + height/2];


// -----------------------------------------------------
// Текст будет расширяться только вверх и вправо
// -----------------------------------------------------


var originalPosition = [960, 540]; // Исходная позиция вашего текстового слоя

// Получаем текущий размер текста
var textSize = thisLayer.sourceRectAtTime(time, false);

// Рассчитываем изменение размера относительно начальной точки (левый верхний угол)
var deltaX = textSize.width / 2;
var deltaY = textSize.height / 2;

// Корректируем позицию так, чтобы текст расширялся вверх и вправо
[originalPosition[0] + deltaX, originalPosition[1] - deltaY];
