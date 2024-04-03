// Печать текста с курсором // Вставить в Source Text
// Есть много вариаций этого кода, чтобы курсор был виден
// во время печати или скрывался, копируйте этот код и с
// помощью гпт редактируйте его под свои нужны, затем подгружайте
// новые вариации в git, чтобы у всех был доступ к разным вариантам кода

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
