

class Imagescreen{

	constructor(imgR,imgIR,imgV,imgUV,imgXR){
	
		this.Rimg=imgR; 
		this.IRimg=imgIR; 
		this.Vimg=imgV; 
		this.UVImg=imgUV; 
		this.XRimg=imgXR;
		
	}
	show(){
		fill(0,255,0);
		circle(200,150,30);
		let img=createImage(525,526);
		img.loadPixels();
		if(this.Rimg!=undefined){
					this.Rimg.loadPixels();
				}

		if(this.UVimg!=undefined){
					this.UVimg.loadPixels();
						}
		if(this.IRimg!=undefined){
			this.IRimg.loadPixels();	
				}
		this.XRimg.loadPixels();
		this.Vimg.loadPixels();
		
		for(let x=0; x<img.width; x++){
			for(let y=0; y<img.height; y++){
				let index = (x+y*img.width)*4;
				if(this.Rimg!=undefined){
					img.pixels[index]+=this.Rimg.pixels[index];
					img.pixels[index+1]+=this.Rimg.pixels[index];			

				}
				if(this.IRimg!=undefined){
				
					img.pixels[index]+=this.IRimg.pixels[index];	
				}

				//if(this.UVimg!=undefined){
					
				//	img.pixels[index+2]+=this.UVimg.pixels[index];

				//}

		img.pixels[index+1]=this.Vimg.pixels[index];//green

		img.pixels[index]+=this.XRimg.pixels[index];
		img.pixels[index+2]+=this.XRimg.pixels[index];


		img.pixels[index+3]=255;//opacity
		}
	}
	img.updatePixels();


	image(img,0,0);
	}
} 


