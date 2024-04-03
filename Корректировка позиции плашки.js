Центрирование плашки по левому краю // Вставлять в Position шейпа
var originalSize = [100, 100]; // Начальный размер вашего Shape Layer
var originalPosition = [960, 540]; // Начальная позиция вашего Shape Layer

// Получаем текущий размер прямоугольника
var rectPath = content("Rectangle 1").content("Rectangle Path 1");
var newSize = rectPath.size;

// Рассчитываем изменение размера
var deltaX = (newSize[0] - originalSize[0]) / 2;

// Корректируем позицию
[originalPosition[0] + deltaX, value[1]];