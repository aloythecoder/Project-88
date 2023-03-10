
// Create canvas variable
var canvas = new fabric.canvas('myCanvas');
//Set initial positions for ball and hole images.
ball_x= 0
ball_y= 0
hole_x= 400
hole_y= 800
block_image_width = 5;
block_image_height = 5;

function load_img(){
	// write code to Upload golf image on the canvas
fabric.Image.fromURL("golf-h.png", function(Img)) {
block_image_object = Img;
hole_obj = Img;
hole_obj.scaleToWidth(50);
hole_obj.scaleToHeight(50);({
top:hole_x,
left:hole_y
})
canvas.add(hole_obj);
}
new_image();
}


function new_image()
{
	// write code to Upload ball image on canvas
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	if ((ball_y=hole_y)&&(ball_x=hole_x)) {
		canvas.remove(hole_obj);
	}
    
    
    
    
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_x <450)
		{
		   ball_y = ball_y + block_image_height;
		   console.log("block image height = " + block_image_height);
		   console.log("when Down arrow key is pressed, X ="+ ball_x + " , Y = "+ball_y);
		   canvas.remove(hole_obj);
		   new_image();
		}
	}

	function down()
	{
		 // Write a code to move ball downward.
		 if(ball_x <450)
		{
		   ball_y = ball_y + block_image_height;
		   console.log("block image height = " + block_image_height);
		   console.log("when Down arrow key is pressed, X ="+ ball_x + " , Y = "+ball_y);
		   canvas.remove(hole_obj);
		   new_image();
		}
	}

	function left()
	{
		if(ball_x >5)
		{
			// Write a code to move ball left side.
			if(ball_x >0)
		{
			ball_x = ball_x + block_image_width;
		   console.log("block image height = " + block_image_width);
		   console.log("when Down arrow key is pressed, X ="+ ball_x + " , Y = "+ball_y);
		   canvas.remove(hole_obj);
		   new_image();
		}
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
		   ball_x = ball_x + block_image_width;
		   console.log("block image height = " + block_image_width);
		   console.log("when Down arrow key is pressed, X ="+ ball_x + " , Y = "+ball_y);
		   canvas.remove(hole_obj);
		   new_image();
		}
		
	}
	
}

