function setup()
{
    createCanvas(800,600);
	
}

function draw()

{

	background(0);
	

    fill(255);
    ellipse(100,200,200,200);
    fill(0);
    ellipse(100,200,120,120);



    fill(124,252,0);
    ellipse(200,400,200,200);
    fill(0);
    ellipse(200,400,120,120);

    drawDonut(0,255,255,400,200);
    drawDonut(255,20,147,700,400);
    drawDonut(255,215,0,800,500);
    drawDonut(255,182,193,400,400)


    fill(255,255,255);
    ellipse(mouseX,mouseY,100,100);

	}

function drawDonut(r,g,b,x,y)

{

    fill(r,g,b);
    ellipse(x,y,200,200);
    fill(0);
    ellipse(x,y,120,120);

}//