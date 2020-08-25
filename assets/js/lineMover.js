class LineMover {
    constructor(x, y, radius) {
        this.colorArray = ['#A239CA', 'white', '#4717F6', '#18bfef'];
        this.arrDirection = ['up', 'right', 'down', 'left'];
        this.arrSubDirection = ['up-left', 'up-right', 'down-left', 'down-right'];
        this.diagonal = false;
        this.speed = 2;
        this.direction = this.arrDirection[Math.floor(Math.random() * this.arrDirection.length)];
        this.startingPostion(x, y);
        this.radius = radius;
        this.color = this.colorArray[Math.floor(Math.random() * this.colorArray.length)];
        this.countMoveDistance = 0;
        this.maxMoveNumber = this.getRandomNumber();
        this.isAlive = true;
        this.pathPositions = [];
        this.startDeleteDraw = false;
    }
    startingPostion(x, y) {
        if (this.direction == 'right') {
            this.x = 0;
            this.y = y;
        }
        if (this.direction == 'left') {
            this.x = canvas.width;
            this.y = y;
        }
        if (this.direction == 'up') {
            this.x = x;
            this.y = canvas.height;
        }
        if (this.direction == 'down') {
            this.x = x;
            this.y = 0;
        }
    }
    move() {
        if (this.isAlive) {
            this.countMoveDistance++;
            if (this.direction == 'up') {
                this.y -= this.speed;
            }
            if (this.direction == 'right') {
                this.x += this.speed;
            }
            if (this.direction == 'down') {
                this.y += this.speed;
            }
            if (this.direction == 'left') {
                this.x -= this.speed;
            }
            if (this.direction == 'up-left') {
                this.y -= this.speed;
                this.x -= this.speed;
            }
            if (this.direction == 'up-right') {
                this.y -= this.speed;
                this.x += this.speed;
            }
            if (this.direction == 'down-left') {
                this.y += this.speed;
                this.x -= this.speed;
            }
            if (this.direction == 'down-right') {
                this.y += this.speed;
                this.x += this.speed;
            }
            if (this.countMoveDistance > this.maxMoveNumber) {
                this.changeDirection();
                this.startDeleteDraw = true;
            }
            let position = {
                x: this.x,
                y: this.y
            }
            this.pathPositions.push(position);
        }
    }
    draw() {
        if (this.isAlive || this.pathPositions.length > 3) {
            ctx.lineWidth = 1.1;
            ctx.strokeStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            // ctx.moveTo(this.pathPositions[i].x, this.pathPositions[i].y);
            if (this.pathPositions.length > 1) {
                for (let i = 1; i < this.pathPositions.length; i++) {
                    ctx.moveTo(this.pathPositions[i - 1].x, this.pathPositions[i - 1].y);
                    ctx.lineTo(this.pathPositions[i].x, this.pathPositions[i].y);
                }
            }
            ctx.stroke();
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }
    deleteDraw() {
        if (this.startDeleteDraw && this.pathPositions.length > 0) {
            this.pathPositions.shift();
        }
        if (this.pathPositions.length == 0 && this.startDeleteDraw == true) {
            this.startDeleteDraw = false;
            this.respawn();
        }
    }
    deadCheck() {
        if (this.x + this.radius >= canvas.width || this.x - this.radius < 0) {
            this.isAlive = false;
        }
        if (this.y + this.radius >= canvas.height || this.y - this.radius < 0) {
            this.isAlive = false;
        }
    }
    changeDirection() {
        let newDirection;
        this.diagonal = Math.random() >= 0.5;
        if (!this.diagonal) {
            newDirection = this.arrDirection[Math.floor(Math.random() * this.arrDirection.length)];
            while (newDirection != this.direction && newDirection == this.getOppositeDirection(this.direction)) {
                newDirection = this.arrDirection[Math.floor(Math.random() * this.arrDirection.length)];
            }

        } else if (this.diagonal) {
            newDirection = this.arrSubDirection[Math.floor(Math.random() * this.arrSubDirection.length)];
            while (newDirection != this.direction && newDirection == this.getOppositeDirection(this.direction)) {
                newDirection = this.arrSubDirection[Math.floor(Math.random() * this.arrSubDirection.length)];
            }
        }
        this.direction = newDirection;
        this.countMoveDistance = 0;
    }
    getOppositeDirection(direction) {
        if (direction == "up") {
            return "down";
        }
        if (direction == "down") {
            return "up";
        }
        if (direction == "right") {
            return "left";
        }
        if (direction == "left") {
            return "right";
        }
        if (direction == 'up-left') {
            return "down-right";
        }
        if (direction == 'up-right') {
            return "down-left";
        }
        if (direction == 'down-left') {
            return "up-right";
        }
        if (direction == 'down-right') {
            return "up-left";
        }
    }
    update() {
        this.move();
        this.deadCheck();
        this.draw();
        this.deleteDraw();
    }
    respawn() {
        let x = Math.random() * (canvas.width - radius * 2) + radius;
        let y = Math.random() * (canvas.height - radius * 2) + radius;
        this.diagonal = false;
        this.speed = 2;
        this.direction = this.arrDirection[Math.floor(Math.random() * this.arrDirection.length)]
        this.startingPostion(x, y);
        this.radius = radius;
        this.color = this.colorArray[Math.floor(Math.random() * this.colorArray.length)];
        this.countMoveDistance = 0;
        this.maxMoveNumber = this.getRandomNumber();
        this.isAlive = true;
        this.pathPositions = [];
        this.startDeleteDraw = false;
    }
    getRandomNumber() {
        // max:200,min:60
        return Math.floor(Math.random() * 200) + 60;
    }
}

function createLineMoverArray() {
    lineMoverArray = []

    for (var i = 0; i < 25; i++) {
        // radius = randomInRange(0, 0.5); 
        radius = 1;
        // where to spawn / e.g. ( canvas.width - radius * 2) + radius = not outside the acutal window
        x = Math.random() * (canvas.width - radius * 2) + radius;
        y = Math.random() * (canvas.height - radius * 2) + radius;
        // how fast / velocity not needed anymore
        // dx = (Math.random() - 0.5) * 2.48;
        // dy = (Math.random() - 0.5) * 2.48;
        lineMoverArray.push(new LineMover(x, y, radius));
    }

    return lineMoverArray;
}