//Экспрешн на CheckBox
// Используется в могрте для возможности включать и выключать
//некоторые элементы плашки. Рекомендуется использовать с opacity
//

var checkbox = thisComp.layer("название слоя на котором Checkbox").effect("Название вашего Checkbox")("Checkbox").value;
if (checkbox == 1){100} else {0};

//Экспрешн на Dropdownmenu
x = thisComp.layer("NULL ").effect("Dropdown Menu Control")("Menu");
if (x==1) {100} // Вместо единицы порядковый номер нужного ответа
else {0}