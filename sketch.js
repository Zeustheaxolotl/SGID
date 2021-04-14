 let object =["M31"];
 let R= [undefined];
 let IR= ["M31 Infrared.jpeg"];
 let V= ["M31 Visible.jpeg"];
 let UV= [undefined];
 let XR= ["M31 Xray.jpeg"];
 let IRimg;
 let Rimg;
 let Vimg;
 let UVimg;
 let XRimg;
 let imageScreen;

 function preload(){
 	print("HERE2")
//for(x=0; x++)
 	if(UV[0]!=undefined){
 		UVimg=loadImage("Objects/"+object[0]+"/"+UV[0]);
 	}
 	if(IR[0]!=undefined){
 		IRimg=loadImage("Objects/"+object[0]+"/"+IR[0]);	
 	}
 	if(R[0]!=undefined){
 		Rimg=loadImage("Objects/"+object[0]+"/"+R[0]);	
 	}
 	XRimg=loadImage("Objects/"+object[0]+"/"+XR[0]);	
 	Vimg=loadImage("Objects/"+object[0]+"/"+V[0]);	



 }
 function setup() {
 	createCanvas(800,800);
 	background(0,0,255);
 	imageScreen = new Imagescreen(Rimg, IRimg, Vimg, UVimg, XRimg);
 	print("HERE");

 }

 function draw() {
 	imageScreen.show();
 }