// Катающийсся круг, применять к параметру Rotation
// и анимировать position
//---------------------------------------------------

transform.position[0]-(content("Ellipse 1").content("Ellipse Path 1").size[0]/2)-transform.position[0]/2

//---------------------------------------------------
// Катающийсся квадрат (Композиция,картинка), применять
// к параметру Position и анимировать Rotation
//---------------------------------------------------

targetLayer = thisLayer;
squareSize = targetLayer.sourceRectAtTime().width;
squareDiag = (Math.sqrt(2)*squareSize)/2/3.5;

try{
	squareOffset = effect("Slider Control")("Slider");
}

catch(err) {
    squareOffset = 0;
}


rot=transform.rotation;
scl=transform.scale[0]/100;
w=(squareSize/2)*scl;
r=(degreesToRadians(rot))*2;
t=transform.position;

[t[0]+w*rot/45,t[1]-(Math.abs((squareDiag+squareOffset)*Math.sin(r)))*scl];