class Piso {
    constructor(app,x, y) {
        this.app = app;
        this.x = x;
        this.y = y;
        this.height=(this.app.height-400)/4;
        this.width=this.app.width/9;
      
    }

pintar(){
    this.app.fill(255,255,255,0.4);
    this.app.rect(this.x,this.y,this.width,this.height);
}
validar(x,y){
    if(x>this.x && x<this.x + this.width && y>this.y && y<this.y + this.height){
        return true;
    }
    else{ 
        return false;
    }

}
}