javascript: (() => {
  console.log("location: ", location.href);
  console.log("get this", this);

  let url_string = window.location.href;
  let url = new URL(url_string);
  var a = url.searchParams.get("a");

  console.log(`This is a parameter: ${a}`);

  console.log(window.location.href);

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
        "Telefonliste",
        "https://confluence.hsh-berlin.com/display/THM/Telefonliste",
      ],
      [
        "Entwicklung",
        "https://confluence.hsh-berlin.com/pages/viewpage.action?pageId=48565690",
      ],
      [
        "Wochenplan - FV",
        "https://confluence.hsh-berlin.com/display/BER/Wochenplan+FV-Entwickler+-+Anwesenheit",
      ],
      [
        "Wochenplan - Plattform",
        "https://confluence.hsh-berlin.com/display/BER/Anwesenheit+Plattform+Entwicklung",
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
    /* VOIS */
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
      ["VOIS - Nexus", "https://repo.vois.org/"],
      ["VOIS - Schulung", "https://schulung.vois.org/"],
      [
        "VOIS - Einrichten FV",
        "https://confluence.hsh-berlin.com/display/THM/VOIS+einrichten",
      ],
    ];
    createDropDownMenu("VOIS - DOCS", "#", VOISSectionDropDownLinks);
    /* TOOLS */
    ToolsSectionDropDownLinks = [
      ["Chat - Mattermost", "https://chat.vois.org/hsh/"],
      ["Jira - Ticketsystem", "https://vm-jira.hsh-berlin.com/"],
      ["Confluence - Content", "https://confluence.hsh-berlin.com/"],
      ["Jenkins Build", "https://jenkins.hsh-berlin.com/view/VOIS/job/vois/"],
      ["Fisheye", "https://fisheye.hsh-berlin.com/"],
      ["HSH-Guard", "http://intraweb.hsh-berlin.com/guard/"],
      ["Restore Database", "http://uwe-vm-20.hsh-berlin.com:4444/user"],
    ];
    createDropDownMenu("Tools", "#", ToolsSectionDropDownLinks);
    /* ASP Section */
    AspSectionDropDownLinks = [
      [
        "Markus Hempel - Rechtsfragen",
        "https://confluence.hsh-berlin.com/display/THM/Telefonliste",
      ],
      [
        "Ralf Reich - Rechtsfragen",
        "https://confluence.hsh-berlin.com/display/THM/Telefonliste",
      ],
      [
        "André Linkowitsch - HUX Plattform",
        "https://confluence.hsh-berlin.com/display/THM/Telefonliste",
      ],
      [
        "Chris Hengl - HUX Plattform",
        "https://confluence.hsh-berlin.com/display/THM/Telefonliste",
      ],
    ];
    createDropDownMenu(
      "Wichtige Ansprechpartner",
      "#",
      AspSectionDropDownLinks
    );
    /* VOIS Online Section */
    VoisOnlineSectionDropDownLinks = [
      ["Meldewesen", "https://online.vois.org/meldewesen/"],
      ["Vois Online", "https://online.vois.org/voisonline/"],
      ["Angelkarte", "https://online.vois.org/angelkarte/"],
      ["Gewerbe", "https://online.vois.org/gewerbe/"],
    ];
    createDropDownMenu(
      "VOIS-Online",
      "https://confluence.hsh-berlin.com/pages/viewpage.action?pageId=77177159",
      VoisOnlineSectionDropDownLinks
    );
    /* Personal Section */
    PersonalSectionDropDownLinks = [
      ["VOIS CRM", "https://www.vois-crm.de/default/login"],
      ["internes JIRA (Ticketsystem)", "https://vm-jira.hsh-berlin.com/"],
      [
        "externes JIRA (Ticketsystem)",
        "https://ticketsystem.hsh-berlin.com/login.jsp",
      ],
      [
        "Fachverfahren src - Meldewesen",
        "https://svn.hsh-berlin.com/vois/hsh-meldewesen/hsh-meldewesen/release/",
      ],
      [
        "Fachverfahren src - Personaldokumente",
        "https://svn.hsh-berlin.com/vois/hsh-personaldokumente/hsh-personaldokumente/release/",
      ],
    ];
    createDropDownMenu(
      "Personal",
      "https://www.google.com/",
      PersonalSectionDropDownLinks
    );
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
