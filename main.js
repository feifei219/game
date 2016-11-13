function Game(canvas){
    this.canvas=canvas;
    this.cobj=canvas.getContext("2d");
    this.frame=0;  //记录当前是第几帧
    this.obstracle=[];
    this.value=40;
    this.person=new Person(canvas);
    this.state=true;
}
Game.prototype={
    play:function(){
        this.update();
    },
    update:function(){
        this.frame++;
        this.cobj.clearRect(0, 0, canvas.width, canvas.height);
        this.updatescene();
        this.updatestracle();
        this.updateperson();
        if(this.state){
            requestAnimationFrame(this.update.bind(this));
        }
        
    },
    updatescene:function(){
        this.canvas.style.backgroundPosition=-this.frame*5+"px 0";
    },
    updatestracle:function(){
        if(this.frame==this.value){
            this.value+=40+Math.floor(Math.random()*80);
            // var num=Math.random()<0.8?1:2;
            var num=Math.ceil(Math.random()*3);
            this.obstracle.push(new Obstacle(this.canvas,num));
        }
        if(this.obstracle.length>4){
            var obj=this.obstracle.shift();
            obj=null;
        }
        this.obstracle.forEach((function(value){
            if(hitPix(this.canvas,value,this.person)){
                this.state=false;
            }
            value.update();
        }).bind(this));
    },
    updateperson:function(){
        this.person.update(this.frame);
    }


}
   var canvas=document.querySelector("canvas");
   var cobj=canvas.getContext("2d");
   var newgame=new Game(canvas);
   newgame.play();
