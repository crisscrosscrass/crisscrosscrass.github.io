window.onload = function () {
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
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    function clearScreen() {
        ctx.fillStyle = '#0E0B16';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    mouse = {
        x: undefined,
        y: undefined
    }
    window.addEventListener("mousemove", function (event) {
        mouse.x = event.x;
        mouse.y = event.y;
    })


    circleArray = createCircleArray();
    hexagonArray = createHexagonArray();

    function redrawAndUpdate() {
        clearScreen();
        for (var i = 0; i < circleArray.length; i++) {
            circleArray[i].update();
        }
        for (var i = 0; i < hexagonArray.length; i++) {
            hexagonArray[i].update();
        }
    }

    function loop() {
        redrawAndUpdate();
        requestAnimationFrame(loop);
    }
    // loop();

    // Box width
    var bw = 400;
    // Box height
    var bh = 400;
    // Padding
    var p = 0;
    var cw = bw + (p * 2) + 1;
    var ch = bh + (p * 2) + 1;
    function drawBoard() {
        for (var x = 0; x <= bw; x += 40) {
            ctx.moveTo(0.5 + x + p, p);
            ctx.lineTo(0.5 + x + p, bh + p);
        }

        for (var x = 0; x <= bh; x += 40) {
            ctx.moveTo(p, 0.5 + x + p);
            ctx.lineTo(bw + p, 0.5 + x + p);
        }

        ctx.strokeStyle = "white";
        ctx.stroke();
    }
    // drawBoard();

    ctx.fillStyle = 'white';
    ctx.strokeStyle = "white";
    // Filled triangle
    ctx.beginPath();
    ctx.moveTo(25, 25);
    ctx.lineTo(105, 25);
    ctx.lineTo(25, 105);
    ctx.fill();

    // Stroked triangle
    ctx.beginPath();
    ctx.moveTo(125, 125);
    ctx.lineTo(125, 45);
    ctx.lineTo(45, 125);
    ctx.closePath();
    ctx.stroke();
}