// Вставлять в Position шейпа
// При использовании этого кода, плашка смещается, верните ее назад
// с помощью параметра Anchor point

# Центрирование плашки по левому краю 
var originalSize = [100, 100]; // Начальный размер вашего Shape Layer
var originalPosition = [960, 540]; // Начальная позиция вашего Shape Layer

// Получаем текущий размер прямоугольника
var rectPath = content("Rectangle 1").content("Rectangle Path 1");
var newSize = rectPath.size;

// Рассчитываем изменение размера
var deltaX = (newSize[0] - originalSize[0]) / 2;

// Корректируем позицию
[originalPosition[0] + deltaX, value[1]];

 # Центрирование плашки по левому и верхнему краю
// Плашка будет расширяться только вправо и вниз

var originalSize = [100, 100]; // Начальный размер вашего Shape Layer
var originalPosition = [960, 540]; // Начальная позиция вашего Shape Layer

// Получаем текущий размер прямоугольника
var rectPath = content("Rectangle 1").content("Rectangle Path 1");
var newSize = rectPath.size;

// Рассчитываем изменение размера
var deltaX = (newSize[0] - originalSize[0]) / 2;
var deltaY = (newSize[1] - originalSize[1]) / 2;

// Корректируем позицию
[originalPosition[0] + deltaX, originalPosition[1] + deltaY];
