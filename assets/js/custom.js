window.onload = function(){
  addScrollClickToButtons();
  MyParticleSystem();
  stickyNavi();
}

function addScrollClickToButtons(){
  $(".section1").click(function() {
      $([document.documentElement, document.body]).animate({
          scrollTop: $("#home").offset().top
      }, 1000);
  });
  $(".section2").click(function() {
      $([document.documentElement, document.body]).animate({
          scrollTop: $("#about").offset().top
      }, 1000);
  });
  $(".section3").click(function() {
      $([document.documentElement, document.body]).animate({
          scrollTop: $("#portfolio").offset().top
      }, 1000);
  });
  $(".section4").click(function() {
      $([document.documentElement, document.body]).animate({
          scrollTop: $("#connect").offset().top
      }, 1000);
  });
  $(".section5").click(function() {
      $([document.documentElement, document.body]).animate({
          scrollTop: $("#contact").offset().top
      }, 1000);
  });
}

function stickyNavi(){
  var navOffset = $("#navi").offset().top;

  $("#navi").wrap('<div class="nav-placeholder"></div>');
  $(".nav-placeholder").height($('#navi').outerHeight);

  $(window).scroll(function(){
    var scrollPos = $(window).scrollTop();
      if (scrollPos >= navOffset) {
        $("#navi").css({position:'fixed'});
      }else{
        $("#navi").css({position:'relative'});
      }
  })
}


function MyParticleSystem(){
      var nameOfRequestedID = "home";
      var canvas = document.createElement("canvas"),
      maxField = document.getElementById(nameOfRequestedID);
      ctx = canvas.getContext("2d"),
      particles = [],
      distance = 20;
      var amountofParticles = 100,
      canvasWidth = maxField.offsetWidth, //window.innerWidth
      //canvasWidth = window.innerWidth,
      canvasHeight = maxField.offsetHeight; // window.innerHeight
      //canvasHeight = window.innerHeight; // window.innerHeight

      canvas.width = canvasWidth,
      canvas.height = canvasHeight;

      document.getElementById("particles").appendChild(canvas);
      canvas.setAttribute("id", "canvas");
      ctx.fillStyle = 'black';
      ctx.fillRect(0,0,canvas.width,canvas.height);


      Math.nRandom = function(){
          return Math.random()*2-1;
      }

      var Particle = function(){
          this.x = Math.random() * canvasWidth;
          this.y = Math.random() * canvasHeight;
          this.vx = Math.nRandom() * 30;
          this.vy = Math.nRandom() * 30;
          this.r = Math.random() * 5 + 1;
          this.dt = 0.05;

          this.linedraw = function(){
              //draw a line between particles if distance is below x
              ctx.beginPath();
              ctx.lineWidth = .1;
              ctx.strokeStyle = 'rgba(255,255,255,1)';
              ctx.moveTo(this.x, this.y);
              ctx.lineTo(canvasWidth / 2, canvasHeight / 2);
              ctx.stroke();
          }

          this.reset = function(){
            if(this.x > canvasWidth ){
                this.x = 0;
            }
            if(this.x < 0 ){
                this.x = canvasWidth ;
            }
            if(this.y > canvasHeight){
                this.y = 0;
            }
            if(this.y < 0){
                this.y = canvasHeight;
            }
          }
          
          this.update = function(){
          this.x += this.vx * this.dt;
          this.y += this.vy * this.dt;
          }

          this.draw = function(){
              ctx.beginPath();
              ctx.arc(this.x,this.y,this.r,0, Math.PI *2, false);
              ctx.closePath();
              ctx.fillStyle = 'rgba(255, 255, 255, 0)';
              ctx.fill();
          };


      }

      function addParticles(nmbr){
          for (var i = 0; i < nmbr ; i++){
            var p = new Particle;
            particles.push(p);
          }
      }

      addParticles(amountofParticles);

      function redrawAndUpdate(){
        ctx.fillStyle = '#1e797d';
        ctx.fillRect(0,0,canvas.width,canvas.height);

          for(var i = 0; i < particles.length; i++){
            particles[i].draw();
            particles[i].update();
            particles[i].reset();
            particles[i].linedraw();
          }
      }

      function loop(){
        //empty the paintwall
        redrawAndUpdate();
        requestAnimationFrame(loop);
      }
      loop();

      function reset(){
        maxField = document.getElementById(nameOfRequestedID);
        canvasWidth = maxField.offsetWidth,
        canvasHeight = maxField.offsetHeight;
        
        canvas.width = canvasWidth,
        canvas.height = canvasHeight;
      }

      var lightbox_resize = false;
      $( window ).resize(function() {
        console.log(true);
        if (lightbox_resize)
          clearTimeout(lightbox_resize);
        lightbox_resize = setTimeout(function() {
          console.log('resize');
          //$('canvas').remove();
          reset();
          redrawAndUpdate();
          //MyParticleSystem();
        }, 100);
          
      });
}


