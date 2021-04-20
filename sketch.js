 let object =["M31","M51","M77","M100","M101","M104","M106"];
 //creating arrays that line up objects with their data images. 
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
 let imageScreen; // for my class
 let x=0; //this decides which object we are looking at
 let dropdown=false; // this is for dropdown selection  
 //these are all of the sliders
 let r;
 let ir;
 let v;
 let uv;
 let xr;
 let oldr;
 let oldir;
 let oldv;
 let olduv;
 let oldxr;
 let oldx; 
 
 function preload(){ //to get all of the images ready 
 	for (i=0; i<object.length; i++){
 		if(UV[i]!=undefined){
 			UVimg[i]=loadImage("Objects/"+object[i]+"/"+UV[i]);
 			UVimg[i].resize(1000,0);
 		}
 		if(IR[i]!=undefined){
 			IRimg[i]=loadImage("Objects/"+object[i]+"/"+IR[i]);
 			IRimg[i].resize(1000,0);	
 		}
 		if(R[i]!=undefined){
 			Rimg[i]=loadImage("Objects/"+object[i]+"/"+R[i]);
 			Rimg[i].resize(1000,0);	
 		}
 		XRimg[i]=loadImage("Objects/"+object[i]+"/"+XR[i]);	
 		XRimg[i].resize(1000,0);
 		Vimg[i]=loadImage("Objects/"+object[i]+"/"+V[i]);
 		XRimg[i].resize(1000,0);	
 	}
 }
 function setup() {
 	createCanvas(2500,1500);
 	background(240);
//creating my sliders 
 	sliderR= createSlider(0,1,1,0.01);
 	sliderIR= createSlider(0,1,1,0.01);
 	sliderV= createSlider(0,1,1,0.01);

 	sliderUV= createSlider(0,1,1,0.01);

 	sliderXR= createSlider(0,1,1,0.01);
 	//loading my image and showing it 
 	//print(XRimg[x].width);
 	makeImage();
 	//imageScreen.compute(r,ir,v,uv,xr);
 	//imageScreen.show();

}
 function draw() {
  r=sliderR.value();
  ir=sliderIR.value();
  v=sliderV.value();
  uv=sliderUV.value();
  xr=sliderXR.value();
  //print('HERE');
  if((oldxr!=xr)||(oldir!=ir)||(oldv!=v)||(olduv!=uv)||(oldr!=r)||(oldx!=x)){
 	makeImage();
 	//print('here');
 }
 	if(mouseX<1210 && mouseX>1140){//
 		if(mouseY<205 && mouseY>135){
 			fill(235);
 			rect(1145,180,60,140);
 			for(y=0; y<object.length; y++){
 				fill(0);
 				text(object[y],1145,200+20*y);
 				dropdown=true;
 			}


 		}		
 	}

 	else {
 		stroke(240);
 		fill(240);
 		rect(1145,180,60,140);
 		stroke(0);
 		fill(0);
 		textSize(20);
 		text(object[x],1145,200);
 		text('Object',1070,200);
 		noFill();
 		rect(1145,180,60,20); 
 		textSize(20);
 	}
 	if(dropdown=true){
 		if(mouseX<1210 &&mouseX>1140){
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
 	oldxr=xr;
 	oldir=ir;
 	olduv=uv;
 	oldv=v;
 	oldr=r;
 	oldx=x;
 }

 function makeImage() {
 	stroke(240);
 	fill(240);
 	rect(0,0,1000,1500);
 	imageScreen = new Imagescreen(Rimg[x], IRimg[x], Vimg[x], UVimg[x], XRimg[x]);
 	imageScreen.load();
 	imageScreen.compute(r,ir,v,uv,xr);// reloading the image 
 	imageScreen.show();
}