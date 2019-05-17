class balaRosa {
    constructor(app, img, x, y) {
        this.app = app;
        this.img = img;
        this.x = x;
        this.y = y;
        this.vel=5;
        this.daño=5;
        this.mover=this.mover.bind(this);
        setInterval(this.mover,50);
    }
    pintar() {
        this.app.imageMode(this.app.CENTER);
        this.app.image(this.img, this.x, this.y);
        this.app.imageMode(this.app.CORNER);
    }
    mover(){
        this.x+=this.vel;
    }
    validar(x,y){
        if(this.app.dist(this.x,this.y,x,y)<this.img.width/2){
            return true;
        }else{
            return false;
        }
    }
}