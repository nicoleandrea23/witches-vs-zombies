class Hueso extends Enemigo{
    constructor(app, img) {
        super(app,img);
        this.vel=5;
        this.vida=20;
          }
      
          pintar(){
              this.app.image(this.img,this.x,this.y);
          }
      
}