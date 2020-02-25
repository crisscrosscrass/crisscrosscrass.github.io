window.onload = function(){
    maxField = document.getElementById("particles");
    canvas = document.createElement("canvas"),
    ctx = canvas.getContext("2d");
    canvasWidth = maxField.offsetWidth, //window.innerWidth || //canvasWidth = window.innerWidth,
    canvasHeight = maxField.offsetHeight; // window.innerHeight || //canvasHeight = window.innerHeight; // window.innerHeight

    canvas.width = canvasWidth,
    canvas.height = canvasHeight;

    document.getElementById("particles").appendChild(canvas);
    canvas.setAttribute("id", "canvas");
    ctx.fillStyle = 'black';
        ctx.fillRect(0,0,canvas.width,canvas.height);
    function clearScreen(){
        ctx.fillStyle = '#0E0B16';
        ctx.fillRect(0,0,canvas.width,canvas.height);
        /* old version
        var grd = ctx.createRadialGradient(canvas.width/2,canvas.height/2,canvas.width/8,canvas.width/2,canvas.height/2,canvas.width);
        grd.addColorStop(0,"#0E0B16");
        grd.addColorStop(1,"black");
        // Fill with gradient
        ctx.fillStyle = grd;
        ctx.fillRect(0,0,canvas.width,canvas.height);
        */
    }

    mouse = {
        x:undefined,
        y:undefined
    }   
    window.addEventListener("mousemove",function(event){
        mouse.x = event.x;
        mouse.y = event.y;
    })
    
    
    circleArray = createCircleArray();
    hexagonArray = createHexagonArray();
        
    function redrawAndUpdate(){
        clearScreen();
        //drawRandomCircle(x,y,radius);
        for(var i = 0; i < circleArray.length; i++){
            // console.log(circleArray[i]);
            // circleArray[i].update();
        }
        for(var i = 0; i < hexagonArray.length; i++){
            // console.log(hexagonArray[i]);
            hexagonArray[i].update();
        }        
    }

    function loop(){
        //empty the paintwall
        redrawAndUpdate();
        requestAnimationFrame(loop);
    }
    loop();
}