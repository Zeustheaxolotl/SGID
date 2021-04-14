 let object =["M31","M51","M77","M100","M101","M104","M106"];
 let R= [undefined,undefined,"M77 Radio.jpeg",undefined,undefined,undefined,"M106 Radio.jpeg"];
 let IR= ["M31 Infrared.jpeg","M51 Infrared.jpeg",undefined,"M100 Infrared.jpeg","M101 Infrared.jpeg","M104 Infrared.jpeg","M106 Infrared.jpeg"];
 let V= ["M31 Visible.jpeg","M51 Visible.jpeg","M77 Visible.jpeg","M100 Visible.jpeg","M101 Visible.jpeg","M104 Visible.jpeg","M106 Visible.jpeg"];
 let UV= [undefined,"M51 Ultraviolet.jpeg",undefined,undefined,"M101 Ultraviolet.jpeg",undefined,undefined];
 let XR= ["M31 Xray.jpeg","M51 Xray.jpeg","M77 Xray.jpeg","M100 Xray.jpeg","M101 Xray.jpeg","M104 Xray.jpeg","M106 Xray.jpeg"];
 let IRimg=[];
 let Rimg=[];
 let Vimg=[];
 let UVimg=[];
 let XRimg=[];
 let imageScreen;
 let x=2;
 let dropdown=false;
 
 function preload(){ 
 	//print(UV);
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
background(240);
 	//print(x);
 	makeImage();
 
 }

 function draw() {
 	if(mouseX<710 && mouseX>640){
 		if(mouseY<205 && mouseY>135){
 			fill(235);
 			rect(645,180,60,140);
 			for(y=0; y<object.length; y++){
 				fill(0);
 			text(object[y],645,200+20*y);
 			dropdown=true;
}


 		}		
 	}

 		else {
 			stroke(240);
 			fill(240);
 			rect(645,180,60,140);
 			stroke(0);
 			fill(0);
 			textSize(20);
 			text(object[x],645,200);
 			text('Object',570,200);
 			noFill();
 			rect(645,180,60,20); 
 			textSize(20);
 		}
if(dropdown=true){
	if(mouseX<710 &&mouseX>640){
		if(mouseIsPressed){
			print(mouseY);
			print(mouseX);
			if(mouseY<200 && mouseY>180){
				x=0
				makeImage();
				}
				if (mouseY<220 && mouseY>200){
				x=1
				makeImage();
				}
				if (mouseY<240 && mouseY>220){
				x=2
				makeImage();
				}
				if (mouseY<260 && mouseY>240){
				x=3
				makeImage();
				}
				if (mouseY<280 && mouseY>260){
				x=4
				makeImage();
				}
				if (mouseY<300 && mouseY>280){
				x=5
				makeImage();
				}
				if (mouseY<320 && mouseY>300){
				x=6
				makeImage();
				}
			}
		}
	}
}

function makeImage() {
stroke(240);
fill(240);
rect(0,0,570,800);
		imageScreen = new Imagescreen(Rimg[x], IRimg[x], Vimg[x], UVimg[x], XRimg[x]);
 	imageScreen.show();

 	}
