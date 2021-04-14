class Imagescreen{

	constructor(imgR,imgIR,imgV,imgUV,imgXR){
	
		this.Rimg=imgR; 
		this.IRimg=imgIR; 
		this.Vimg=imgV; 
		this.UVimg=imgUV; 
		this.XRimg=imgXR;
		
	}
	show(){
		
		let img=createImage(this.XRimg.width,this.XRimg.height);
		img.loadPixels();
		if(this.Rimg!=undefined){
					this.Rimg.loadPixels();
				}

		//print(this.UVimg);
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

				if(this.UVimg!=undefined){
					
					img.pixels[index+2]+=this.UVimg.pixels[index];

				}

		img.pixels[index+1]=this.Vimg.pixels[index];//green

		img.pixels[index]+=this.XRimg.pixels[index];
		img.pixels[index+2]+=this.XRimg.pixels[index];


		img.pixels[index+3]=255;//opacity
		}
	}
	img.updatePixels();
    img.resize(525,0)

	image(img,0,0);
	}
} 


