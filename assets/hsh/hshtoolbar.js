javascript: (function () {
  if (!document.getElementById("ToolbarID")) {
    function createDropDownMenu(
      dropdownTitle,
      dropdownTitleLink,
      dropdownLinks
    ) {
      listItem = document.createElement("li");
      listItem.setAttribute("class", "dropdown");
      aLink = document.createElement("a");
      aLink.setAttribute("href", dropdownTitleLink);
      aLink.setAttribute("class", "dropbtn");
      aLink.innerHTML = dropdownTitle;
      listItem.appendChild(aLink);
      aDiv = document.createElement("div");
      // for each
      for (var i = 0; i < dropdownLinks.length; i++) {
        aDiv.setAttribute("class", "dropdown-content");
        aDropDownLink = document.createElement("a");
        aDropDownLink.setAttribute("href", dropdownLinks[i][1]);
        aDropDownLink.innerHTML = dropdownLinks[i][0];
        aDiv.appendChild(aDropDownLink);
      }
      // ends
      listItem.appendChild(aDiv);
      unorderList.appendChild(listItem);
    }
    toolbar = document.createElement("div");
    toolbar.setAttribute("name", "ToolbarDiv");
    toolbar.setAttribute("id", "ToolbarID");
    cssToolbar = "";
    document.body.appendChild(toolbar);
    toolbar.style.cssText = cssToolbar;
    unorderList = document.createElement("ul");
    /* HSH */
    HSHSectionDropDownLinks = [
      [
        "Organigramm",
        "https://confluence.hsh-berlin.com/pages/viewpage.action?pageId=21037066",
      ],
      [
        "Räume",
        "https://confluence.hsh-berlin.com/display/HSH/HSH+-+Raumbelegung",
      ],
      [
        "Entwicklung",
        "https://confluence.hsh-berlin.com/pages/viewpage.action?pageId=48565690",
      ],
      [
        "Wochenplan",
        "https://confluence.hsh-berlin.com/display/BER/Wochenplan+FV-Entwickler+-+Anwesenheit",
      ],
      [
        "Abkürzungen und Begriffserklärungen",
        "https://confluence.hsh-berlin.com/pages/viewpage.action?pageId=66423095",
      ],
      ["VPN - Einwahl", "https://einwahl.hsh-berlin.com/spog/welcome"],
      [
        "Serverübersicht / Testserver",
        "https://confluence.hsh-berlin.com/pages/viewpage.action?pageId=35265541",
      ],
      [
        "VOIS-Auslieferungen - Planung",
        "https://confluence.hsh-berlin.com/pages/viewpage.action?pageId=47088721",
      ],
      [
        "VOIS|MESO Releaseplanung - Programmierstop",
        "https://confluence.hsh-berlin.com/display/PRD/VOIS%7CMESO+-+Releaseplanung",
      ],
    ];
    createDropDownMenu("HSH", "#", HSHSectionDropDownLinks);
    /* TOOLS */
    VOISSectionDropDownLinks = [
      ["VOIS - BASE", "https://docs.vois.org/org.vois.docs/latest/index.html"],
      ["VOIS - SOURCE", "https://src.vois.org/"],
      ["VOIS - APIs", "https://doku.vois.org/vois/docs/index.php"],
      [
        "VOIS - ICONS",
        "https://doku.vois.org/vois/docs/hux/21.20/6/docs/pages/icons.html",
      ],
      [
        "VOIS - DESIGN",
        "https://design.vois.org/68467ede9/p/141737-benachrichtigungen/b/004561",
      ],
      [
        "VOIS - HUX",
        "https://doku.vois.org/vois/docs/hux/21.20/6/docs/api/index.html",
      ],
      [
        "Fachverfahren src - Meldewesen",
        "https://svn.hsh-berlin.com/vois/hsh-meldewesen/hsh-meldewesen/release/",
      ],
      [
        "Fachverfahren src - Personaldokumente",
        "https://svn.hsh-berlin.com/vois/hsh-personaldokumente/hsh-personaldokumente/release/",
      ],
      ["VOIS - Schulung", "https://schulung.vois.org/my/"],
      [
        "VOIS - Einrichten FV",
        "https://confluence.hsh-berlin.com/display/THM/VOIS+einrichten",
      ],
    ];
    createDropDownMenu("VOIS", "#", VOISSectionDropDownLinks);
    /* Tagger */
    TaggerSectionDropDownLinks = [
      ["Tagger - DE", "https://tagger.ladenzeile.de/"],
      ["Tagger - AT", "https://tagger.ladenzeile.at/"],
      ["Tagger - NL", "https://tagger.shopalike.nl/"],
      ["Tagger - FR", "https://tagger.shopalike.fr/"],
      ["Tagger - IT", "https://tagger.shopalike.it/"],
      ["Tagger - ES", "https://tagger.shopalike.es/"],
      ["Tagger - PL", "https://tagger.shopalike.pl/"],
      ["Tagger - HU", "https://tagger.shopalike.hu/"],
      ["Tagger - SK", "https://tagger.shopalike.sk/"],
      ["Tagger - CZ", "https://tagger.shopalike.cz/"],
      ["Tagger - FI", "https://tagger.shopalike.fi/"],
      ["Tagger - DK", "https://tagger.shopalike.dk/"],
      ["Tagger - SE", "https://tagger.shopalike.se/"],
    ];
    createDropDownMenu("Tools", "#", TaggerSectionDropDownLinks);
    /* Tools Section */
    AspSectionDropDownLinks = [
      ["Ralf Reich - Rechtsfragen", ""],
      ["Markus Hempel - Rechtsfragen", ""],
      ["André Linkowitsch - HUX Plattform", ""],
      ["Chris Hengl - HUX Plattform", ""],
    ];
    createDropDownMenu(
      "Wichtige Ansprechpartner",
      "#",
      AspSectionDropDownLinks
    );
    /* Personal Section */
    PersonalSectionDropDownLinks = [
      ["Chat - Google", "https://chat.google.com/"],
      [
        "OKR Dashboard S1",
        "https://docs.google.com/spreadsheets/d/15wm5bPh2IgA1pqIrR6yLPOMYoUdjFS9NlvaemI8ipWM/",
      ],
      [
        "OKR Dashboard S2",
        "https://docs.google.com/spreadsheets/d/1AX1JXXmsUczz25wzLi89QhX4w2Dx-RTtMIQVz1iOcKs/",
      ],
      [
        "OKR Dashboard S3",
        "https://docs.google.com/spreadsheets/d/1ot3-vkjjjinf6scpEHq8r6-SNtajmz8M6uuuxVLLqEY/",
      ],
      ["Personio", "https://visualmeta.personio.de/login/index"],
      [
        "Mobile Working Calendar",
        "https://visualmeta.atlassian.net/wiki/spaces/VM/pages/126620914/Mobile+Working+-+Calendar/",
      ],
      [
        "All Hands Presentations",
        "https://visualmeta.atlassian.net/wiki/spaces/VM/pages/126716164/All+Hands+Presentations/",
      ],
    ];
    createDropDownMenu(
      "Personal",
      "https://www.google.com/",
      PersonalSectionDropDownLinks
    );
    /* create Ticket Section */
    function createTicket() {
      console.log("Create a Ticket for... ");
      // customfield_10807=13816 TEAM
      var Jira = "";
      if (document.getElementById("selectedTeamForBug").value != "-1") {
        // console.log("you selected Bug!");
        var selectedTeam = document.getElementById("selectedTeamForBug").value;
        Jira =
          "https://visualmeta.atlassian.net/secure/CreateIssueDetails!init.jspa?pid=11000&issuetype=1&summary=Problem Summary&description=*Problem Statement*%0A|WHERE do you see the problem?|%0A|WHAT is exactly wrong?|%0A|WHO is affected?|%0A%0A*Reproduce*%0A|HOW did the problem occur?|%0A|HOW can we see it?|%0A%0A*Expected Outcome*%0A|WHY is that wrong?|%0A|WHAT is the correct one?|%0A%0A*Hints*&customfield_10807=" +
          selectedTeam;
      }
      if (document.getElementById("selectedTeamForStory").value != "-1") {
        // console.log("you selected Story!");
        var selectedTeam = document.getElementById(
          "selectedTeamForStory"
        ).value;
        Jira =
          "https://visualmeta.atlassian.net/secure/CreateIssueDetails!init.jspa?pid=11000&issuetype=10001&summary=Feature Summary&description=h6. User Story%0AThis is a sentence which describes the type of user the story refers to, what the this user wants to achieve through the story and why the story is is important to him. It is usually expressed in the following format:%0A%22As a <<user type/persona>>, I want to be able to <<scope of the story>> because <<business value>>%22%0AExample: As a developer, I want to be able to edit/delete clickouts through a UI in the BO because it will help me saving considerable time every week on this task.%0A%0Ah6. Acceptance criteria%0AList of items that should be implemented%0ATestable criteria are marked with (x) for QA approval in testing.%0A%0Ah6. Testing scenario%0AStep to step guide to validate change.%0A%0Ah6. Hints (if applicable)%0AList all technical hints, comments etc.&customfield_10807=" +
          selectedTeam;
      }
      window.open(Jira);
      // console.log(document.getElementById("selectedTeamForBug").options[document.getElementById("selectedTeamForBug").selectedIndex].text);
      // console.log(document.getElementById("selectedTeamForBug").value);
      document.getElementById("selectedTeamForBug").value = "-1";
      document.getElementById("selectedTeamForStory").value = "-1";
    }
    AllDevTeams = [
      ["None", "-1"],
      ["Sharks", "13816"],
      ["Rabbits", "14701"],
      ["Lobster", "10651"],
      ["Swift Foxes", "10636"],
      ["Goldfish", "14734"],
      ["Orcas", "10638"],
      ["Elephants", "10635"],
      ["Crocodiles", "10634"],
      ["Meerkats", "14736"],
      ["Bees", "10637"],
      ["Camels", "14804"],
      ["Raptors", "14837"],
      ["Design", "14866"],
    ];
    listItem = document.createElement("li");
    listItem.setAttribute("class", "dropdown");
    aLink = document.createElement("a");
    aLink.setAttribute("href", "#");
    aLink.setAttribute("class", "dropbtn");
    aLink.innerHTML = "&#9850;Ticket";
    listItem.appendChild(aLink);
    aDiv = document.createElement("div");
    aDiv.setAttribute("class", "dropdown-content");
    aDropDownLink = document.createElement("a");
    aDropDownLink.setAttribute(
      "href",
      "https://visualmeta.atlassian.net/wiki/spaces/DEV/pages/1398047321/Bug+Reporting+You"
    );
    aDropDownLink.innerHTML = "<strong>Bug Reporting & You &#9873;</strong>";
    aDiv.appendChild(aDropDownLink);
    aDropDownLink = document.createElement("a");
    aDropDownLink.setAttribute("href", "#");
    aDropDownLink.innerHTML = "create Bug";
    aSelection = document.createElement("select");
    aSelection.setAttribute("id", "selectedTeamForBug");
    aSelection.addEventListener("change", createTicket, false);
    for (var i = 0; i < AllDevTeams.length; i++) {
      aOption = document.createElement("option");
      aOption.innerHTML = AllDevTeams[i][0];
      aOption.setAttribute("value", AllDevTeams[i][1]);
      aSelection.appendChild(aOption);
    }
    aDropDownLink.appendChild(aSelection);
    aDiv.appendChild(aDropDownLink);
    aDropDownLink = document.createElement("a");
    aDropDownLink.setAttribute("href", "#");
    aDropDownLink.innerHTML = "create Story";
    aSelection = document.createElement("select");
    aSelection.setAttribute("id", "selectedTeamForStory");
    aSelection.addEventListener("change", createTicket, false);
    for (var i = 0; i < AllDevTeams.length; i++) {
      aOption = document.createElement("option");
      aOption.innerHTML = AllDevTeams[i][0];
      aOption.setAttribute("value", AllDevTeams[i][1]);
      aSelection.appendChild(aOption);
    }
    aDropDownLink.appendChild(aSelection);
    aDiv.appendChild(aDropDownLink);
    listItem.appendChild(aDiv);
    unorderList.appendChild(listItem);
    /* Close Section */
    listItem = document.createElement("li");
    listItem.setAttribute("class", "dropdown");
    listItem.setAttribute("id", "right");
    aLink = document.createElement("a");
    aLink.setAttribute("href", "#");
    aLink.setAttribute("class", "dropbtn");
    var removeToolbarFunction = function () {
      if (document.location.href.includes("backoffice")) {
        var sheet = document.getElementById("qmtoolbarStyleSheet");
        sheet.disabled = true;
        sheet.parentNode.removeChild(sheet);
      } else {
        document.body.style.transform = "translateY(0px)";
      }
      toolbarSection = document.getElementById("ToolbarID");
      toolbarSection.parentNode.removeChild(toolbarSection);
    };
    aLink.addEventListener("click", removeToolbarFunction, false);
    aLink.innerHTML = "Close";
    listItem.appendChild(aLink);
    aDiv = document.createElement("div");
    aDiv.setAttribute("class", "dropdown-content");
    listItem.appendChild(aDiv);
    unorderList.appendChild(listItem);
    /* append List to Toolbar */
    toolbar.appendChild(unorderList);
    if (document.location.href.includes("backoffice")) {
      css =
        'body { padding-top:70px; } .gwt-MenuBar-horizontal { margin-top: 44px; } #ToolbarID {z-index: 5000; padding:0; position: fixed;top: 0px;width: 100%;height: 50px;font-family: "Open Sans",sans-serif;font-size: 12px; } #ToolbarID ul { list-style-type: none; margin: 0; padding: 0; overflow: hidden;  background-color: #333; } #ToolbarID li {  float: left;} #ToolbarID #right {  float: right;} #ToolbarID li a,#ToolbarID .dropbtn {  display: inline-block;  color: white;  text-align: center;  padding: 14px 16px;  text-decoration: none;} #ToolbarID li a:hover,#ToolbarID  .dropdown:hover .dropbtn {  background-color: red;} #ToolbarID li.dropdown {  display: inline-block;} #ToolbarID .dropdown-content {  display: none;  position: absolute;  background-color: #f9f9f9;  min-width: 160px;  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);  z-index: 1;} #ToolbarID .dropdown-content a {  color: black;  padding: 12px 16px;  text-decoration: none;  display: block;  text-align: left;} #ToolbarID .dropdown-content a:hover {background-color: #f1f1f1;} #ToolbarID .dropdown:hover .dropdown-content {  display: block;} #ToolbarID select { font-family: "Open Sans",sans-serif;font-size: 12px;  margin-left: 5px;  padding-left: 10px;  width: 100%;background: #333; border-color: #333; color: #fff;} #ToolbarID select option { background: #333;color: #fff;box-shadow: inset 20px 20px #f00;}';
    } else {
      css =
        '#ToolbarID {z-index: 5000; padding:0; position: absolute;top: -35px;width: 100%;height: 50px;font-family: "Open Sans",sans-serif;font-size: 12px; } #ToolbarID ul { list-style-type: none; margin: 0; padding: 0; overflow: hidden;  background-color: #333; } #ToolbarID li {  float: left;} #ToolbarID #right {  float: right;} #ToolbarID li a,#ToolbarID .dropbtn {  display: inline-block;  color: white;  text-align: center;  padding: 14px 16px;  text-decoration: none;} #ToolbarID li a:hover,#ToolbarID  .dropdown:hover .dropbtn {  background-color: red;} #ToolbarID li.dropdown {  display: inline-block;} #ToolbarID .dropdown-content {  display: none;  position: absolute;  background-color: #f9f9f9;  min-width: 160px;  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);  z-index: 1;} #ToolbarID .dropdown-content a {  color: black;  padding: 12px 16px;  text-decoration: none;  display: block;  text-align: left;} #ToolbarID .dropdown-content a:hover {background-color: #f1f1f1;} #ToolbarID .dropdown:hover .dropdown-content {  display: block;} #ToolbarID select { font-family: "Open Sans",sans-serif;font-size: 12px;  margin-left: 5px;  padding-left: 10px;  width: 100%;background: #333; border-color: #333; color: #fff;} #ToolbarID select option { background: #333;color: #fff;box-shadow: inset 20px 20px #f00;}';
      document.body.style.transform = "translateY(35px)";
    }
    head = document.head || document.getElementsByTagName("head")[0];
    style = document.createElement("style");
    style.setAttribute("id", "qmtoolbarStyleSheet");
    head.appendChild(style);
    style.type = "text/css";
    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
    window.scrollTo(0, 0);
  } else {
    window.scrollTo(0, 0);
  }
})();
