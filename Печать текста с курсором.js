// Печать текста с курсором // Вставить в Source Text
//-------------------------------------------------------------------------
var cursor = "|"; // Символ курсора
var fps = 10; // Скорость "печатания", символов в секунду
var currentTime = time - thisLayer.inPoint;
var sourceText = thisLayer.text.sourceText.value;
var textLength = Math.min(Math.floor(currentTime * fps), sourceText.length);
var blinkingSpeed = 0.5; // Скорость мигания курсора в секундах

// Определяем, когда курсор должен мигать
var showCursor = currentTime % (blinkingSpeed * 2) < blinkingSpeed;

if (textLength < sourceText.length || showCursor) {
  sourceText.substring(0, textLength) + cursor;
} else {
  sourceText.substring(0, textLength);
}

//-------------------------------------------------------------------------
// Вариант кода, чтобы курсор пропадал после того, как текст напечатан
// Также теперь можно определять с какого момента начнется печать
//-------------------------------------------------------------------------

var cursor = "|"; // Символ курсора
var fps = 10; // Скорость "печатания", символов в секунду
var startDelay = 0.5; // Задержка перед началом печати текста в секундах
var currentTime = time - thisLayer.inPoint - startDelay; // Вычитаем задержку из текущего времени
currentTime = Math.max(currentTime, 0); // Гарантируем, что время не будет отрицательным
var sourceText = thisLayer.text.sourceText.value;
var textLength = Math.min(Math.floor(currentTime * fps), sourceText.length);
var blinkingSpeed = 0.5; // Скорость мигания курсора в секундах

// Определяем, когда курсор должен мигать
var showCursor = currentTime % (blinkingSpeed * 2) < blinkingSpeed && textLength < sourceText.length;

if (showCursor) {
  sourceText.substring(0, textLength) + cursor;
} else {
  sourceText.substring(0, textLength);
}

//-------------------------------------------------------------------------
// Вариант кода, чтобы время печати было фиксированным независимо
// от количества текста
//-------------------------------------------------------------------------


var cursor = "|"; // Символ курсора
var startDelay = 0.5; // Задержка перед началом печати текста в секундах
var totalPrintTime = 5; // Общее время для печати всего текста в секундах
var currentTime = time - thisLayer.inPoint - startDelay; // Вычитаем задержку из текущего времени
currentTime = Math.max(currentTime, 0); // Гарантируем, что время не будет отрицательным
var sourceText = thisLayer.text.sourceText.value;

// Рассчитываем долю текста, которая должна быть показана
var textLength = sourceText.length;
var fractionOfTextToShow = currentTime / totalPrintTime;
var charactersToShow = Math.floor(textLength * fractionOfTextToShow);
charactersToShow = Math.min(charactersToShow, textLength); // Убедимся, что не превышаем общее количество символов

var blinkingSpeed = 0.5; // Скорость мигания курсора в секундах
var showCursor = currentTime < totalPrintTime && currentTime % (blinkingSpeed * 2) < blinkingSpeed;

if (showCursor || currentTime < totalPrintTime) {
  sourceText.substring(0, charactersToShow) + cursor;
} else {
  sourceText.substring(0, charactersToShow);
}
