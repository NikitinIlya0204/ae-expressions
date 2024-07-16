Создаем тексовый слой, делаем под него авторазмер плашки, корректировку позиции, как нам надо и т.д
Этот текстовый слой будет шаблном для все остальных и его имя мы пишем вместо "Имя текстового слоя"
Вставлять в параметр "SourceText"

// Получаем текст из другого текстового слоя
var masterText = thisComp.layer("Имя текстового слоя").text.sourceText;

// Получаем стиль из другого текстового слоя
var masterStyle = thisComp.layer("Имя текстового слоя").text.sourceText.style;

// Получаем размер шрифта из слайдера на Null объекте
var sliderFontSize = thisComp.layer("Null").effect("Slider Control")("Slider").value;

// Создаем новый стиль для текущего слоя, применяя размер шрифта из слайдера и копируя шрифт из основного слоя
var newStyle = masterStyle.setFontSize(sliderFontSize).setFont(masterStyle.font);

// Применяем новый стиль к тексту
newStyle.setText(masterText);
