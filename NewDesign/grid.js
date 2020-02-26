function createGrid() {
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
    drawBoard();

    function createTriangle() {
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
}