class Enemigo {
    constructor(app, img) {
        this.app = app;
        this.img = img;
        this.vivo = true;
        this.x = this.app.width+300;
        this.y = 0;
        let j = Math.round(this.app.random(0, 3));
        switch(j){
            case 0:
            this.y = 400 + (((this.app.height - 400) / 4) * j);
            break;
            case 1:
            this.y = 400 + (((this.app.height - 400) / 4) * j);
            break;
            case 2:
            this.y = 400 + (((this.app.height - 400) / 4) * j);
            break;
            case 3:
            this.y = 400 + (((this.app.height - 400) / 4) * j);
            break;
        }
        this.vel;
        this.vida;
        this.mover=this.mover.bind(this);
        this. iden = setInterval(this.mover,50);
        this.validar=this.validar.bind(this);
        this. iden2 = setInterval(this.validar,20);
    }
    validar() {
        for (let i = 0; i < Logica.balas.length; i++) { 
            if (Logica.balas[i].validar(this.x + (this.img.width /2),this.y + (this.img.height /2))){
                this.vida -= Logica.balas[i].daño;
                Logica.balas.splice(i,1);
            }
        }
        if(this.vida <= 0){
            this.vivo = false;
        }
        if(this.vivo == false){
            clearInterval(this.iden);
            clearInterval(this.iden2);
        }
    }
    mover() {
        this.x -= this.vel;
    }
    getX(){
        return this.x;
    }
}