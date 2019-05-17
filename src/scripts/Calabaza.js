class Calabaza extends Enemigo{
    constructor(app, img) {
        super(app,img);
        this.vel=3.5;
        this.vida=30;
          }
      
          pintar(){
              this.app.image(this.img,this.x,this.y);
          }
      }
