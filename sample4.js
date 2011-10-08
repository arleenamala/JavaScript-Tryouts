
var myDrawFunction = new function() 
{
this.seconds=0;
this.flag=false;
this.intervalid; 
this.rect;
this.paper;
this.setcountertimer = function ()
{
	this.seconds=5;
};


this.displayTools = function()
{
	document.getElementById('tool1').innerText="Circle";
	document.getElementById('tool2').innerText="Rectangle";
	document.getElementById('tool3').innerText="Square";
	document.getElementById('tool4').innerText="Clear Screen";
	this.paper = Raphael( document.getElementById('animateobject'),800,600);
	
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
this.drawCircle = function()
{
 
 this.rect = this.paper.circle(350,200,50);
 this.rect.attr("fill","#ffc");
 //var r1=Raphael.matrix(350,300,40,50,60,70);
 //var r2=this.paper.circle(r1);
};
this.drawRect = function()
{
 
 this.rect = this.paper.rect(200,200,50,100);
 this.rect.attr("fill","#f86");

};
this.drawSquare = function()
{

 this.rect = this.paper.rect(250,250,50,50);
 this.rect.attr("fill","#3df");
 
};
this.run = function()
{
//var anim = Raphael.animation({x:"600", y:"200"},2000,null);
//this.rect.animate({x:"525"},10000,"linear",null);

this.rect.animate({x:"550",y:"100",width:"150",height:"150",r:"100"},10000,"bounce",null);
this.rect = this.rect.rotate(45);
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