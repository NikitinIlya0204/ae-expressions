// === Настройки ===
rows = 25;         // Сколько строк
columns = 60;      // Сколько символов в строке
seed = Math.floor(time * 5);  // Скорость смены
chars = ["-", "*"]; // Символы, из которых строится строка

// === Генерация ===
txt = "";
seedRandom(seed, true);

for (r = 0; r < rows; r++) {
    line = "";
    for (c = 0; c < columns; c++) {
        line += chars[Math.floor(random(chars.length))];
    }
    txt += line + "\r"; // добавляем перенос строки
}

txt;
