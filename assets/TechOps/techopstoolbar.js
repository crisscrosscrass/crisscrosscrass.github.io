var countries = [
    ['AT', 'https://backoffice.ladenzeile.at/'],
    ['CZ', 'https://backoffice.shopalike.cz/'],
    ['DE', 'https://backoffice.ladenzeile.de/'],
    ['DK', 'https://backoffice.shopalike.dk/'],
    ['ES', 'https://backoffice.shopalike.es/'],
    ['FI', 'https://backoffice.shopalike.fi/'],
    ['FR', 'https://backoffice.shopalike.fr/'],
    ['HU', 'https://backoffice.shopalike.hu/'],
    ['IT', 'https://backoffice.shopalike.it/'],
    ['NL', 'https://backoffice.shopalike.nl/'],
    ['PL', 'https://backoffice.shopalike.pl/'],
    ['SE', 'https://backoffice.shopalike.se/'],
    ['SK', 'https://backoffice.shopalike.sk/']
]

var mappingTasks = [
    ['Replace Task', '<transform column="price">\n    <replace what="," with="."/>\n</transform>'],
    ['Append UTMs', '<transform column="deeplink url">\n    <replace regexp="true" what="$" with="?utm_source=shopalike&amp;utm_campaign=shopalike&amp;utm_medium=cpc"/>\n</transform>'],
    ['Shipping Costs', '<task class="com.visualmeta.sync.task.mapping.advanced.ExtendedAdvancedMappingTask">\n    <condition name="isEligibleForFreeShipping" mapped-column="PRICE">\n        <greater>99.99</greater>\n    </condition>\n    <set column="SHIPPING COSTS" if="isEligibleForFreeShipping">\n        0\n    </set>\n    <condition name="isNotEligibleForFreeShipping" mapped-column="PRICE">\n        <less>100</less>\n    </condition>\n    <set column="SHIPPING COSTS" if="isNotEligibleForFreeShipping">\n        10\n    </set>\n</task>'],
    ['Currency Converter', '<task class="com.visualmeta.sync.task.preprocess.CurrencyConversionTask">\n   <source-currency-code value="DKK" />\n   <target-currency-code value="EUR" />\n   <target-column value="PRICE" />\n   <target-column value="OLD PRICE" />\n   <target-column value="SHIPPING COSTS" />\n   <!--target-column value="CPC" /-->\n</task>'],
    ['Split Column', '<split mapped-column="AUX IMAGE URL 1" separator=","> \n    <mapped-column name="AUX IMAGE URL 1"/> \n    <mapped-column name="AUX IMAGE URL 2"/>\n    <mapped-column name="AUX IMAGE URL 3"/>\n    <mapped-column name="AUX IMAGE URL 4"/>\n    <mapped-column name="AUXILIARY"/>\n</split>'],
    ['Simple Filter', '<task class="com.visualmeta.sync.task.filter.SimpleFilterTask">\n    <!-- Below filter excludes all items with the word "potato" in AUXILIARY column -->\n    <filter filter-type="EXCLUDE" matching-type="CONTAINS" operator="AND" use-lowercase="false">\n        <condition column="AUXILIARY" filter-value="potato"/>\n    </filter>\n</task>'],
    ['Digest Auth', '<auth type="DIGEST">\n    <username>USERNAME</username>\n    <password>PASSWORD</password>\n</auth>'],
    ['Skip File Size Check', '<skip-file-size-check value="true"/>'],
    ['SKU Hash Generator', '<task class="com.visualmeta.sync.task.preprocess.SkuHashGeneratorTask">\n    <SKU />\n    <SIZES />\n</task>'],
    ['Timeout Settings', '<read-timeout timeunit="MINUTES">20</read-timeout>\n<connect-timeout timeunit="SECONDS">1</connect-timeout>\n<download-timeout timeunit="MINUTES">100</download-timeout>'],
    ['Merge Columns', '<set column="GENDER">\n    <expression value="%s - %s">\n        <term>\n            <mapped-column name="GENDER"/>\n        </term>\n        <term>\n            <original-column name="age_group"/>\n        </term>\n    </expression>\n</set>'],
    ['Exclude Items By Sizes', '<!-- START exclude items with less than 3 sizes -->    \n<task class="com.visualmeta.sync.task.mapping.advanced.ExtendedAdvancedMappingTask">\n    <split mapped-column="sizes" separator=","> \n        <mapped-column name="AUXILIARY"/>            \n        <mapped-column name="AUXILIARY"/>\n        <mapped-column name="AUXILIARY"/>\n    </split>        \n    <set column="AUXILIARY" if="EMPTY">\n        remove\n    </set>\n    <condition name="universalSize" mapped-column="SIZES"> \n        <!-- Specify value for universal size which will not be excluded --->\n        <contains value="Talla Ãºnica" case-sensitive="false"/>\n    </condition>\n    <!-- Below will clear AUXILIARY column for products with universal size -->\n    <set column="AUXILIARY" if="universalSize">\n        \n    </set>\n</task>    \n<task class="com.visualmeta.sync.task.filter.SimpleFilterTask">\n    <filter filter-type="EXCLUDE" matching-type="CONTAINS" operator="AND" use-lowercase="false">\n        <condition column="AUXILIARY" filter-value="remove"/>\n    </filter>\n</task>      \n<!-- END exclude items with less than 3 sizes -->'],
]

var jiraLinks = [
    ['Home Dashboard', 'https://visualmeta.atlassian.net/secure/Dashboard.jspa'],
    ['Overview Dashboard', 'https://visualmeta.atlassian.net/secure/Dashboard.jspa?selectPageId=14000'],
    ['Sync Kanban', 'https://visualmeta.atlassian.net/secure/RapidBoard.jspa?rapidView=70&projectKey=SYNC'],
    ['TechOps Kanban', 'https://visualmeta.atlassian.net/secure/RapidBoard.jspa?rapidView=70&projectKey=SYNC'],
    ['TechOps ALL', 'https://visualmeta.atlassian.net/issues/?filter=10923']
]

var grafanaLinks = [
    ['Tagging', 'https://control.visual-meta.com/dashboard/db/tagging-process-monitor-influxdb'],
    ['TechOps', 'https://control.visual-meta.com/dashboard/db/techops-dashboard'],
    ['Orca KPI', 'https://control.visual-meta.com/dashboard/db/orca-kpi'],
    ['CPCPerTag', 'https://control.visual-meta.com/dashboard/db/setcpcpertagam-duration'],
    ['Images', 'https://control.visual-meta.com/dashboard/db/imageserver-consistency'],
    ['LIC', 'https://control.visual-meta.com/dashboard/db/lazy-item-cache-consistency'],
    ['Cache', 'https://control.visual-meta.com/dashboard/db/cache-consistency'],
    ['Product Catalog', 'https://control.visual-meta.com/dashboard/db/product-catalog-consistency'],
    ['AM Stats', 'https://control.visual-meta.com/dashboard/db/applicationmaster-statistics'],
    ['DB Sizes', 'https://control.visual-meta.com/dashboard/db/database-sizes'],
]

var donaldLinks = [
    ['V1.1 - Sync Item Count Overview', 'https://bi.visual-meta.com/spotfire/wp/render/828498324740/analysis?file=/Tech%20Ops%20Dashboards/V1.1%20-%20Sync%20Item%20Count%20Overview&waid=W7L1hBK1x0Snwf03hXa37-0520321c5aL-K-&wavid=0'],
    ['V2 - QualitySyncFeed', 'https://bi.visual-meta.com/spotfire/wp/render/828498324740/analysis?file=/Tech%20Ops%20Dashboards/V2%20-%20QualitySyncFeed&waid=TV7pTCw1a0KXojZ6w-sQ7-0520321c5a60eU&wavid=0' ],
    ['V2.1 - Sync', 'https://bi.visual-meta.com/spotfire/wp/render/828498324740/analysis?file=/Tech%20Ops%20Dashboards/V2.1%20-%20Sync&waid=EaDwqQbWKUm_n97XX0xAR-2712191c5avS4i&wavid=0' ],

]

function checkIfSyncMonitorAddOnsEnabled() {
	console.log('Searching Sync Monitor AddOns ...');
    var addOns = document.getElementsByClassName("syncMonitorAddOn");
    if (addOns.length > 0) {
	    console.log('Sync Monitor AddOns are enabled!');
        return true;
    } else {
	    console.log('Sync Monitor AddOns are disabled!');
        return false;
    }
}

function createDrowndownMenu(dropdownTitle, dropdownLinks) {
	dropdown = document.createElement('div');
	dropdownBtn = document.createElement('button');
	dropdownBtn.className = "dropbtn";
	dropdownBtnText = document.createTextNode(dropdownTitle);
	dropdownBtn.appendChild(dropdownBtnText);
	dropdown.append(dropdownBtn);
	dropdown.className = 'dropdown';
	dropdownContent = document.createElement('div');
	dropdownContent.className = 'dropdown-content';

	for (var i = 0; i < dropdownLinks.length; i++) {
		a = document.createElement('a');
		a.innerHTML = dropdownLinks[i][0];
		a.href = dropdownLinks[i][1];
		dropdownContent.appendChild(a);
	}

	dropdown.appendChild(dropdownContent);
	return dropdown;
}

function createToolbar() {
	
	// Main toolbar element
	var toolbar = document.createElement('div');
	toolbar.className = "techopsToolbar";
	document.body.appendChild(toolbar);

	// Toolbar title
	var toolbarTitle = document.createElement('span');
	toolbarTitle.className = 'toolbarTitle';
	toolbarTitleText = document.createTextNode('ðŸ’€ TechOpsToolbar');
	toolbarTitle.appendChild(toolbarTitleText);
	toolbar.appendChild(toolbarTitle);

	// Backoffice links
	backofficeDropdown = createDrowndownMenu('Backoffice â–¼', countries)
	toolbar.appendChild(backofficeDropdown);
	
	// Sync Control links
	var syncControlUrl = '#tab=sync-ctrl'
	var syncControlLinks = [];
	for (var i = 0; i < countries.length; i++) {
	    syncControlLinks.push([countries[i][0], countries[i][1] + syncControlUrl])
	}
	syncControlDropdown = createDrowndownMenu('Sync Control â–¼', syncControlLinks)
	toolbar.appendChild(syncControlDropdown);

	
	
	// Sync Monitor links
	var syncMonitorUrl = '#tab=sync-mon'
	var syncMonitorLinks = [];
	for (var i = 0; i < countries.length; i++) {
	    syncMonitorLinks.push([countries[i][0], countries[i][1] + syncMonitorUrl])
	}
	syncMonitorDropdown = createDrowndownMenu('Sync Monitor â–¼', syncMonitorLinks)
	toolbar.appendChild(syncMonitorDropdown);

    // Jira dropdown
	jiraDropdown = createDrowndownMenu('Jira â–¼', jiraLinks)
	toolbar.appendChild(jiraDropdown);

    // Grafana dropdown
	grafanaDropdown = createDrowndownMenu('Grafana â–¼', grafanaLinks)
	toolbar.appendChild(grafanaDropdown);

    // Donald dropdown
	donaldDropdown = createDrowndownMenu('Donald â–¼', donaldLinks)
	toolbar.appendChild(donaldDropdown);

	// Mapping tasks
	mappingTasksDropdown = document.createElement('div');
	mappingTasksDropdownBtn = document.createElement('button');
	mappingTasksDropdownBtn.className = "dropbtn";
	mappingTasksDropdownBtnText = document.createTextNode('Mapping Tasks â–¼');
	mappingTasksDropdownBtn.appendChild(mappingTasksDropdownBtnText);
	mappingTasksDropdown.append(mappingTasksDropdownBtn);
	mappingTasksDropdown.className = 'dropdown';
	mappingTasksDropdownContent = document.createElement('div');
	mappingTasksDropdownContent.className = 'dropdown-content';

	for (var i = 0; i < mappingTasks.length; i++) {
		a = document.createElement('a');
		var taskName = mappingTasks[i][0];
		var mappingTask = mappingTasks[i][1];
		console.log(mappingTask);
		a.innerHTML = taskName;
		a.id = i;
		a.onclick = function() {
		    var popupDiv = document.createElement("div");
		    var popupTitle = document.createElement("h1");
		    popupTitle.innerHTML = mappingTasks[this.id][0];
		    popupDiv.appendChild(popupTitle);
		    popupDiv.className = 'popupDiv';
		    var textArea = document.createElement("textarea");
		    textArea.value = mappingTasks[this.id][1];
		    textArea.cols = 150;
		    textArea.rows = 20;
		    popupDiv.appendChild(textArea);

            btn = document.createElement('button');
            btn.innerHTML = 'Copy & Close';
            btn.onclick = function() {
                textArea.focus();
                textArea.select();
                document.execCommand('copy');
                popupDiv.parentNode.removeChild(popupDiv);
            };
            popupDiv.appendChild(btn);

		    document.body.appendChild(popupDiv);
		};
		mappingTasksDropdownContent.appendChild(a);
	}

	mappingTasksDropdown.appendChild(mappingTasksDropdownContent);
	toolbar.appendChild(mappingTasksDropdown);

	// Sync Monitor Addons link
	var syncMonitorAddonsEnabled;
    if(checkIfSyncMonitorAddOnsEnabled()) {
        syncMonitorAddonsEnabled = true;
    } else {
        syncMonitorAddonsEnabled = false;
    }

	var syncMonitorAddonsLink = document.createElement('a');
	syncMonitorAddonsLink.onclick = function() { 
		if(window.location.href.includes('sync-mon')) {
			if (syncMonitorAddonsEnabled) {
				for (var i = 0; i < 10; i++) {
					removeSyncMonitorAddOns();
				}
				syncMonitorAddonsEnabled = false;
				syncMonitorAddonsLink.className = 'addOnsDisabled';
			} else {
				console.log('Enabling Sync Monitor AddOns!')
				enableSyncMonitorAddOns();
				syncMonitorAddonsEnabled = true;
				syncMonitorAddonsLink.className = 'addOnsEnabled';
			}
		} else {
			console.log('You need to be in Sync Monitor to use this!');
			alert('You need to be in Sync Monitor to use this!');
		}
	};
	syncMonitorAddonsLink.innerHTML = 'Sync Monitor AddOns ðŸŒŸ';
	if(syncMonitorAddonsEnabled) {
	    syncMonitorAddonsLink.className = 'addOnsEnabled';
	} else {
	    syncMonitorAddonsLink.className = 'addOnsDisabled';
	}
	toolbar.appendChild(syncMonitorAddonsLink);


	// Close Toolbar link
	var closeToolbarLink = document.createElement('a');
	closeToolbarLink.onclick = function() {
		closeToolbarLink.remove();
		toolbarTitle.remove();
		syncMonitorAddonsLink.remove();
		toolbar.remove();
		// Disable stylesheet
		for (var i = 0; i < document.styleSheets.length; i++) {
            if (document.styleSheets[i].href.search(/techops/) != -1) {
                document.styleSheets[i].disabled = true;
            }
        }
        // Disable head scripts
		for (var i = 0; i < document.scripts.length; i++) {
            if (document.scripts[i].src.search(/techops/) != -1) {
                document.scripts[i].remove();
            }
        }

	};
	closeToolbarLink.className = "closeToolbarLink";
	closeToolbarLink.innerHTML = 'âœ–';
	toolbar.appendChild(closeToolbarLink);

}

if(!document.getElementsByClassName('techopsToolbar')[0]) {
	console.log('Creating TechOps Toolbar ...')
	createToolbar();
} else {
	console.log('Toolbar is already created!')
	alert('Toolbar is already on. I refuse to create another one!')
}

function getCountry() {
    // Get domain code from hostname and turn to uppercase.
    hostnamesplit = window.location.hostname.split('.')
    country = hostnamesplit[hostnamesplit.length - 1].toUpperCase();
    return country;
}

function isShopname(str) {
    // Check if text matches pattern "Shopname (SHOP_ID)".
    if (str.match(/^.+?\(\d+?\)$/)) {
        return true;
    }
}

function getShopId(str) {
    // Extract shop id from the shopname field text.
    shopIdMatch = str.match(/\d+?\)$/)[0];
    shopId = shopIdMatch.substring(0, shopIdMatch.length - 1);
    return shopId;
}

function getShopName(str) {
    // Extract shop name from the shopname field text.
    shopName = str.match(/^(.+?)(\s\(\d+?\)$)/)[1];
    return shopName;
}

function createResyncLink(country, shopId) {
    // Create Resync link to be appended in Sync Monitor.
    resync = document.createElement('a');
    resync.href = 'http://amcentral.colo.vm:8080/manualSyncApplicationMaster/launch?country=' + country + '&args=' + shopId;
    resync.target = '_blank';
    resync.innerHTML = 'Resync';
	resync.className = "syncMonitorAddOn";
    return resync
}

function createSyncControlLink(shopName) {
    // Create Sync Control link to be appended in Sync Monitor.
    syncControl = document.createElement('a');
    syncControl.href = window.location.protocol + '//' + window.location.hostname + '/#tab=sync-ctrl--&--scf_search_shopDataSourceForShopSyncControl=' + shopName
    syncControl.target = '_blank';
    syncControl.innerHTML = 'Sync Control';
	syncControl.className = "syncMonitorAddOn";
    return syncControl
}

function getRemoteUrl(cell) {
    var elems = cell.getElementsByTagName("a");
    for (var i = 0; i < elems.length; i++) {
        if (elems[i].textContent = "Remote URL") {
            return elems[i].href
        }
    }
}

function createPreviewLink(url) {
    // Create Preview link to be appended in Sync Monitor.
    preview = document.createElement('a');
    preview.href = 'http://techops.colo.vm/feedtools/preview?url=' + encodeURIComponent(url)
    preview.target = '_blank';
    preview.innerHTML = 'Preview';
	preview.className = "syncMonitorAddOn";
    return preview
}

function enableSyncMonitorAddOns(){
    //console.log('Getting country ...')
    country = getCountry();
    var elems = document.getElementsByClassName("gwt-Label");

    //console.log('Looping over table cells ...')
    for (var i = 0; i < elems.length; i++) {
        //console.log('Checking if shopname in cell ...')
        if (isShopname(elems[i].textContent)) {
            //console.log('Extracting shopId ...');
            shopId = getShopId(elems[i].textContent);
            //console.log('Extracting shopName ...');
            shopName = getShopName(elems[i].textContent);
            //console.log('Creating resync link ...');
            resync = createResyncLink(country, shopId);
            //console.log('Creating Sync Control link ...');
            syncControl = createSyncControlLink(shopName);

            // Append new links as the element's children.
            currentRow = elems[i].parentElement.parentElement;
            feedCell = currentRow.lastChild.previousSibling;
            //console.log('Appending resync link ...')
			horizontalLine = document.createElement("hr");
			horizontalLine.className = "syncMonitorAddOn";
            feedCell.appendChild(horizontalLine);
            feedCell.appendChild(resync);
            newLine = document.createElement("br");
			newLine.className = "syncMonitorAddOn";
			feedCell.appendChild(newLine);
            //console.log('Appending Sync Control link ...');
            feedCell.appendChild(syncControl);
            //console.log('Appending Preview link ...');
            remoteUrl = getRemoteUrl(feedCell);
            previewLink = createPreviewLink(remoteUrl)
            newLine2 = document.createElement("br");
			newLine2.className = "syncMonitorAddOn";
			feedCell.appendChild(newLine2);
            feedCell.appendChild(previewLink);
        }
    }
}

function removeSyncMonitorAddOns() {
	//console.log('Removing Sync Monitor AddOns ...');
	var addOns = document.getElementsByClassName("syncMonitorAddOn"); 
	for (var i = 0; i < addOns.length; i++) {
		addOns[i].remove();
	}
}