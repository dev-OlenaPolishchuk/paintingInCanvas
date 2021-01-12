
 var canvas = document.getElementById('myPaint');
 var c = canvas.getContext('2d');
 var myColour = 'red';


document.getElementById('colorfull').oninput = function(){
	myColour = this.value;
}


 canvas.onmousedown = function(event){
 	canvas.onmousemove = function (event) {
 	var x = event.offsetX;
 	var y = event.offsetY;
 
 	c.fillRect(x-5, y-5, 10,10);
 	c.globalAlpha = 0.3;
 	c.fillStyle = myColour;
 	c.fill();
 	}

 	canvas.onmouseup = function(){
 		canvas.onmousemove = null;
 	}
 } 
 
// Olena Polishcuk 2021
