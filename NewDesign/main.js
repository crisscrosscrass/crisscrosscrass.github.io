window.onload = function() {
    maxField = document.getElementById("particles");
    canvas = document.createElement("canvas"),
        ctx = canvas.getContext("2d");
    canvasWidth = maxField.offsetWidth, //window.innerWidth || //canvasWidth = window.innerWidth,
        canvasHeight = maxField.offsetHeight; // window.innerHeight || //canvasHeight = window.innerHeight; // window.innerHeight

    canvas.width = canvasWidth,
        canvas.height = canvasHeight;

    document.getElementById("particles").appendChild(canvas);
    canvas.setAttribute("id", "canvas");

    // Init Fill Color Canvas
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    function clearScreen() {
        ctx.fillStyle = '#0E0B16';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    mouse = {
        x: undefined,
        y: undefined
    }
    window.addEventListener("mousemove", function(event) {
        mouse.x = event.x;
        mouse.y = event.y;
    })


    // circleArray = createCircleArray();
    // hexagonArray = createHexagonArray();
    lineMoverArray = createLineMoverArray();

    function redrawAndUpdate() {
        clearScreen();
        // for (var i = 0; i < circleArray.length; i++) {
        //     circleArray[i].update();
        // }
        // for (var i = 0; i < hexagonArray.length; i++) {
        //     hexagonArray[i].update();
        // }
        if (lineMoverArray.length > 0) {
            for (var i = 0; i < lineMoverArray.length; i++) {
                lineMoverArray[i].update();
                // if (!lineMoverArray[i].isAlive && !lineMoverArray[i].startDeleteDraw) {
                //     console.log("REMOVED");
                //     lineMoverArray.splice(i, 1);
                // }
            }
        }
    }

    function loop() {
        redrawAndUpdate();
        requestAnimationFrame(loop);
    }
    loop();

}