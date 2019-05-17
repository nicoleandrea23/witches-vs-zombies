class Rosa {
    constructor(app,imgBalas,img, x, y) {
        this.app = app;
        this.img = img;
        this.x = x;
        this.y = y;
        this.imgBalas=imgBalas;
        this.disparar=this.disparar.bind(this);
        setInterval(this.disparar,3000);

    }

pintar(){
    this.app.image(this.img,this.x,this.y);
}
disparar(){
    Logica.balas.push(new balaRosa(this.app,this.imgBalas,this.x+(this.img.width),this.y+(this.img.height/2)));
}
}