// Автоцентровка текста по центру 
// Вставляется в Anchor point текстового слоя
//-----------------------------------------------------
s = thisLayer.sourceRectAtTime(time,true);
width = s.width;
height = s.height;
[s.left + width/2, s.top + height/2];


// -----------------------------------------------------
// Текст будет расширяться только вниз
// -----------------------------------------------------

// В Achor point Вставляем: 
s = thisLayer.sourceRectAtTime(time, true);
width = s.width;
height = s.height;
[s.left + width / 2, s.top];


// -----------------------------------------------------
// Текст будет расширяться только вверх
// -----------------------------------------------------

// В Achor point Вставляем: 
s = thisLayer.sourceRectAtTime(time,true);
width = s.width;
height = s.height;
[s.left + width/2, s.top + height];

// -----------------------------------------------------
// Текст будет расширяться только вверх и вправо
// Работают только 2 кода вместе
// -----------------------------------------------------

// В Achor point Вставляем: 
var rect = sourceRectAtTime(time, false);
[rect.left, rect.top]


// Вставлять в position
var originalPosition = [960, 540]; // Исходная позиция вашего текстового слоя

// Получаем текущий размер текста
var textSize = thisLayer.sourceRectAtTime(time, false);

// Рассчитываем изменение размера относительно начальной точки (левый верхний угол)
var deltaX = textSize.width / 2;
var deltaY = textSize.height / 1; // если недостаточно сильно поднимается вверх "2" меняем на "1"

// Корректируем позицию так, чтобы текст расширялся вверх и вправо
[value[0], originalPosition[1] - deltaY];


// -----------------------------------------------------
// Текст будет расширяться только влево и вниз
// Работают только 2 кода вместе
// -----------------------------------------------------

// В Achor point Вставляем: 
var rect = sourceRectAtTime(time, false);
var rightTop = [rect.left + rect.width, rect.top];
rightTop;

// В Position вставляем: 
var initialX = 960; // Замените на начальную позицию X правого верхнего угла
var initialY = 540; // Замените на начальную позицию Y правого верхнего угла

[initialX, initialY]

// -----------------------------------------------------
// Текст будет расширяться только влево и вверх
// работают только 2 кода вместе
// -----------------------------------------------------

// В Achor point Вставляем: 
var rect = sourceRectAtTime(time, false);
var rightBottom = [rect.left + rect.width, rect.top + rect.height];
rightBottom;


// В Position вставляем: 
var initialX = 960; // Замените на начальную позицию X правого нижнего угла
var initialY = 540; // Замените на начальную позицию Y правого нижнего угла

[initialX, initialY]

// -----------------------------------------------------
// Текст будет расширяться только вправо и вниз
// работают только 2 кода вместе
// -----------------------------------------------------

// В Achor point Вставляем: 
var rect = sourceRectAtTime(time, false);
[rect.left, rect.top]



// В Position вставляем: 
var initialX = 100; // Начальная X координата левого верхнего угла
var initialY = 100; // Начальная Y координата левого верхнего угла

[initialX, initialY]



