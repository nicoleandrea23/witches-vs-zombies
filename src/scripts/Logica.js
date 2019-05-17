class Logica {
   static balas = [];
    constructor(app) {
        this.app = app;
        app.createCanvas(1864, 1381);
        this.pantalla = 0;
        this.vidas=3;
        this.pisos = [];
        this.arañitas = [];
        this.enemigos = [];
        this.rosas = [];
        this.boton = 0;
        this.arrastrar = false;
        this.arañas = 300;
        this.precioRosa = 100;
        this.precioVerde = 200;
        this.minutos = 0;
        this.segundos = 0;
        this.numeroEnemigos = 1;

        for (let i = 0; i < this.rosas.length; i++) {
            this.rosas.push(new Rosa(this.app, this.balaRosada, this.rosa,this.rosas.x,this.rosas.y))
            
        }
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 4; j++) {
                this.pisos.push(new Piso(this.app, (this.app.width / 9) * i, 400 + (((this.app.height - 400) / 4) * j)));
            }
        }

    }

    precargar() {
        this.pantallaInicio = this.app.loadImage("./src/images/pantallainicio.png");
        this.pantallaDos = this.app.loadImage("./src/images/pantallados.png");
        this.pantallaTres = this.app.loadImage("./src/images/pantallatres.png");
        this.pantallaJuego = this.app.loadImage("./src/images/juego.png");
        this.balaRosada = this.app.loadImage("./src/images/balarosada.png");
        this.balaVerde = this.app.loadImage("./src/images/balaverde.png");
        this.calabaza = this.app.loadImage("./src/images/calabaza.png");
        this.frack = this.app.loadImage("./src/images/franck.png");
        this.huesos = this.app.loadImage("./src/images/huesos.png");
        this.posion = this.app.loadImage("./src/images/posion.png");
        this.rosa = this.app.loadImage("./src/images/rosa.png");
        this.verde = this.app.loadImage("./src/images/verde.png");
        this.corazon = this.app.loadImage("./src/images/corazon.png");
        this.araña = this.app.loadImage("./src/images/araña.png");
        this.botonRosa = this.app.loadImage("./src/images/botonrosa.png");
        this.botonVerde = this.app.loadImage("./src/images/botonverde.png");
        this.pantallaFinal = this.app.loadImage("./src/images/pantallafinal.png");


        console.log(this.rosas.length);
    }
    pintar() {
        this.app.background(255);
        switch (this.pantalla) {
            case 0:
                this.app.image(this.pantallaInicio, 0, 0);

                break;
            case 1:
                this.app.image(this.pantallaDos, 0, 0);

                break;
            case 2:
                this.app.image(this.pantallaTres, 0, 0);

                break;
            case 3:
                this.app.image(this.pantallaJuego, 0, 0);
               this.xVidas=380;
                for (let i = 0; i <this.vidas; i++) {
                    this.app.image(this.corazon,this.xVidas,80);
                 this.xVidas+=100;
                    
                }
                for (let i = 0; i < this.enemigos.length; i++) {
                    
           if (this.enemigos[i].getX() < 0) {
               
              this.enemigos.splice(i, 1);
              this.vidas--;
            }
                    
                }

                if(this.vidas==0){
                    this.pantalla=4;
                }

                if (this.arañas < this.precioRosa) {
                    this.app.tint(255, 0, 0);
                    this.app.image(this.botonRosa, 709, 65);
                    this.app.noTint();
                } else {
                    this.app.image(this.botonRosa, 709, 65);

                }
                if (this.arañas < this.precioVerde) {
                    this.app.tint(255, 0, 0);
                    this.app.image(this.botonVerde, 1042, 65);
                    this.app.noTint();
                } else {
                    this.app.image(this.botonVerde, 1042, 65);

                }
                this.app.fill(255);
                this.app.textSize(45);
                this.app.textAlign(this.app.CENTER, this.app.CENTER);
                this.app.text(this.arañas, 256, 118);
                this.app.text(this.minutos + " : " + this.segundos, 1684, 127);
                for (let i = 0; i < this.pisos.length; i++) {
                    this.pisos[i].pintar();

                }
                for (let i = 0; i < this.enemigos.length; i++) {
                    this.enemigos[i].pintar();

                }
                for (let i = 0; i < Logica.balas.length; i++) {
                    Logica.balas[i].pintar();
                    if (Logica.balas[i].x > 1820) {
                        Logica.balas.splice(i, 1);
                    }

                }
                for (let i = 0; i < this.arañitas.length; i++) {
                    this.arañitas[i].pintar();

                }
                if (this.arrastrar == true) {
                    switch (this.boton) {
                        case 1:
                            this.app.imageMode(this.app.CENTER);
                            this.app.image(this.rosa, this.app.mouseX, this.app.mouseY);
                            this.app.imageMode(this.app.CORNER);
                            break;
                        case 2:
                            this.app.imageMode(this.app.CENTER);
                            this.app.image(this.verde, this.app.mouseX, this.app.mouseY);
                            this.app.imageMode(this.app.CORNER);

                            break;
                   
                        }
                }
                break;
                case 4:
                this.app.image(this.pantallaFinal,0,0);

                break;



        } 
    }
    click() {
        //console.log("x= " + this.app.mouseX + "y= " + this.app.mouseY);
        switch (this.pantalla) {
            case 0:

                if (this.app.mouseX > 1289 && this.app.mouseX < 1603 && this.app.mouseY > 1164 && this.app.mouseY < 1292) {
                    this.pantalla = 2;

                }
                if (this.app.mouseX > 228 && this.app.mouseX < 628 && this.app.mouseY > 1165 && this.app.mouseY < 1294) {
                    this.pantalla = 1;

                } break;
            case 1:

                if (this.app.mouseX > 809 && this.app.mouseX < 1124 && this.app.mouseY > 1170 && this.app.mouseY < 1296) {
                    this.pantalla = 2;

                } break;
            case 2:

                if (this.app.mouseX > 793 && this.app.mouseX < 1182 && this.app.mouseY > 1160 && this.app.mouseY < 1279) {
                    this.pantalla = 3;
                    this.aumentarArañas = this.aumentarArañas.bind(this);
                    setInterval(this.aumentarArañas, 5000);
                    this.contador = this.contador.bind(this);
                    setInterval(this.contador, 1000);
                    this.crearEnemigos = this.crearEnemigos.bind(this);
                    setInterval(this.crearEnemigos, 5000);
                    this.aumentarNumeroEnemigos = this.aumentarNumeroEnemigos.bind(this);
                    setInterval(this.aumentarNumeroEnemigos, 60000);
                    this.actualizar = this.actualizar.bind(this);
                    setInterval(this.actualizar, 60);

                } break;
            case 3:
                if (this.app.mouseX > 709 && this.app.mouseX < 1011 && this.app.mouseY > 71 && this.app.mouseY < 171 && this.arañas >= this.precioRosa) {
                    this.boton = 1;
                    this.arrastrar = true;
                }
                if (this.app.mouseX > 1042 && this.app.mouseX < 1342 && this.app.mouseY > 72 && this.app.mouseY < 169 && this.arañas >= this.precioVerde) {
                    this.boton = 2;
                    this.arrastrar = true;
                }
                break;
        }

    }
    clickSoltar() {
        if (this.pantalla == 3) {
            for (let i = 0; i < this.pisos.length; i++) {
                if (this.pisos[i] instanceof Piso && this.arrastrar == true && this.pisos[i].validar(this.app.mouseX, this.app.mouseY)) {
                    switch (this.boton) {
                        case 1:
                            this.pisos[i] = new Rosa(this.app, this.balaRosada, this.rosa, this.pisos[i].x + 10, this.pisos[i].y);
                            this.arañas -= this.precioRosa;
                            break;
                        case 2:
                            this.pisos[i] = new Verde(this.app, this.balaVerde, this.verde, this.pisos[i].x + 10, this.pisos[i].y);
                            this.arañas -= this.precioVerde;
                            break;
                    }
                }


            }
            for (let i = 0; i < this.arañitas.length; i++) {
                if (this.arañitas[i].validar(this.app.mouseX, this.app.mouseY)) {
                    this.arañas += this.arañitas[i].araña;
                    this.arañitas.splice(i, 1);
                }

            }
            this.boton = 0;
            this.arrastrar = false;

        }

    }
    aumentarArañas() {
        let x = this.app.random(100, this.app.width - 100);
        let y = -200;
        this.arañitas.push(new Araña(this.app, this.araña, x, y));



    }
    contador() {
        this.segundos++;
        if (this.segundos == 60) {
            this.minutos++;
            this.segundos = 0;
        }
    }

    crearEnemigos() {
        for (let i = 0; i < this.numeroEnemigos; i++) {
            let r = Math.round(this.app.random(0, 3));
            switch (r) {
                case 0:
                    this.enemigos.push(new Franck(this.app, this.frack));
                    break;
                case 1:
                    this.enemigos.push(new Calabaza(this.app, this.calabaza));

                    break;
                case 2:
                    this.enemigos.push(new Hueso(this.app, this.huesos));
                    break;

            }

        }

    }
    aumentarNumeroEnemigos() {
        this.numeroEnemigos++;
    }

    actualizar() {
        for (let i = 0; i < this.enemigos.length; i++) {
            if (this.enemigos[i].vivo == false) {
                this.enemigos.splice(i, 1);
            }
        }
    }
}

