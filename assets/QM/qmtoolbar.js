javascript:(function(){
    if(!document.getElementById("ToolbarID")){
        function createDropDownMenu(dropdownTitle,dropdownTitleLink,dropdownLinks){
            listItem = document.createElement("li");
            listItem.setAttribute("class","dropdown");
            aLink = document.createElement("a");
            aLink.setAttribute("href", dropdownTitleLink);
            aLink.setAttribute("class", "dropbtn");
            aLink.innerHTML = dropdownTitle;
            listItem.appendChild(aLink);
            aDiv = document.createElement("div");
            // for each
            for(var i = 0 ; i < dropdownLinks.length; i++){
                aDiv.setAttribute("class","dropdown-content");
                aDropDownLink = document.createElement("a");
                aDropDownLink.setAttribute("href",dropdownLinks[i][1]);
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
        cssToolbar = '';
        document.body.appendChild(toolbar);
        toolbar.style.cssText = cssToolbar;
        unorderList = document.createElement("ul");
        /* Frontend */
        FrontendSectionDropDownLinks = [
            ["Ladenzeile - AT","https://www.ladenzeile.at/"],
            ["Ladenzeile - DE","https://www.ladenzeile.de/"],
            ["ShopAlike - NL","https://www.shopalike.nl/"],
            ["ShopAlike - FR","https://www.shopalike.fr/"],
            ["ShopAlike - IT","https://www.shopalike.it/"],
            ["ShopAlike - ES","https://www.shopalike.es/"],
            ["ShopAlike - PL","https://www.shopalike.pl/"],
            ["ShopAlike - HU","https://www.shopalike.hu/"],
            ["ShopAlike - SK","https://www.shopalike.sk/"],
            ["ShopAlike - CZ","https://www.shopalike.cz/"],
            ["ShopAlike - FI","https://www.shopalike.fi/"],
            ["ShopAlike - DK","https://www.shopalike.dk/"],
            ["ShopAlike - SE","https://www.shopalike.se/"]
        ]
        createDropDownMenu("Frontend","#",FrontendSectionDropDownLinks);
        /* Backoffice */
        BackofficeSectionDropDownLinks = [
            ["Backoffice - AT","https://backoffice.ladenzeile.at/"],
            ["Backoffice - DE","https://backoffice.ladenzeile.de/"],
            ["Backoffice - NL","https://backoffice.shopalike.nl/"],
            ["Backoffice - FR","https://backoffice.shopalike.fr/"],
            ["Backoffice - IT","https://backoffice.shopalike.it/"],
            ["Backoffice - ES","https://backoffice.shopalike.es/"],
            ["Backoffice - PL","https://backoffice.shopalike.pl/"],
            ["Backoffice - HU","https://backoffice.shopalike.hu/"],
            ["Backoffice - SK","https://backoffice.shopalike.sk/"],
            ["Backoffice - CZ","https://backoffice.shopalike.cz/"],
            ["Backoffice - FI","https://backoffice.shopalike.fi/"],
            ["Backoffice - DK","https://backoffice.shopalike.dk/"],
            ["Backoffice - SE","https://backoffice.shopalike.se/"]
        ]
        createDropDownMenu("Backoffice","#",BackofficeSectionDropDownLinks);
        /* Tagger */
        TaggerSectionDropDownLinks = [
            ["Tagger - DE","https://tagger.ladenzeile.de/"],
            ["Tagger - AT","https://tagger.ladenzeile.at/"],
            ["Tagger - NL","https://tagger.shopalike.nl/"],
            ["Tagger - FR","https://tagger.shopalike.fr/"],
            ["Tagger - IT","https://tagger.shopalike.it/"],
            ["Tagger - ES","https://tagger.shopalike.es/"],
            ["Tagger - PL","https://tagger.shopalike.pl/"],
            ["Tagger - HU","https://tagger.shopalike.hu/"],
            ["Tagger - SK","https://tagger.shopalike.sk/"],
            ["Tagger - CZ","https://tagger.shopalike.cz/"],
            ["Tagger - FI","https://tagger.shopalike.fi/"],
            ["Tagger - DK","https://tagger.shopalike.dk/"],
            ["Tagger - SE","https://tagger.shopalike.se/"]
        ]
        createDropDownMenu("Tagger","#",TaggerSectionDropDownLinks);
        /* Validation Controller */
        ValidationSectionDropDownLinks = [
            ["Controller - DE","https://www.ladenzeile.de/controller/validationController"],
            ["Controller - AT","https://www.ladenzeile.at/controller/validationController"],
            ["Controller - NL","https://www.shopalike.nl/controller/validationController"],
            ["Controller - FR","https://www.shopalike.fr/controller/validationController"],
            ["Controller - IT","https://www.shopalike.it/controller/validationController"],
            ["Controller - ES","https://www.shopalike.es/controller/validationController"],
            ["Controller - PL","https://www.shopalike.pl/controller/validationController"],
            ["Controller - HU","https://www.shopalike.hu/controller/validationController"],
            ["Controller - SK","https://www.shopalike.sk/controller/validationController"],
            ["Controller - CZ","https://www.shopalike.cz/controller/validationController"],
            ["Controller - FI","https://www.shopalike.fi/controller/validationController"],
            ["Controller - DK","https://www.shopalike.dk/controller/validationController"],
            ["Controller - SE","https://www.shopalike.se/controller/validationController"]
        ]
        createDropDownMenu("Validation","#",ValidationSectionDropDownLinks);
        /* Controller */
        ControllerSectionDropDownLinks = [
            ["How to use","https://visualmeta.atlassian.net/wiki/spaces/DEV/pages/21759197/Controllers+Tools"],
            ["Content Checker","https://www.ladenzeile.de/controller/contentCheckerController?q=keyword"],
            ["Suggestions","https://www.ladenzeile.de/controller/suggestionDebugController?method=perfectmatch&query=Adidas"],
            ["Tagset-Controller","https://www.ladenzeile.de/controller/urlToTagSetController?url=https://moebel.ladenzeile.de/schraenke-vitrinen-rot-kirschrot-holz/"],
            ["Live View","https://www.ladenzeile.de/controller/liveViewController"],
            ["Cache Debug","https://www.ladenzeile.de/controller/cacheDebugController?mode=item&itemIds=445266720"],
            ["Cache Flush","https://www.ladenzeile.de/controller/flushCacheController"],
            ["itemGrouping","https://www.ladenzeile.de/controller/itemGroupingDebugController?tagIds=103030&offset=0&itemCount=120"],
            ["ipBlockerDebug","https://www.ladenzeile.de/controller/ipBlockerDebugController"],
            ["Email Renderer","https://www.ladenzeile.de/controller/emailRendererController"]
        ]
        createDropDownMenu("Controller","#",ControllerSectionDropDownLinks);
        /* Grafana Section */
        GrafanaSectionDropDownLinks = [
            ["Tagging Cache","https://control.visual-meta.com/d/000000144/techops-alerts?orgId=1"],
            ["Tagging Processing","https://control.visual-meta.com/d/000000086/tagging-process-monitor-influxdb?orgId=1"],
            ["Sync General Item","https://control.visual-meta.com/d/ENxo58RZk/sync-general-item-status?orgId=1"]
        ]
        createDropDownMenu("Grafana","#",GrafanaSectionDropDownLinks);
        /* Tools Section */
        ToolsSectionDropDownLinks = [
            ["Sorting Debug Tool","https://sorting-debug-tool.visual-meta.com/"],
            ["Feed Detective","http://feeddetective.office.vm:8080/"],
            ["Spotfire - Donald","https://bi.visual-meta.com/spotfire/login.html?#/"],
            ["Jira","https://visualmeta.atlassian.net/secure/Dashboard.jspa"],
            ["Confluence","https://visualmeta.atlassian.net/wiki/"],
            ["Banner Pool - Image Search","http://bannerpool.office.vm/"],
            ["SW - Creator Tool","https://shoppingworld.visual-meta.com/overview"]
        ]
        createDropDownMenu("Tools","#",ToolsSectionDropDownLinks);
        /* Personal Section */
        PersonalSectionDropDownLinks = [
            ["Chat - Google","https://chat.google.com/"],
            ["OKR Dashboard S1","https://docs.google.com/spreadsheets/d/15wm5bPh2IgA1pqIrR6yLPOMYoUdjFS9NlvaemI8ipWM/"],
            ["OKR Dashboard S2","https://docs.google.com/spreadsheets/d/1AX1JXXmsUczz25wzLi89QhX4w2Dx-RTtMIQVz1iOcKs/"],
            ["Personio","https://visualmeta.personio.de/login/index"],
            ["Mobile Working Calendar","https://visualmeta.atlassian.net/wiki/spaces/VM/pages/126620914/Mobile+Working+-+Calendar/"],
            ["All Hands Presentations","https://visualmeta.atlassian.net/wiki/spaces/VM/pages/126716164/All+Hands+Presentations/"]
        ]
        createDropDownMenu("Personal","https://www.google.com/",PersonalSectionDropDownLinks);
        /* create Ticket Section */
        function createTicket(){
            console.log("Create a Ticket for... ");
            // customfield_10807=13816 TEAM
            var Jira = "";
            if(document.getElementById("selectedTeamForBug").value != "-1" ){
                // console.log("you selected Bug!");
                var selectedTeam = document.getElementById("selectedTeamForBug").value;
                Jira = "https://visualmeta.atlassian.net/secure/CreateIssueDetails!init.jspa?pid=11000&issuetype=1&summary=Problem Summary&description=*Problem Statement*%0A|WHERE do you see the problem?|%0A|WHAT is exactly wrong?|%0A|WHO is affected?|%0A%0A*Reproduce*%0A|HOW did the problem occur?|%0A|HOW can we see it?|%0A%0A*Expected Outcome*%0A|WHY is that wrong?|%0A|WHAT is the correct one?|%0A%0A*Hints*&customfield_10807="+selectedTeam;
            }
            if(document.getElementById("selectedTeamForStory").value != "-1" ){
                // console.log("you selected Story!");
                var selectedTeam = document.getElementById("selectedTeamForStory").value;
                Jira = "https://visualmeta.atlassian.net/secure/CreateIssueDetails!init.jspa?pid=11000&issuetype=10001&summary=Feature Summary&description=*Feature Statement*%0A|WHERE do you see the problem?|%0A|WHAT is exactly wrong?|%0A|WHO is affected?|%0A%0A*Reproduce*%0A|HOW did the problem occur?|%0A|HOW can we see it?|%0A%0A*Expected Outcome*%0A|WHY is that wrong?|%0A|WHAT is the correct one?|%0A%0A*Hints*&customfield_10807="+selectedTeam;
            }
            window.open(Jira);
            // console.log(document.getElementById("selectedTeamForBug").options[document.getElementById("selectedTeamForBug").selectedIndex].text);
            // console.log(document.getElementById("selectedTeamForBug").value);
            document.getElementById("selectedTeamForBug").value = "-1";
            document.getElementById("selectedTeamForStory").value = "-1";
        };
        AllDevTeams = [
            ["None","-1"],
            ["Sharks","13816"],
            ["Rabbits","14701"],
            ["Lobster","10651"],
            ["Swift Foxes","10636"],
            ["Goldfish","14734"],
            ["Orcas","10638"],
            ["Elephants","10635"],
            ["Crocodiles","10634"],
            ["Meerkats","14736"],
            ["Bees","10637"],
            ["Camels","14804"],
            ["Raptors","14837"],
            ["Design","14866"]
        ];
        listItem = document.createElement("li");
            listItem.setAttribute("class","dropdown");
            aLink = document.createElement("a");
            aLink.setAttribute("href", "#");
            aLink.setAttribute("class", "dropbtn");
            aLink.innerHTML = "&#9850;Ticket";
            listItem.appendChild(aLink);
            aDiv = document.createElement("div");
            aDiv.setAttribute("class","dropdown-content");
                aDropDownLink = document.createElement("a");
                aDropDownLink.setAttribute("href","https://visualmeta.atlassian.net/wiki/spaces/DEV/pages/1398047321/Bug+Reporting+You");
                aDropDownLink.innerHTML = "<strong>Bug Reporting & You &#9873;</strong>";
                aDiv.appendChild(aDropDownLink);
                aDropDownLink = document.createElement("a");
                aDropDownLink.setAttribute("href","#");
                aDropDownLink.innerHTML = "create Bug";
                    aSelection = document.createElement("select");
                    aSelection.setAttribute("id","selectedTeamForBug");
                    aSelection.addEventListener("change", createTicket, false);
                    for (var i = 0; i < AllDevTeams.length; i++){
                        aOption = document.createElement("option");
                            aOption.innerHTML = AllDevTeams[i][0];
                            aOption.setAttribute("value",AllDevTeams[i][1]);
                        aSelection.appendChild(aOption);
                    }
                aDropDownLink.appendChild(aSelection);
            aDiv.appendChild(aDropDownLink);
                aDropDownLink = document.createElement("a");
                aDropDownLink.setAttribute("href","#");
                aDropDownLink.innerHTML = "create Story";
                    aSelection = document.createElement("select");
                    aSelection.setAttribute("id","selectedTeamForStory");
                    aSelection.addEventListener("change", createTicket, false);
                    for (var i = 0; i < AllDevTeams.length; i++){
                        aOption = document.createElement("option");
                            aOption.innerHTML = AllDevTeams[i][0];
                            aOption.setAttribute("value",AllDevTeams[i][1]);
                        aSelection.appendChild(aOption);
                    }
                aDropDownLink.appendChild(aSelection);
            aDiv.appendChild(aDropDownLink);
            listItem.appendChild(aDiv);
            unorderList.appendChild(listItem);
        /* Close Section */
        listItem = document.createElement("li");
        listItem.setAttribute("class","dropdown");
        listItem.setAttribute("id","right");
        aLink = document.createElement("a");
        aLink.setAttribute("href", "#");
        aLink.setAttribute("class", "dropbtn");
        var removeToolbarFunction = function (){
            if(document.location.href.includes("backoffice")){
                var sheet = document.getElementById("qmtoolbarStyleSheet");
                sheet.disabled = true;
                sheet.parentNode.removeChild(sheet);
            }else{
                document.body.style.transform = 'translateY(0px)';
            }
            toolbarSection = document.getElementById('ToolbarID');
            toolbarSection.parentNode.removeChild(toolbarSection);
        };
        aLink.addEventListener("click", removeToolbarFunction, false);
        aLink.innerHTML = "Close";
        listItem.appendChild(aLink);
        aDiv = document.createElement("div");
        aDiv.setAttribute("class","dropdown-content");
        listItem.appendChild(aDiv);
        unorderList.appendChild(listItem);
        /* append List to Toolbar */
        toolbar.appendChild(unorderList);
        if(document.location.href.includes("backoffice")){
            css = 'body { padding-top:70px; } .gwt-MenuBar-horizontal { margin-top: 50px; } #ToolbarID {z-index: 5000; padding:0; position: absolute;top: 0px;width: 100%;height: 50px;font-family: "Open Sans",sans-serif;font-size: 12px; } #ToolbarID ul { list-style-type: none; margin: 0; padding: 0; overflow: hidden;  background-color: #333; } #ToolbarID li {  float: left;} #ToolbarID #right {  float: right;} #ToolbarID li a,#ToolbarID .dropbtn {  display: inline-block;  color: white;  text-align: center;  padding: 14px 16px;  text-decoration: none;} #ToolbarID li a:hover,#ToolbarID  .dropdown:hover .dropbtn {  background-color: red;} #ToolbarID li.dropdown {  display: inline-block;} #ToolbarID .dropdown-content {  display: none;  position: absolute;  background-color: #f9f9f9;  min-width: 160px;  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);  z-index: 1;} #ToolbarID .dropdown-content a {  color: black;  padding: 12px 16px;  text-decoration: none;  display: block;  text-align: left;} #ToolbarID .dropdown-content a:hover {background-color: #f1f1f1;} #ToolbarID .dropdown:hover .dropdown-content {  display: block;} #ToolbarID select { font-family: "Open Sans",sans-serif;font-size: 12px;  margin-left: 5px;  padding-left: 10px;  width: 100%;background: #333; border-color: #333; color: #fff;} #ToolbarID select option { background: #333;color: #fff;box-shadow: inset 20px 20px #f00;}';
        }else{
            css = '#ToolbarID {z-index: 5000; padding:0; position: absolute;top: -35px;width: 100%;height: 50px;font-family: "Open Sans",sans-serif;font-size: 12px; } #ToolbarID ul { list-style-type: none; margin: 0; padding: 0; overflow: hidden;  background-color: #333; } #ToolbarID li {  float: left;} #ToolbarID #right {  float: right;} #ToolbarID li a,#ToolbarID .dropbtn {  display: inline-block;  color: white;  text-align: center;  padding: 14px 16px;  text-decoration: none;} #ToolbarID li a:hover,#ToolbarID  .dropdown:hover .dropbtn {  background-color: red;} #ToolbarID li.dropdown {  display: inline-block;} #ToolbarID .dropdown-content {  display: none;  position: absolute;  background-color: #f9f9f9;  min-width: 160px;  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);  z-index: 1;} #ToolbarID .dropdown-content a {  color: black;  padding: 12px 16px;  text-decoration: none;  display: block;  text-align: left;} #ToolbarID .dropdown-content a:hover {background-color: #f1f1f1;} #ToolbarID .dropdown:hover .dropdown-content {  display: block;} #ToolbarID select { font-family: "Open Sans",sans-serif;font-size: 12px;  margin-left: 5px;  padding-left: 10px;  width: 100%;background: #333; border-color: #333; color: #fff;} #ToolbarID select option { background: #333;color: #fff;box-shadow: inset 20px 20px #f00;}';
            document.body.style.transform = 'translateY(35px)';
        }
        head = document.head || document.getElementsByTagName('head')[0];
        style = document.createElement('style');
        style.setAttribute("id","qmtoolbarStyleSheet");
        head.appendChild(style);
        style.type = 'text/css';
        if (style.styleSheet){
            style.styleSheet.cssText = css;
            } else {
                style.appendChild(document.createTextNode(css));
                }
        window.scrollTo(0, 0);
    }else{window.scrollTo(0, 0);}
})();