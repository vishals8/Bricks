var canvas;
var con;
var sprite,slide,bullet;
var x=0,y=0;
var fps=60;
var cwidth=100;
var cheight=150;
var slidex=30,slidey=cheight-10;
var bulletx=slidex+15,bullety=slidey,bulact=true;
var bulletLimit=0;
var time=0;
var up=1;
var allbricks=[];
var jj=0;
var loc,score=0;
var u=true;

function start(){
alert ("start");
init();
var ii=setInterval(function(){draw();update();},1000/fps);
}



function init()
{
canvas=document.getElementById("gameCanvas");
con=canvas.getContext("2d");


slide=new Image();
slide.src="images/slide.png";
bullet=new Image();
bullet.src="images/bullet.png";


for(ine=0;ine<150;ine++)
{
allbricks[ine]=new Image();
allbricks[ine].src="images/brick.png";

}
loc=allbricks[0].src;
}

function update()
{

loadBricks();

if(bullety>bulletLimit)
bullety-=7;
else
{bulletx=slidex+15;
bullety=slidey;bulact=true;}


var ss=document.getElementById("ff");
ss.innerHTML="Score: "+score;

checkup();

if(up>14)
{
var ss=document.getElementById("fd");
ss.innerHTML="Game Over";
ends();
}
}
function ends()
{
canvas.width=canvas.width;
ends();
}

function checkup()
{
u=true;
for(ck=(up-1)*10;ck<(up)*10;ck++)
{if(!(allbricks[ck].src==loc))
continue;
else 
{u=false;break;}
}

}
function loadBricks()
{
jj=0;
time=time+1;

if(time>2*fps)
{up=up+1;
time=0;
updateChangeInfo();

if(u)
up=up-1;

}
for(i=0;i<up;i++)
{for(j=0;j<10;j++){
if(bulact)
	if(bullety>i*10 && bullety<(i+1)*10)
	{if(bulletx>j*10 && bulletx<(j+1)*10)
	{
	if(allbricks[jj].src==loc)
	{
	allbricks[jj].src="images/blank.png";
	bulact=false;
	score=score+1;
	}
	}
	}
	con.drawImage(allbricks[jj],j*10,i*10);
jj=jj+1;
}}



}


function updateChangeInfo()
{
for(im=149;im>=10;im--)
{

allbricks[im].src=allbricks[im-10].src;

}

for(im=9;im>=0;im--)
allbricks[im].src="images/brick.png";



}







function draw()
{
con.clearRect(0,0,cwidth,cheight);
con.drawImage(slide,slidex,slidey);
con.drawImage(bullet,bulletx,bullety);
}

document.onkeydown= function(event) {
    if(event.keyCode == 37) {
	if(slidex>-15)
                slidex-=3;
    }
    else if(event.keyCode == 39) {
	if(slidex<cwidth-17)
        slidex+=3;
    }
};


