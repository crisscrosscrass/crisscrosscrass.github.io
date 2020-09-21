window.onload = function() {
    addScrollClickToButtons();
    MyParticleSystem();
    stickyNavi();
    addRevealOnPageUp('#branding');
    addRevealOnScroll('#about');
    addRevealOnScroll('#portfolio');
    addRevealOnScroll('#connect');
    addRevealOnScroll('#contact');
    addActiveMenuOnScroll('#branding', '#naviHomeLink');
    addActiveMenuOnScroll('#about', '#naviAboutMeLink');
    addActiveMenuOnScroll('#portfolio', '#naviProjectsLink');
    addActiveMenuOnScroll('#connect', '#naviConnectLink');
    addActiveMenuOnScroll('#contact', '#naviContactLink');
    addProjectGalleryFilter();
}

function addProjectGalleryFilter() {
    const projectButtons = document.querySelector('.btn-group').children;
    const projectsItems = document.querySelector('.projectItems').children;
    for (let i = 0; i < projectButtons.length; i++) {
        projectButtons[i].addEventListener("click", function() {
            for (let j = 0; j < projectButtons.length; j++) {
                projectButtons[j].classList.remove('active');
            }
            this.classList.add('active');
            const target = this.getAttribute('data-filter');

            for (let k = 0; k < projectsItems.length; k++) {
                projectsItems[k].style.display = "none";
                if (projectsItems[k].getAttribute('data-filter') == target) {
                    projectsItems[k].style.display = "block";
                }
                if (target == 'all') {
                    projectsItems[k].style.display = "block";
                }
            }
        })
    }
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

function addRevealOnScroll(idName) {
    var aboutElement = $(idName),
        aboutElementOffset = aboutElement.offset().top - 300, // is a fixed number, maybe adjust to percent calculation? on hold for now
        documentElement = $(document);

    documentElement.on('scroll', function() {
        if (documentElement.scrollTop() > aboutElementOffset && aboutElement.hasClass('hidden')) {
            if (isInViewport(idName)) {
                aboutElement.removeClass('hidden');
            }
        }
    });
}

function addActiveMenuOnScroll(idName, idLink) {
    var aboutElement = $(idName),
        highlightedElement = $(idLink),
        aboutElementOffset = aboutElement.offset().top,
        documentElement = $(document),
        scrollBottom = $(window).scrollTop() + $(window).height();

    documentElement.on('scroll', function() {
        if (documentElement.scrollTop() > aboutElementOffset) {
            if (isInViewport(idName) && !highlightedElement.hasClass('highlight')) {
                highlightedElement.addClass('highlight');
                removeNoneActiveMenuOnScroll(idLink);
            }
        }
    });
}

function removeNoneActiveMenuOnScroll(activeLink) {
    var aboutElement = $(activeLink),
        allElements = ["#naviHomeLink", "#naviAboutMeLink", "#naviProjectsLink", "#naviConnectLink", "#naviContactLink"];
    for (i = 0; i < allElements.length; i++) {
        if (allElements[i] != activeLink) {
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

function addScrollClickToButtons() {
    $("#myBtn").click(function() {
        $("#myModal").modal();
    });

    $(".section1").click(function() {
        closeNav();
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#home").offset().top + 10
        }, 1000);
    });
    $(".section2").click(function() {
        closeNav();
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#about").offset().top + 10
        }, 1000);
    });
    $(".section3").click(function() {
        closeNav();
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#portfolio").offset().top + 10
        }, 1000);
    });
    $(".section4").click(function() {
        closeNav();
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#connect").offset().top + 10
        }, 1000);
    });
    $(".section5").click(function() {
        closeNav();
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#aboutcontact").offset().top + 10
        }, 1000);
    });
}

function stickyNavi() {
    var navOffset = $("#navi").offset().top;
    $("#navi").wrap('<div class="nav-placeholder"></div>');
    $(".nav-placeholder").height($('#navi').outerHeight);

    $(window).scroll(function() {
        var scrollPos = $(window).scrollTop();
        if (scrollPos >= navOffset) {
            $("#navi").css({ position: 'fixed' });
        } else {
            $("#navi").css({ position: 'relative' });
        }
    })
}


function MyParticleSystem() {
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
    ctx.fillRect(0, 0, canvas.width, canvas.height);


    Math.nRandom = function() {
        return Math.random() * 2 - 1;
    }

    function clearScreen() {
        ctx.fillStyle = '#0E0B16';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    lineMoverArray = createLineMoverArray();

    function redrawAndUpdate() {
        clearScreen();

        if (lineMoverArray.length > 0) {
            for (var i = 0; i < lineMoverArray.length; i++) {
                lineMoverArray[i].update();
            }
        }
    }

    function loop() {
        redrawAndUpdate();
        requestAnimationFrame(loop);
    }
    loop();

    function reset() {
        maxField = document.getElementById(nameOfRequestedID);
        canvasWidth = maxField.offsetWidth,
            canvasHeight = maxField.offsetHeight;

        canvas.width = canvasWidth,
            canvas.height = canvasHeight;
    }

    var lightbox_resize = false;
    $(window).resize(function() {
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

function OpenMailTo() {
    if ($("#myModalSendEmailTo:visible").length == 0) {
        $("#myModalSendEmailTo").slideDown("slow", function() {
            // Animation complete.
        });
    } else {
        $("#myModalSendEmailTo").slideUp("slow", function() {
            // Animation complete.
        });
    }
}

function SubmitButton() {
    //get all Infos from Field
    var NameInput = document.getElementById("contactNameInput").value,
        EmailInput = document.getElementById("contactEmailInput").value,
        MessageInput = document.getElementById("contactTextInput").value;
    //check if Field correct
    if (ValidationSendingEmail(NameInput, EmailInput, MessageInput)) {
        OpenMailTo();
        //send Email plus Field-Informations
        SendingEmailFunction(NameInput, EmailInput, MessageInput);
        //reset all Inputs
        document.getElementById("contactNameInput").value = "";
        document.getElementById("contactEmailInput").value = "";
        document.getElementById("contactTextInput").value = "";
    }
}

function ValidationSendingEmail(NameInput, EmailInput, MessageInput) {
    $.toast().reset('all');
    if (NameInput.length == 0) {
        ToastErrorMsg("Name", "The Name can't be empty");
    }
    if (EmailInput.length == 0) {
        ToastErrorMsg("Email", "The Email can't be empty");
    }
    if (MessageInput.length == 0) {
        ToastErrorMsg("Message", "The Message shouldn't be empty");
    }
    if (EmailInput.length > 0 & !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(EmailInput)) {
        ToastErrorMsg("Email", "Something looks wrong with the email, please have a look at it");
    }
    if (NameInput.length == 0 | EmailInput.length == 0 | MessageInput.length == 0 | !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(EmailInput)) {
        return false;
    } else {
        return true;
    }
}

function ToastErrorMsg(heading, text) {
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

function SendingEmailFunction(NameInput, EmailInput, MessageInput) {
    $.toast({
        heading: 'Email sending...',
        text: 'Hi ' + NameInput + ' , your email is on the way.',
        showHideTransition: 'slide',
        bgColor: '#4717F6',
        position: 'mid-center',
        hideAfter: 3000,
        afterHidden: function() {
            EmailViaJavaScriptFunction(NameInput, EmailInput, MessageInput);
        }
    });

}

function EmailViaJavaScriptFunction(NameInput, EmailInput, MessageInput) {
    Email.send({
        SecureToken: "5b15db81-fa23-4a08-96ea-adf22435255b",
        To: 'christopher.eckardt@visual-meta.com',
        From: 'christopher.eckardt@visual-meta.com',
        Subject: "CONTACT via https://crisscrosscrass.github.io:",
        Body: "Message from " + EmailInput + " | " + NameInput + "<br/>" + MessageInput
    }).then(
        //message => alert(message)
        message => {
            if (message == "OK") {
                $.toast({
                    heading: "Success",
                    text: "Email has been sent!",
                    showHideTransition: 'slide',
                    icon: 'success',
                    showHideTransition: 'slide', // fade, slide or plain
                    allowToastClose: true,
                    hideAfter: false
                });
            } else {
                $.toast({
                    heading: "Error",
                    text: "Email could not been sent! Please try again later...",
                    showHideTransition: 'slide',
                    icon: 'error',
                    showHideTransition: 'slide', // fade, slide or plain
                    allowToastClose: true,
                    hideAfter: false,
                    afterHidden: function() {
                        alert(message);
                    }
                });
            }
        }

    );
}

const projects = {
    comissioner: {
        name: "Feed Comissioner",
        text: "At Visual Meta we have to synchronize millions of products from our partner-shops on a daily basis in order to provide users with the most recent product information (price changes, availability or even new products). Prior to allowing new product feeds to join the synchronization schedule, they have to undergo a quick quality check. A manual validation of CSV & XML files with hundreds of thousands of lines is very time consuming and vague. To ease the burden of this huge effort, I planned, developed and released the “Feed Commision” (based on the Feed Detective, but with the Backend in mind and dealing with huge Files), a web-based solution to automate & simplify this process.",
        image: "images/feedcomissioner.jpg",
        language: "NodeJS, Express, Socket.io, EJS",
        fullstory: "",
        source: "https://github.com/crisscrosscrass/feedcomissioner",
        demo: "https://feedcomissioner.herokuapp.com/",
        features: ["URL Import", "Decompression zip / 7z", "FileReader", "Streaming", "XML-Parser", "JSON-Parser", "Data Formatting", "FileStorage", "File Splitter", "Analysis Table", "Log Reader"]
    },
    synctemplate: {
        name: "Sync Template",
        text: "Web interface for creating dynamically jira tickets with gathering Data while processing",
        image: "images/synctemplate.jpg",
        language: "Python, Materialize, Flask, MongoDB",
        fullstory: "",
        source: "",
        demo: "",
        features: ["Dynamic Forms", "Login System", "Jira Ticket Creation"]
    },
    aggregator: {
        name: "Aggregator Monitor",
        text: "Web interface for investigating aggregator issues",
        image: "images/aggregator.jpg",
        language: "Java, React, Spring, MySQL",
        fullstory: "",
        source: "https://github.com/crisscrosscrass/AggregatorMonitor",
        demo: "",
        features: ["Realtime Rendering", "Multiple Database", "Jira Ticket Creation", "Gmail Import"]
    },
    notifications: {
        name: "Incident Notifications",
        text: "Notifications for Hangouts chat for Jira tickets with INCIDENT tag and A variation of Incident Notifications for TechOps tickets",
        image: "images/gChatBot.jpg",
        language: "Python, Jira, Webhooks",
        fullstory: "",
        source: "",
        demo: "",
        features: ["Check for Comments", "Realtime Updates"]
    },
    salestracking: {
        name: "Salestracking",
        text: "Web interface for investigating sales tracking issues",
        image: "images/salestracking.jpg",
        language: "Python, Flask, MySQL, uWSGI",
        fullstory: "",
        source: "",
        demo: "",
        features: ["Gmail Import", "Jira Updates", "Error Search", "Multiple processes on same machine"]
    },
    failwatch: {
        name: "Failwatch",
        text: "Web interface for investigating issues with failing items",
        image: "images/failwatch.jpg",
        language: "Python, Flask, MongoDB, uWSGI",
        fullstory: "",
        source: "",
        demo: "",
        features: ["Thread-based Database Import", "Shop Search", "Jira Tickets Import", "Multiple processes on same machine"]
    },
    beerwebapp: {
        name: "Beerlist WebApp",
        text: "This was a small Task for a Company to prove that i can work with APIs, so why not choose an very fomouse API for Beers? This is just a small App, to display a list of Beers and getting some Detail information about the selected Item.        The Interessting part was basically you need to set up a Backend API (used Nodejs here) to fetch the Data from there Backend and then display the Data to the Frontend (used React here).",
        image: "images/exampleBeerApp.png",
        language: "NodeJS, React, Heroku",
        fullstory: "",
        source: "https://github.com/crisscrosscrass/BreweryDBReactBeerApp",
        demo: "https://blooming-sierra-74939.herokuapp.com/",
        features: ["Pagination", "DetailView"]
    },
    qmtoolbar: {
        name: "QM TOOLBAR",
        text: "This is just a small project, but only came to mind because of too much work. In our department i was responsible for many countries at the same time. Due to the fact it doesn't make me happy to type too much stuff whenever i need to go to one of our internal tools and also to keep an eye of each specfic country code and sometimes i even don't remeber which URL was used for which tool. I decided to review all my bookmarks and build an easy to switch toolbar. My Main goal i can switch to any tool in just 2 clicks and it worked out very well. So my current workflow, first click on my personal Bookmarklet Script and the second click on the Tool, its sooo much easier now to maintain all of my daily task in a huge veriaty of tools. With Chrome Extension i could also excel my goal, now i can switch to any tool in just 1 click, it feels very smooth.",
        image: "images/qmtoolbar.png",
        language: "Vanila Javascript, CSS, Chrome Extensions",
        fullstory: "",
        source: "https://crisscrosscrass.github.io/assets/QM/qmtoolbar.js",
        demo: "https://crisscrosscrass.github.io/assets/QM/qmtoolbar.htm",
        features: ""
    },
    fetchingimages: {
        name: "MODERN FETCHING IMAGES",
        text: "Whenever i start to work with a new Framework, i tend to build a Project where i personally also interessted in. Doesn't matter how challenging this could be, as long i can see the Final Results. For this Framework i didn't want to build a another ToDo List App, i liked the Idea of a Portfolio for a Photograph, where he/she can upload all his Files into a external File(something like a Spreadsheet) and with this Webapp create an nice Image Gallery.Easy to Maintain and to extend. I put 2 Image Examples Gallery where the Data are fetched, one external JSON File and one external Sheet File into the Demo.",
        image: "images/modernfetchingImages.png",
        language: "React, CSS, Ajax & JSON",
        fullstory: "",
        source: "https://github.com/crisscrosscrass/modernfetchingimages",
        demo: "https://crisscrosscrass.github.io/modernfetchingimages/",
        features: ""
    },
    qmautomation: {
        name: "QM AUTOMATION",
        text: "At Visual Meta we have to sanity check thousand of webpages on a daily basis in order to provide users with the best recent and newest product information on our landing pages. To ease the burden of this huge effort, we planned, developed and released the “QM Automation tool”, a JavaFX and Selenium based solution to automate & simplify this process.",
        image: "images/tool.jpg",
        language: "Java, JavaFX, CSS, Selenium",
        fullstory: "https://crisscrosscrass.github.io/images/QMAutomation.pdf",
        source: "https://github.com/crisscrosscrass/frontendcheckerqm",
        demo: "",
        features: ["Selenium Test", "Visualize Data", "Screenshots", "Fully Customizable Test"]
    },
    feeddetective: {
        name: "FEED DETECTIVE",
        text: "At Visual Meta we have to synchronize millions of products from our partner-shops on a daily basis in order to provide users with the most recent product information (price changes, availability or even new products). Prior to allowing new product feeds to join the synchronization schedule, they have to undergo a detailed quality check. A manual validation of CSV & XML files with hundreds of thousands of lines is very time consuming and vague. To ease the burden of this huge effort, we planned, developed and released the “Feed Detective”, a web-based solution to automate & simplify this process.",
        image: "images/Project1.jpg",
        language: "HTML, CSS, Java-Script, JQuery, PHP, Ajax",
        fullstory: "https://drive.google.com/open?id=1YRRUeMdbdxoKssb8YePv45Yu9bJbfvg_",
        source: "https://github.com/crisscrosscrass/feeddetective",
        demo: "http://crisscrosscrass.epizy.com",
        features: ["Read Files", "Decompression zip / 7z", "Data Formatting", "Feed Analysis", "Visualize Data", "Feedback Builder", "Automatic Feedback", "Support 16 Languages"]
    }
}
class ModalWindow {
    constructor(name) {
        this.projectName = name;
        // Modal Content Fields
        this.projectModalTitle = document.getElementById("projectModalTitle");
        this.projectText = document.getElementById("projectText");
        this.projectImage = document.getElementById("projectImage");
        this.projectLanguages = document.getElementById("projectLanguages");
        this.projectAttachedLinks = document.getElementById("projectAttachedLinks");
        this.projectFeatures = document.getElementById("projectFeatures");
        // Modal 
        this.modal = document.getElementById('myModal');
        this.closeModalButton = document.getElementById("modalScreenCloseButton").onclick = () => this.closeModalWindow();
        this.closeModalBackgroundButton = document.getElementById("modalFullScreenClose").onclick = () => this.closeModalWindow();
        this.changeModalContent();
        this.showModal();
    }
    changeModalContent() {
        // clear content
        this.projectModalTitle.textContent = "";
        this.projectText.textContent = "";
        this.projectImage.src = "";
        this.projectLanguages.textContent = "";
        this.projectAttachedLinks.innerHTML = "";
        this.projectFeatures.innerHTML = "";
        // add content based on selected Project
        this.projectModalTitle.textContent = projects[this.projectName].name;
        this.projectImage.src = projects[this.projectName].image;
        this.projectText.textContent = projects[this.projectName].text;
        this.projectLanguages.textContent = projects[this.projectName].language;
        this.attachButton("FULLSTORY", projects[this.projectName].fullstory);
        this.attachButton("SOURCE", projects[this.projectName].source);
        this.attachButton("DEMO", projects[this.projectName].demo);
        this.attachFeatures(projects[this.projectName].features);
    }
    attachButton(button, url) {
        if (url != "") {
            let createButton = document.createElement("a");
            createButton.setAttribute("target", "_blank");
            createButton.text = button;
            createButton.setAttribute("href", url);
            button == "FULLSTORY" ? createButton.setAttribute("class", "btn btn-outline-success") :
                button == "SOURCE" ? createButton.setAttribute("class", "btn btn-outline-info") :
                button == "DEMO" ? createButton.setAttribute("class", "btn btn-outline-primary") : "";
            this.projectAttachedLinks.appendChild(createButton);
        }
    }
    attachFeatures(features) {
        if (features != "" && features.length != 0) {
            this.projectFeatures.innerHTML += "<h6>Features</h6>"
            for (let i = 0; i < features.length; i++) {
                this.projectFeatures.innerHTML += `<span class="badge badge-primary">${features[i]}</span>`;
            }
        } else {

        }
    }
    showModal() {
        this.modal.style.display = "block";
    }
    closeModalWindow() {
        this.modal.style.display = "none";
    }
}