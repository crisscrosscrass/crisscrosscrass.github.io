function Hexagon(Xcenter,Ycenter,size,dx,dy){
    numberOfSides = 6,
    this.size = size;
    this.Xcenter = Xcenter;
    this.Ycenter = Ycenter;
    this.dx = dx;
    this.dy = dy;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)]

    this.draw = function(){
        ctx.beginPath();
        ctx.moveTo (this.Xcenter +  this.size * Math.cos(0), this.Ycenter +  this.size *  Math.sin(0));
        for (var i = 1; i <= numberOfSides;i += 1) {
            ctx.lineTo (this.Xcenter + this.size * Math.cos(i * 2 * Math.PI / numberOfSides), this.Ycenter + this.size * Math.sin(i * 2 * Math.PI / numberOfSides));
        }
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 1;
        ctx.stroke();
    }

    this.update = function(){
        this.Xcenter += this.dx;
        this.Ycenter += this.dy;
        if ( this.Xcenter + this.size >= canvas.width || this.Xcenter - this.size < 0 ){
        this.dx = -this.dx;
        }
        if ( this.Ycenter + this.size >= canvas.height || this.Ycenter - this.size < 0 ){
            this.dy = -this.dy;
        }
        this.draw();
    }
}
function createHexagonArray(){
    hexagonArray = []

    for(var i = 0; i < 100; i++){
        size = randomInRange(0, 10),
        Xcenter = Math.random() * ( canvas.width - size ) + size ,
        Ycenter = Math.random() * ( canvas.height - size ) + size ;
        dx = (Math.random() - 0.5) * .8;;
        dy = (Math.random() - 0.5) * .8;;
        hexagonArray.push(new Hexagon(Xcenter,Ycenter,size,dx,dy));
        }
    return hexagonArray;
}