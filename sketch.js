 let object =["M31","M101"];
 let R= [undefined,undefined];
 let IR= ["M31 Infrared.jpeg","M101 Infrared.jpeg"];
 let V= ["M31 Visible.jpeg","M101 Visible.jpeg"];
 let UV= [undefined,"M101 Ultraviolet.jpeg"];
 let XR= ["M31 Xray.jpeg","M101 Xray.jpeg"];
 let IRimg=[];
 let Rimg=[];
 let Vimg=[];
 let UVimg=[];
 let XRimg=[];
 let imageScreen;
 let x=0;

 function preload(){ 
 	///print("HERE2");
 	for (i=0; i<object.length; i++){
 	if(UV[i]!=undefined){
 		UVimg[i]=loadImage("Objects/"+object[i]+"/"+UV[i]);
 	}
 	if(IR[i]!=undefined){
 		IRimg[i]=loadImage("Objects/"+object[i]+"/"+IR[i]);	
 	}
 	if(R[i]!=undefined){
 		Rimg[i]=loadImage("Objects/"+object[i]+"/"+R[i]);	
 	}
 	XRimg[i]=loadImage("Objects/"+object[i]+"/"+XR[i]);	
 	Vimg[i]=loadImage("Objects/"+object[i]+"/"+V[i]);	
}


 }
 function setup() {
 	createCanvas(800,800);
 	background(0,0,255);
 	print(x);
 	imageScreen = new Imagescreen(Rimg[x], IRimg[x], Vimg[x], UVimg[x], XRimg[x]);
 	//print(IRimg[0]);

 }

 function draw() {
 	imageScreen.show();
 }