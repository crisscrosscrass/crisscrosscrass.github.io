var getAllAM = document.querySelectorAll('tr');
var allAMTopics = [];
var allFailedLogs = [];
for (var i = 0; i < getAllAM.length; i++) {
    if (getAllAM[i].attributes.class != undefined) {
        if (getAllAM[i].attributes[0].textContent == "am-header-header") {
            console.log(getAllAM[i].children[0].children[0].textContent);
        }
    }
    if (getAllAM[i].attributes.class != undefined &&
        getAllAM[i].attributes.team != undefined &&
        getAllAM[i].attributes.namespace != undefined &&
        getAllAM[i].attributes.laststatus != undefined
    ) {
        foundAM = getAllAM[i].children[6];
        schedule = getAllAM[i].children[8].textContent.replace(/\s/g, "");
        lastStatus = foundAM.textContent.replace(/\s/g, "");
        if (schedule.indexOf("willnotrunChange") === -1) {
            if (lastStatus.indexOf("FAILED") === 0) {
                foundAM.style.backgroundColor = "FireBrick";
                allFailedLogs.push(foundAM.children[2].href)
            }
            if (lastStatus.indexOf("MISSED_SCHEDULE") === 0) {
                foundAM.style.backgroundColor = "DEEPPINK";
            }
            if (lastStatus.indexOf("KILLED") === 0) {
                foundAM.style.backgroundColor = "DarkViolet";
            }
            if (lastStatus.indexOf("SUCCEEDED") === 0) {
                foundAM.style.backgroundColor = "Lime";
            }
            if (lastStatus.indexOf("-") === 0) {
                foundAM.style.backgroundColor = "DimGray";
            }
        }

    }
}

if (confirm(`Do you want to open all ${allFailedLogs.length} Failed Logs in Tabs?`)) {

    for (var i = 0; i < allFailedLogs.length; i++) {
        window.open(allFailedLogs[i]);
    }
} else {
    console.log({ allAMTopics });
    console.log({ allFailedLogs });
}