
var myDrawFunction = new function() 
{
this.seconds=0;
this.flag=false;
this.intervalid; 
this.rect = null;
this.paper = null;
this.setcountertimer = function ()
{
	this.seconds=5;
};


this.displayTools = function()
{
	document.getElementById('tool1').style.display="";
	document.getElementById('tool2').style.display="";
	document.getElementById('tool3').style.display="";
	document.getElementById('tool4').innerText="Clear Screen";
	this.paper = Raphael( document.getElementById('animateobject'),800,600);
	
};

this.displayget = function(displayid)
{
	document.getElementById(displayid).style.display="";

};

this.clearPaper = function()
{
   this.paper.clear();
	
};



this.counter = function()
{
if(this.flag==true)
{
	    if(this.seconds==0)
	{
	   clearInterval(this.intervalid);
	   //document.getElementById('txt2').innerText = this.seconds;
	   this.updateResult();
	   this.intervalid = setInterval("myDrawFunction.counter()",1000);

     }
	else
	{
   	    //document.getElementById('txt2').innerText = this.seconds;
   	    this.seconds = this.seconds-1;
	}
}
};
this.drawCircle = function( x, y, r)
{
 
 this.rect = this.paper.circle(x,y,r);
 this.rect.attr("fill","#ffc");
 //var r1=Raphael.matrix(350,300,40,50,60,70);
 //var r2=this.paper.circle(r1);
};
this.drawRect = function( x1, y1, l, b, r1)
{
 
 this.rect = this.paper.rect(x1,y1,l,b,r1);
 this.rect.attr("fill","#f86");

};
this.drawSquare = function( x2, y2, s, r2)
{

 this.rect = this.paper.rect(x2,y2,s,s,r2);
 this.rect.attr("fill","#3df");
 
};

this.getCircleIP = function()
{
var elementx = document.getElementById('x');
var x = elementx.value;
var elementy = document.getElementById('y');
var y = elementy.value;
var elementr = document.getElementById('r');
var r = elementr.value;
this.drawCircle(x,y,r);
};

this.getRectIP = function()
{
var x1=document.getElementById('x1').value;
var y1=document.getElementById('y1').value;
var l=document.getElementById('l').value;
var b=document.getElementById('b').value;
var r1=document.getElementById('r1').value;
this.drawRect(x1,y1,l,b,r1);
};

this.getSquareIP = function()
{
var x2=document.getElementById('x2').value;
var y2=document.getElementById('y2').value;
var s=document.getElementById('s').value;
var r2=document.getElementById('r2').value;
this.drawSquare(x2,y2,s,r2);
};



this.run = function()
{
//var anim = Raphael.animation({x:"600", y:"200"},2000,null);
//this.rect.animate({x:"525"},10000,"linear",null);

//this.rect = this.rect.rotate(45);
//this.rect.transform("t100,100r45t-100,0");
this.rect.animate({x:"300",y:"300",width:"150",height:"150",r:"100"},10000,"bounce",null);


};

this.delayeddisplay = function ()
{
     this.setcountertimer();
     this.flag=true;
     this.counter();
     this.intervalid = setInterval("myDrawFunction.counter()",1000);
 };
     
this.updateResult = function()
{
//resulting animation
 	this.setcountertimer();
 	this.counter();
};

this.stop = function()
{
this.flag=false;

};

this.changecolor = function(id)
{
document.getElementById(id).style.color="red";
};

this.reversecolor =function(id)
{
document.getElementById(id).style.color="";
};


};