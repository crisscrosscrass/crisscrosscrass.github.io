javascript: void function() {
    var getAllAM = document.querySelectorAll('tr');
var team = document.getElementById("filter-team").value;
for (var i = 0; i < getAllAM.length; i++) {
    if (getAllAM[i].attributes.class != undefined &&
        getAllAM[i].attributes.team != undefined &&
        getAllAM[i].attributes.namespace != undefined
    ) {
        if (getAllAM[i].attributes.team.value == team &&
            getAllAM[i].attributes.class.value.toLowerCase().indexOf("hidden-techops") === -1) {

            amName = getAllAM[i].children[0].textContent;
            status = getAllAM[i].children[3].textContent.trim();
            lastStatus = getAllAM[i].children[6].textContent.replace(/\s/g, "");
            schedule = getAllAM[i].children[8].textContent.replace(/\s/g, "");
            console.log({ amName, status, lastStatus, schedule });
            if (status.indexOf("IDLE") === 0) {
                getAllAM[i].children[3].style.backgroundColor = "Khaki";
            }
            if (status.indexOf("RUNNING") === 0) {
                getAllAM[i].children[3].style.backgroundColor = "lime";
            }
            if (status.indexOf("STUCK") === 0) {
                getAllAM[i].children[3].style.backgroundColor = "FireBrick";
            }
            if (lastStatus.indexOf("FAILED") === 0) {
                getAllAM[i].children[6].style.backgroundColor = "FireBrick";
            }
            if (lastStatus.indexOf("MISSED_SCHEDULE") === 0) {
                getAllAM[i].children[6].style.backgroundColor = "DEEPPINK";
            }
            if (lastStatus.indexOf("KILLED") === 0) {
                getAllAM[i].children[6].style.backgroundColor = "DarkViolet";
            }
            if (lastStatus.indexOf("SUCCEEDED") === 0) {
                getAllAM[i].children[6].style.backgroundColor = "Lime";
            }
            if (schedule.indexOf("willnotrun") === 0) {
                getAllAM[i].children[8].style.backgroundColor = "DimGray";
            }
        }
    }
}
}();