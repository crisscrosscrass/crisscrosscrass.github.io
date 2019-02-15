window.onload = function(){
  addScrollClickToButtons();
  MyParticleSystem();
  stickyNavi();
  addRevealOnPageUp('#branding');
  addRevealOnScroll('#about');
  addRevealOnScroll('#portfolio');
  addRevealOnScroll('#connect');
  addRevealOnScroll('#contact');
  addActiveMenuOnScroll('#branding','#naviHomeLink');
  addActiveMenuOnScroll('#about','#naviAboutMeLink');
  addActiveMenuOnScroll('#portfolio','#naviProjectsLink');
  addActiveMenuOnScroll('#connect','#naviConnectLink');
  addActiveMenuOnScroll('#contact','#naviContactLink');
}

function isInViewport(idName) {
var elementTop = $(idName).offset().top;
var elementBottom = elementTop + $(idName).innerHeight();
var viewportTop = $(window).scrollTop();
var viewportBottom = viewportTop + $(window).height();
return elementBottom > viewportTop && elementTop < viewportBottom;
};

function addRevealOnPageUp(idName) {
  var aboutElement = $(idName);
  aboutElement.removeClass('hidden');
}

function addRevealOnScroll(idName){
  var aboutElement = $(idName),
  aboutElementOffset = aboutElement.offset().top-300,// is a fixed number, maybe adjust to percent calculation? on hold for now
  documentElement = $(document);

  documentElement.on('scroll', function(){
    if (documentElement.scrollTop() > aboutElementOffset && aboutElement.hasClass('hidden')) {
        if (isInViewport(idName)) {
          //console.log("remove class for "+idName);
          aboutElement.removeClass('hidden');
        }
    }
  });
}
function addActiveMenuOnScroll(idName,idLink){
  var aboutElement = $(idName),
  highlightedElement = $(idLink),
  aboutElementOffset = aboutElement.offset().top,
  documentElement = $(document),
  scrollBottom = $(window).scrollTop() + $(window).height();

  documentElement.on('scroll', function(){
    if (documentElement.scrollTop() > aboutElementOffset ) {
        if (isInViewport(idName) && !highlightedElement.hasClass('highlight') ) {
          highlightedElement.addClass('highlight');
          removeNoneActiveMenuOnScroll(idLink);
        }
    }
  });
}

function removeNoneActiveMenuOnScroll(activeLink){
  var aboutElement = $(activeLink),
  allElements = ["#naviHomeLink","#naviAboutMeLink", "#naviProjectsLink", "#naviConnectLink","#naviContactLink"];
  for (  i = 0 ; i < allElements.length ; i++){
    if (allElements[i] != activeLink ) {
      var highlightedElement = $(allElements[i]);
      highlightedElement.removeClass('highlight');
    }
  }
}

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function addScrollClickToButtons(){
  $("#myBtn").click(function(){
    $("#myModal").modal();
  });

  $(".section1").click(function() {
      closeNav();
      $([document.documentElement, document.body]).animate({
          scrollTop: $("#home").offset().top+10
      }, 1000);
  });
  $(".section2").click(function() {
      closeNav();
      $([document.documentElement, document.body]).animate({
          scrollTop: $("#about").offset().top+10
      }, 1000);
  });
  $(".section3").click(function() {
      closeNav();
      $([document.documentElement, document.body]).animate({
          scrollTop: $("#portfolio").offset().top+10
      }, 1000);
  });
  $(".section4").click(function() {
      closeNav();
      $([document.documentElement, document.body]).animate({
          scrollTop: $("#connect").offset().top+10
      }, 1000);
  });
  $(".section5").click(function() {
      closeNav();
      $([document.documentElement, document.body]).animate({
          scrollTop: $("#aboutcontact").offset().top+10
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
              ctx.strokeStyle = '#A239CA';
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
        ctx.fillStyle = '#0E0B16';
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
        if (lightbox_resize)
          clearTimeout(lightbox_resize);
        lightbox_resize = setTimeout(function() {
          //console.log('resize');
          stickyNavi();
          //$('canvas').remove();
          reset();
          redrawAndUpdate();
          //MyParticleSystem();
        }, 100);
          
      });
}
function OpenMailTo(){
  if($("#myModalSendEmailTo:visible").length == 0) {
    $( "#myModalSendEmailTo" ).slideDown("slow", function() {
      // Animation complete.
    });
  } else{
    $( "#myModalSendEmailTo" ).slideUp("slow", function() {
      // Animation complete.
    });
  }
}
function SubmitButton(){
  //get all Infos from Field
  var NameInput = document.getElementById("contactNameInput").value,
  EmailInput = document.getElementById("contactEmailInput").value,
  MessageInput = document.getElementById("contactTextInput").value;
  //check if Field correct
  if (ValidationSendingEmail(NameInput,EmailInput,MessageInput) ){
    OpenMailTo();
    //send Email plus Field-Informations
    SendingEmailFunction(NameInput,EmailInput,MessageInput);
    //reset all Inputs
    document.getElementById("contactNameInput").value = "";
    document.getElementById("contactEmailInput").value = "";
    document.getElementById("contactTextInput").value = "";
  }
}
function ValidationSendingEmail(NameInput,EmailInput,MessageInput){
  $.toast().reset('all');
  if( NameInput.length == 0){
    ToastErrorMsg("Name","The Name can't be empty");
  }
  if( EmailInput.length == 0){
    ToastErrorMsg("Email","The Email can't be empty");
  }
  if( MessageInput.length == 0){
    ToastErrorMsg("Message","The Message shouldn't be empty");
  }
  if( EmailInput.length > 0 & !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(EmailInput) ){
    ToastErrorMsg("Email","Something looks wrong with the email, please have a look at it");
  }
  if(NameInput.length == 0 | EmailInput.length == 0 | MessageInput.length == 0 | !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(EmailInput) ){
    return false;
  }else{
    return true;
  }
}
function ToastErrorMsg(heading,text){
  $.toast({
    heading: heading,
    text: text,
    showHideTransition: 'slide',
    icon: 'info',
    showHideTransition: 'slide', // fade, slide or plain
    allowToastClose: true, 
    hideAfter: 3000, 
    loader: false
    });
}
function SendingEmailFunction(NameInput,EmailInput,MessageInput){
  $.toast({
    heading: 'Email sending...',
    text: 'Hi '+ NameInput +' , your email is on the way.',
    showHideTransition : 'slide',  
    bgColor : '#4717F6',
    position: 'mid-center',
    hideAfter: 3000,
    afterHidden: function () {
      console.log("Mail has been sent");
      EmailViaJavaScriptFunction(NameInput,EmailInput,MessageInput);
    }
  });

}
function EmailViaJavaScriptFunction(NameInput,EmailInput,MessageInput){
  Email.send({
    SecureToken : "5b15db81-fa23-4a08-96ea-adf22435255b",
    To : 'christopher.eckardt@visual-meta.com',
    From : 'christopher.eckardt@visual-meta.com',
    Subject : "CONTACT via https://crisscrosscrass.github.io:",
    Body : "Message from "+EmailInput+" | "+NameInput+ "<br/>"+MessageInput
  }).then(
    //message => alert(message)
    message => {
      if(message == "OK"){
        $.toast({
        heading: "Success",
        text: "Email has been sent!",
        showHideTransition: 'slide',
        icon: 'success',
        showHideTransition: 'slide', // fade, slide or plain
        allowToastClose: true, 
        hideAfter: false
        });
      }else{
        $.toast({
        heading: "Error",
        text: "Email could not been sent! Please try again later...",
        showHideTransition: 'slide',
        icon: 'error',
        showHideTransition: 'slide', // fade, slide or plain
        allowToastClose: true, 
        hideAfter: false,
        afterHidden: function () {
          alert(message);
          }
        });
      }
    }
    
  );
}