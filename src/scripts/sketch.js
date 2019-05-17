new p5 (function(app){
    var logica=new Logica (app);
    
    app.setup=function(){
        app.createCanvas(1864, 1381);
    }
    app.preload=function(){
        logica.precargar();
    }
    app.draw=function(){
        logica.pintar();

    }
   
    app.mousePressed=function(){
       logica.click();
    }
    app.mouseReleased = function(){
        logica.clickSoltar();
    }
});