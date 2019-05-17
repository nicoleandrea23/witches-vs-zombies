class Araña{
    constructor(app,img,x, y) {
        this.app = app;
        this.x=x;
        this.y=y;
        this.img=img;
        this.vel=3;
        this.araña=50;
        this.mover=this.mover.bind(this);
        setInterval(this.mover,50);
}
pintar(){
    this.app.imageMode(this.app.CENTER);
    this.app.image(this.img,this.x,this.y);
    this.app.imageMode(this.app.CORNER);

}

mover(){
    if(this.y<this.app.height-200){
        this.y+=this.vel;
    }
}

validar(x,y){
    if(this.app.dist(this.x,this.y,x,y)<this.img.width/2){
        return true;
    
    }else{
        return false;
    }
}

}