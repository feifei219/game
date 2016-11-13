function Person(canvas){
    this.cobj=canvas.getContext("2d");
    this.x=120;
    this.y=362;
    this.width=120;
    this.height=120; 
    this.img=document.querySelectorAll(".person");
    this.pos=0;  //人的位置
    this.jump=false;
    this.click();
    this.jumpheight=0;
    this.heightcontrol=30;
}
Person.prototype={
    click:function(){
        document.onclick=(function(){
            this.jump=true;

        }).bind(this);
    },
    draw:function(){
        this.cobj.drawImage(this.img[this.pos], 0, 0, 110,134,this.x,this.y-this.jumpheight,this.width,this.height);
    },
    update:function(frame){
        if(this.jump){
            this.pos=4;
            if(frame%4==0){
                this.heightcontrol-=3;
                this.jumpheight+=this.heightcontrol;
                if(this.jumpheight<=0){
                    this.jumpheight=0;
                    this.jump=false;
                    this.heightcontrol=30;
                }
            }
            
            this.draw();
        }else{
            this.pos=Math.floor(frame/4)%this.img.length;
            this.draw();
        }
        
    }
}