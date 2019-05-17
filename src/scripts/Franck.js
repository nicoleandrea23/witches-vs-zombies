class Franck extends Enemigo{ 
    constructor(app, img) {
  super(app,img);
  this.vel=2;
  this.vida=50;
    }

    pintar(){
        this.app.image(this.img,this.x,this.y);
    }
}