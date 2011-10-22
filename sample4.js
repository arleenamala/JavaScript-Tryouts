
var myDrawFunction = new function() 
{
this.circle=null;
this.rect = null;
this.square=null;
this.text=null;
this.paper = null;
this.st = null;
this.animObject=null;

this.displayTools = function()
{
	document.getElementById('tool1').style.display="";
	document.getElementById('tool2').style.display="";
	document.getElementById('tool3').style.display="";
	document.getElementById('tool4').style.display="";
	document.getElementById('tool5').style.display="";
	this.paper = Raphael( document.getElementById('animateobject'),800,900);
	this.st = this.paper.set();
	
};

this.displayget = function(displayid)
{
	if(document.getElementById(displayid).style.display == "none")
	{
	document.getElementById(displayid).style.display="";
	}
	else
	{
	document.getElementById(displayid).style.display = "none";
	}

};

this.clearPaper = function()
{
   this.paper.clear();
   this.st.clear();
	
};


this.drawCircle = function( x, y, r)
{
 
 this.circle = this.paper.circle(x,y,r);
 this.circle.attr("fill","#ffc");
 this.st.push(this.circle);
 
};


this.drawRect = function( x1, y1, l, b)
{
 
 this.rect = this.paper.rect(x1,y1,l,b);
 this.rect.attr("fill","#f86");
 this.st.push(this.rect);

};

this.drawSquare = function( x2, y2, s)
{

 this.square = this.paper.rect(x2,y2,s,s);
 this.square.attr("fill","#3df");
 this.st.push(this.square);
 
};

this.drawText = function( t1 )
{

this.text = this.paper.text(450,200,t1);
this.text.attr("font-size",32);
this.text.attr("fill","cornflowerblue");
this.st.push(this.text);

};

this.getCircleIP = function()
{
var elementx = document.getElementById('x');
var x = elementx.value;
x = parseInt(x) + 100;
var elementy = document.getElementById('y');
var y = elementy.value;
y = parseInt(y) + 100;
var elementr = document.getElementById('r');
var r = elementr.value;
this.drawCircle(x,y,r);
};

this.getRectIP = function()
{
var x1=document.getElementById('x1').value;
x1 = parseInt(x1) + 100;
var y1=document.getElementById('y1').value;
y1 = parseInt(y1) + 100;
var l=document.getElementById('l').value;
var b=document.getElementById('b').value;
this.drawRect(x1,y1,l,b);
};

this.getSquareIP = function()
{
var x2=document.getElementById('x2').value; 
x2 = parseInt(x2) + 100;
var y2=document.getElementById('y2').value;
y2 = parseInt(y2) + 100;
var s=document.getElementById('s').value;
this.drawSquare(x2,y2,s);
};

this.getTextIp = function()
{

var t1 = document.getElementById('t1').value; 
this.drawText(t1);

};

this.run = function()
{

this.animObject = this.paper.raphael.animation({r:20,transform:"r60s3t100,50s-1.5r120"},10000,"bounce",null);
this.st.forEach(this.st.animate(this.animObject.repeat(Infinity)),this);

};


this.stop = function()
{

this.st.forEach(this.st.stop(),this);

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