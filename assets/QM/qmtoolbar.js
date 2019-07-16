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
        document.body.style.transform = 'translateY(35px)';
        unorderList = document.createElement("ul");
        /* Frontend */
        listItem = document.createElement("li");
        listItem.setAttribute("class","dropdown");
        aLink = document.createElement("a");
        aLink.setAttribute("href", "#");
        aLink.setAttribute("class", "dropbtn");
        aLink.innerHTML = "Frontend";
        listItem.appendChild(aLink);
        aDiv = document.createElement("div");
        aDiv.setAttribute("class","dropdown-content");
        aDropDownLink = document.createElement("a");
        aDropDownLink.setAttribute("href","https://www.ladenzeile.de/");
        aDropDownLink.innerHTML = "Ladenzeile - DE";
        aDiv.appendChild(aDropDownLink);
        aDropDownLink = document.createElement("a");
        aDropDownLink.setAttribute("href","https://www.ladenzeile.at/");
        aDropDownLink.innerHTML = "Ladenzeile - AT";
        aDiv.appendChild(aDropDownLink);
        aDropDownLink = document.createElement("a");
        aDropDownLink.setAttribute("href","https://www.shopalike.nl/");
        aDropDownLink.innerHTML = "ShopAlike - NL";
        aDiv.appendChild(aDropDownLink);
        aDropDownLink = document.createElement("a");
        aDropDownLink.setAttribute("href","https://www.shopalike.fr/");
        aDropDownLink.innerHTML = "ShopAlike - FR";
        aDiv.appendChild(aDropDownLink);
        aDropDownLink = document.createElement("a");
        aDropDownLink.setAttribute("href","https://www.shopalike.it/");
        aDropDownLink.innerHTML = "ShopAlike - IT";
        aDiv.appendChild(aDropDownLink);
        aDropDownLink = document.createElement("a");
        aDropDownLink.setAttribute("href","https://www.shopalike.es/");
        aDropDownLink.innerHTML = "ShopAlike - ES";
        aDiv.appendChild(aDropDownLink);
        aDropDownLink = document.createElement("a");
        aDropDownLink.setAttribute("href","https://www.shopalike.pl/");
        aDropDownLink.innerHTML = "ShopAlike - PL";
        aDiv.appendChild(aDropDownLink);
        aDropDownLink = document.createElement("a");
        aDropDownLink.setAttribute("href","https://www.shopalike.hu/");
        aDropDownLink.innerHTML = "ShopAlike - HU";
        aDiv.appendChild(aDropDownLink);
        aDropDownLink = document.createElement("a");
        aDropDownLink.setAttribute("href","https://www.shopalike.sk/");
        aDropDownLink.innerHTML = "ShopAlike - SK";
        aDiv.appendChild(aDropDownLink);
        aDropDownLink = document.createElement("a");
        aDropDownLink.setAttribute("href","https://www.shopalike.cz/");
        aDropDownLink.innerHTML = "ShopAlike - CZ";
        aDiv.appendChild(aDropDownLink);
        aDropDownLink = document.createElement("a");
        aDropDownLink.setAttribute("href","https://www.shopalike.fi/");
        aDropDownLink.innerHTML = "ShopAlike - FI";
        aDiv.appendChild(aDropDownLink);
        aDropDownLink = document.createElement("a");
        aDropDownLink.setAttribute("href","https://www.shopalike.dk/");
        aDropDownLink.innerHTML = "ShopAlike - DK";
        aDiv.appendChild(aDropDownLink);
        aDropDownLink = document.createElement("a");
        aDropDownLink.setAttribute("href","https://www.shopalike.se/");
        aDropDownLink.innerHTML = "ShopAlike - SE";
        aDiv.appendChild(aDropDownLink);
        listItem.appendChild(aDiv);
        unorderList.appendChild(listItem);
        /* Backoffice */
        listItem = document.createElement("li");
        listItem.setAttribute("class","dropdown");
        aLink = document.createElement("a");
        aLink.setAttribute("href", "#");
        aLink.setAttribute("class", "dropbtn");
        aLink.innerHTML = "Backoffice";
        listItem.appendChild(aLink);
        aDiv = document.createElement("div");
        aDiv.setAttribute("class","dropdown-content");
        aDropDownLink = document.createElement("a");
        aDropDownLink.setAttribute("href","https://backoffice.ladenzeile.de/");
        aDropDownLink.innerHTML = "Backoffice - DE";
        aDiv.appendChild(aDropDownLink);
        aDropDownLink = document.createElement("a");
        aDropDownLink.setAttribute("href","https://backoffice.ladenzeile.at/");
        aDropDownLink.innerHTML = "Backoffice - AT";
        aDiv.appendChild(aDropDownLink);
        aDropDownLink = document.createElement("a");
        aDropDownLink.setAttribute("href","https://backoffice.shopalike.nl/");
        aDropDownLink.innerHTML = "Backoffice - NL";
        aDiv.appendChild(aDropDownLink);
        aDropDownLink = document.createElement("a");
        aDropDownLink.setAttribute("href","https://backoffice.shopalike.fr/");
        aDropDownLink.innerHTML = "Backoffice - FR";
        aDiv.appendChild(aDropDownLink);
        aDropDownLink = document.createElement("a");
        aDropDownLink.setAttribute("href","https://backoffice.shopalike.it/");
        aDropDownLink.innerHTML = "Backoffice - IT";
        aDiv.appendChild(aDropDownLink);
        aDropDownLink = document.createElement("a");
        aDropDownLink.setAttribute("href","https://backoffice.shopalike.es/");
        aDropDownLink.innerHTML = "Backoffice - ES";
        aDiv.appendChild(aDropDownLink);
        aDropDownLink = document.createElement("a");
        aDropDownLink.setAttribute("href","https://backoffice.shopalike.pl/");
        aDropDownLink.innerHTML = "Backoffice - PL";
        aDiv.appendChild(aDropDownLink);
        aDropDownLink = document.createElement("a");
        aDropDownLink.setAttribute("href","https://backoffice.shopalike.hu/");
        aDropDownLink.innerHTML = "Backoffice - HU";
        aDiv.appendChild(aDropDownLink);
        aDropDownLink = document.createElement("a");
        aDropDownLink.setAttribute("href","https://backoffice.shopalike.sk/");
        aDropDownLink.innerHTML = "Backoffice - SK";
        aDiv.appendChild(aDropDownLink);
        aDropDownLink = document.createElement("a");
        aDropDownLink.setAttribute("href","https://backoffice.shopalike.cz/");
        aDropDownLink.innerHTML = "Backoffice - CZ";
        aDiv.appendChild(aDropDownLink);
        aDropDownLink = document.createElement("a");
        aDropDownLink.setAttribute("href","https://backoffice.shopalike.fi/");
        aDropDownLink.innerHTML = "Backoffice - FI";
        aDiv.appendChild(aDropDownLink);
        aDropDownLink = document.createElement("a");
        aDropDownLink.setAttribute("href","https://backoffice.shopalike.dk/");
        aDropDownLink.innerHTML = "Backoffice - DK";
        aDiv.appendChild(aDropDownLink);
        aDropDownLink = document.createElement("a");
        aDropDownLink.setAttribute("href","https://backoffice.shopalike.se/");
        aDropDownLink.innerHTML = "Backoffice - SE";
        aDiv.appendChild(aDropDownLink);
        listItem.appendChild(aDiv);
        unorderList.appendChild(listItem);
        /* Tagger */
        listItem = document.createElement("li");
        listItem.setAttribute("class","dropdown");
        aLink = document.createElement("a");
        aLink.setAttribute("href", "#");
        aLink.setAttribute("class", "dropbtn");
        aLink.innerHTML = "Tagger";
        listItem.appendChild(aLink);
        aDiv = document.createElement("div");
        aDiv.setAttribute("class","dropdown-content");
        aDropDownLink = document.createElement("a");
        aDropDownLink.setAttribute("href","https://tagger.ladenzeile.de/");
        aDropDownLink.innerHTML = "Tagger - DE";
        aDiv.appendChild(aDropDownLink);
        aDropDownLink = document.createElement("a");
        aDropDownLink.setAttribute("href","https://tagger.ladenzeile.at/");
        aDropDownLink.innerHTML = "Tagger - AT";
        aDiv.appendChild(aDropDownLink);
        aDropDownLink = document.createElement("a");
        aDropDownLink.setAttribute("href","https://tagger.shopalike.nl/");
        aDropDownLink.innerHTML = "Tagger - NL";
        aDiv.appendChild(aDropDownLink);
        aDropDownLink = document.createElement("a");
        aDropDownLink.setAttribute("href","https://tagger.shopalike.fr/");
        aDropDownLink.innerHTML = "Tagger - FR";
        aDiv.appendChild(aDropDownLink);
        aDropDownLink = document.createElement("a");
        aDropDownLink.setAttribute("href","https://tagger.shopalike.it/");
        aDropDownLink.innerHTML = "Tagger - IT";
        aDiv.appendChild(aDropDownLink);
        aDropDownLink = document.createElement("a");
        aDropDownLink.setAttribute("href","https://tagger.shopalike.es/");
        aDropDownLink.innerHTML = "Tagger - ES";
        aDiv.appendChild(aDropDownLink);
        aDropDownLink = document.createElement("a");
        aDropDownLink.setAttribute("href","https://tagger.shopalike.pl/");
        aDropDownLink.innerHTML = "Tagger - PL";
        aDiv.appendChild(aDropDownLink);
        aDropDownLink = document.createElement("a");
        aDropDownLink.setAttribute("href","https://tagger.shopalike.hu/");
        aDropDownLink.innerHTML = "Tagger - HU";
        aDiv.appendChild(aDropDownLink);
        aDropDownLink = document.createElement("a");
        aDropDownLink.setAttribute("href","https://tagger.shopalike.sk/");
        aDropDownLink.innerHTML = "Tagger - SK";
        aDiv.appendChild(aDropDownLink);
        aDropDownLink = document.createElement("a");
        aDropDownLink.setAttribute("href","https://tagger.shopalike.cz/");
        aDropDownLink.innerHTML = "Tagger - CZ";
        aDiv.appendChild(aDropDownLink);
        aDropDownLink = document.createElement("a");
        aDropDownLink.setAttribute("href","https://tagger.shopalike.fi/");
        aDropDownLink.innerHTML = "Tagger - FI";
        aDiv.appendChild(aDropDownLink);
        aDropDownLink = document.createElement("a");
        aDropDownLink.setAttribute("href","https://tagger.shopalike.dk/");
        aDropDownLink.innerHTML = "Tagger - DK";
        aDiv.appendChild(aDropDownLink);
        aDropDownLink = document.createElement("a");
        aDropDownLink.setAttribute("href","https://tagger.shopalike.se/");
        aDropDownLink.innerHTML = "Tagger - SE";
        aDiv.appendChild(aDropDownLink);
        listItem.appendChild(aDiv);
        unorderList.appendChild(listItem);
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
            ["Controller - SE","https://www.shopalike.se/controller/validationController"],
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
            ["Tagging Processing","https://control.visual-meta.com/d/000000086/tagging-process-monitor-influxdb?orgId=1"]
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
        /* Close Section */
        listItem = document.createElement("li");
        listItem.setAttribute("class","dropdown");
        listItem.setAttribute("id","right");
        aLink = document.createElement("a");
        aLink.setAttribute("href", "#");
        aLink.setAttribute("class", "dropbtn");
        var removeToolbarFunction = function (){
            document.body.style.transform = 'translateY(0px)';
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
        css = '#ToolbarID {z-index: 5000; padding:0; position: absolute;top: -35px;width: 100%;height: 50px;font-family: "Open Sans",sans-serif;font-size: 12px; } #ToolbarID ul { list-style-type: none; margin: 0; padding: 0; overflow: hidden;  background-color: #333; } #ToolbarID li {  float: left;} #ToolbarID #right {  float: right;} #ToolbarID li a,#ToolbarID .dropbtn {  display: inline-block;  color: white;  text-align: center;  padding: 14px 16px;  text-decoration: none;} #ToolbarID li a:hover,#ToolbarID  .dropdown:hover .dropbtn {  background-color: red;} #ToolbarID li.dropdown {  display: inline-block;} #ToolbarID .dropdown-content {  display: none;  position: absolute;  background-color: #f9f9f9;  min-width: 160px;  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);  z-index: 1;} #ToolbarID .dropdown-content a {  color: black;  padding: 12px 16px;  text-decoration: none;  display: block;  text-align: left;} #ToolbarID .dropdown-content a:hover {background-color: #f1f1f1;} #ToolbarID .dropdown:hover .dropdown-content {  display: block;}';
        head = document.head || document.getElementsByTagName('head')[0];
        style = document.createElement('style');
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