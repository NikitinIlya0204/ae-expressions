// Добавить эффект Slider Control на слой с экспрешном;
// Применить к «Source Text» у текста

//------------------------------------------------------
// 1) Обычный счётчик
//------------------------------------------------------


parseFloat(effect("Slider Control")("Slider")).toFixed(1) // В скобках пишем количество знаний после запятой


//-------------------------------------------------------
// 2) Счётчик с запятыми вместо точек
//-------------------------------------------------------

c = parseFloat(effect("Slider Control")("Slider")).toFixed(1);
c.toString().replace(".", ",")


//-------------------------------------------------------
// 3) Счётчик с дополнительными знаками
//-------------------------------------------------------

"+"+parseFloat(effect("Slider Control")("Slider")).toFixed(1)+"%"
//"+"- то, что до цифр, "%" - то, что после цифр 

//-------------------------------------------------------
// 4) Счётчик с заменой 1 на 001
// При zerosAmount = 3 счёт будет идти вот так: 000, 001 … 011 … 111.
//-------------------------------------------------------

zerosAmount = 3;

var slider = effect("Slider Control")("Slider");

function padStart(string, targetLength, character) {
	string = (string instanceof String) ? string : string.toString();
	targetLength = targetLength >> 0;
	character = character || ' ';

	while (string.length < targetLength) {
		string = character + string;
	}

return string;
};

if (slider >= 0) {
zeroAmount = zerosAmount + 1;
paddedString = padStart(parseFloat(slider.value).toFixed(0), zerosAmount, '0');
}

else {
paddedString = '-0'+padStart(parseFloat(slider.value).toFixed(0)*-1, zerosAmount, '0');
}

paddedString;


//-------------------------------------------------------
// 5) Счётчик с разрядами
// Заменяет 500000 на 500 000.
//-------------------------------------------------------

num = parseFloat(effect("Slider Control")("Slider")).toFixed(0);
str = isNaN(num) ? "" : (num * 1 + "");
str.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');


//-------------------------------------------------------
// 6) Счётчик для больших чисел
// Счётчик, привязанный к Slider Control,
// не идёт дальше 1 000 000. Поэтому если нужны большие
// числа — приходится использовать эффект Angle Control.
// Добавить эффект Angle Control на слой с экспрешном;
// Применить к «Source Text» у текста:
//-------------------------------------------------------

number = Math.round(effect("Angle Control")("Angle")/360);

n="" + number;
s="";
for(i=0, l=n.length; i<l;  i++){
    if(s && s!="-" && (l-i)%3 ==0)
                s+=" "; 
        s += n[i];
}
s;
