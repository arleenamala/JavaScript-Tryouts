
var myDelayFunction = new function() {
this.count=0;
this.seconds=0;
this.flag=false;
this.intervalid; 
this.setcountertimer = function ()
{
	this.seconds=5;
};
this.setcount = function()
{
    this.count = 2;
};


this.display = function()
{
	document.getElementById('txt').innerText="Sample example";
	
};

this.counter = function()
{
if(this.flag==true)
{
	    if(this.seconds==0)
	{
	   clearInterval(this.intervalid);
	   document.getElementById('txt2').innerText = this.seconds;
	   this.updateResult();
	   this.intervalid = setInterval("myDelayFunction.counter()",1000);

     }
	else
	{
   	    document.getElementById('txt2').innerText = this.seconds;
   	    this.seconds = this.seconds-1;
	}
}
};

this.delayeddisplay = function ()
{
     this.setcountertimer();
     this.setcount();
     this.flag=true;
     this.counter();
     this.intervalid = setInterval("myDelayFunction.counter()",1000);
 };
     
this.updateResult = function()
{
     if((this.count%2)==0)
     {
 	document.getElementById('txt1').innerText="Delayed output";
 	document.getElementById('toggletext').innerText=""; 	document.getElementById('image1').src="/Users/arleen/Desktop/samplejavascript/1315505517-19.jpg";
 	this.count=this.count+1;
 	this.setcountertimer();
 	this.counter();
 	}
 	else
 	{
 	document.getElementById('txt1').innerText="Delayed output2"; 	document.getElementById('image1').src="/Users/arleen/Desktop/samplejavascript/1315505517-28.jpg";
 	this.count=this.count+1;
 	this.setcountertimer();
 	this.counter();
 	}
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