//Применить к rotation
//-------------------------------------------

angle = 15; // Угол поворота
rotateDuration = 6; // Длительность поворота в кадрах
timeStop = 5; // Длительность остановки между поворотами
offset = 0; // Сдвиг начального положения в кадрах

fr = timeToFrames(time)+offset;

cycle = timeStop+rotateDuration;
n = Math.floor(fr/cycle);
cur_phase = fr-n*cycle;

if((cur_phase)>timeStop){
angle*n+(cur_phase-timeStop)*angle/rotateDuration;
}
else{
angle*n;
}