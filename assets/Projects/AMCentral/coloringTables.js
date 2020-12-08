var getAllTables = document.querySelectorAll('tr');
var amCentralTree = {};
var currentAM;
for (var i = 0; i < getAllTables.length; i++) {
    if (getAllTables[i].attributes.class != undefined) {
        if (getAllTables[i].attributes[0].textContent == "am-header-header") {
            //console.log(getAllTables[i].children[0].children[0].textContent);
            currentAM = getAllTables[i].children[0].children[0].textContent;
            team = getAllTables[i].parentNode.children[1].children[1].children[1].textContent;
            amCentralTree[currentAM] = { "0 - name": currentAM, "0 - team": team };
        }
        if (getAllTables[i].attributes.team != undefined &&
            getAllTables[i].attributes.namespace != undefined &&
            getAllTables[i].attributes.laststatus != undefined
        ) {
            country = getAllTables[i].children[1].textContent;
            status = getAllTables[i].children[3].textContent.replace(/\s/g, "");
            lastStart = lastStatus = getAllTables[i].children[4].textContent.replace(/\s/g, "");
            lastFinish = lastStatus = getAllTables[i].children[5].textContent.replace(/\s/g, "");
            lastStatus = getAllTables[i].children[6].textContent.replace(/\s/g, "");
            schedule = getAllTables[i].children[8].textContent.replace(/\s/g, "");
            log = getAllTables[i].children[6].children[2] == undefined ? "-" : getAllTables[i].children[6].children[2].href;
            amCentralTree[currentAM][country] = { status,lastStart,lastFinish, lastStatus, schedule, log };
        }
    }

}
for (const [key, value] of Object.entries(amCentralTree)) {
    //console.log(`${key}: ${value}`);
    for (const [subkey, subvalue] of Object.entries(value)) {
        //console.log(`${subkey}: ${subvalue}`);
        if (subvalue.lastStatus != undefined && (subvalue.lastStatus.indexOf("FAILED(SeeLog)") === 0 || subvalue.lastStatus.indexOf("KILLED(SeeLog)") === 0)) {
            console.log(key, subkey, subvalue.lastStatus, subvalue.log);
        }
    }
}

console.log(amCentralTree);