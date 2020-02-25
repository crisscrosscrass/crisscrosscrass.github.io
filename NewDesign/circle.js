function Circle(x,y,radius,dx,dy){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)]

    this.draw = function(){
        ctx.lineWidth = 1.1;
        ctx.strokeStyle = '#A239CA';
        ctx.beginPath();
        ctx.arc(this.x, this.y,this.radius, 0, Math.PI * 2, false);
        ctx.stroke();
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    this.update = function(){
        if ( this.x + this.radius >= canvas.width || this.x - this.radius < 0 ){
        this.dx = -this.dx;
        }
        if ( this.y + this.radius >= canvas.height || this.y - this.radius < 0 ){
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        // interactivity
        /*
        if(mouse.x - this.x < 50 && mouse.x - this.x > -50
        && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
            this.radius +=1;
        }else if(this.radius > 2){
            this.radius -= 1;
        }
        */

        this.draw();
    }
}

function createCircleArray(){
    circleArray = []

    for(var i = 0; i < 1000; i++){
        radius = randomInRange(0, 1.1); // 30 should be at least for nice circles
        // where to spawn / e.g. ( canvas.width - radius * 2) + radius = not outside the acutal window
        x = Math.random() * ( canvas.width - radius * 2) + radius;
        y = Math.random() * ( canvas.height - radius * 2) + radius;
        // how fast / velocity
        dx = (Math.random() - 0.5) * 1.48;
        dy = (Math.random() - 0.5) * 1.48;
        circleArray.push(new Circle(x,y,radius,dx,dy));
    }

    return circleArray;
}