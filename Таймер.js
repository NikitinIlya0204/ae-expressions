// === НАСТРОЙКИ ===
speed = 1;   // скорость таймера
delay = 2;   // задержка старта в секундах (например, 2 = старт с 2-й секунды)

// === ВЫЧИСЛЕНИЯ ===
t = time - delay;

if (t < 0){
    "00:00";
} else {
    t = t * speed;
    minutes = Math.floor(t / 60);
    seconds = Math.floor(t % 60);

    // === ФОРМАТИРОВАНИЕ ===
    minutesStr = minutes < 10 ? "0" + minutes : "" + minutes;
    secondsStr = seconds < 10 ? "0" + seconds : "" + seconds;

    minutesStr + ":" + secondsStr;
}
