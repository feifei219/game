function Obstacle(canvas,num){
    this.cobj=canvas.getContext("2d");
    this.x=canvas.width;
    this.y=423;
    this.width=57;
    this.height=57;
    this.img=document.querySelectorAll(".obstracle");
    this.type=num;  //地上的障碍物

}
Obstacle.prototype={
    draw:function(){
        if(this.type==1){
            this.cobj.drawImage(this.img[0], 0, 0, 146,134,this.x,this.y,this.width,this.height);
        }else if(this.type==2){
            this.cobj.drawImage(this.img[1], 0, 0, 57,57,this.x,this.y-180,this.width,this.height);
        }else if(this.type==3){
            this.cobj.drawImage(this.img[1], 0, 0, 57,57,this.x,this.y-30,this.width,this.height);
        }
        
    },
    update:function(){
        if(this.type==1){
            this.x-=5;
        }
        if(this.type==2||this.type==3){
            this.x-=7;
        }
        this.draw();
    }
}