//Автоцентровка текста по центру // вставляется в Anchor point текстового слоя
s = thisLayer.sourceRectAtTime(time,true);
width = s.width;
height = s.height;
[s.left + width/2, s.top + height/2];