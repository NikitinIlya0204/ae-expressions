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
var r = thisLayer.sourceRectAtTime();
[r.left, r.top + r.height]

// Вставлять в position
var r = thisLayer.sourceRectAtTime();
var x = value[0];
var y = value[1];
[x, y]

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



