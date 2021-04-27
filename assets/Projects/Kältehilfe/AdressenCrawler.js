// https://www.kaeltehilfe-berlin.de/Angebote/Kaeltehilfe_angebot.php
var angebote = document.querySelector(".angebote");
angebote = angebote.children;
for(let i = 0; i < angebote.length; i++){
    console.log("#########################################");
    //console.log(angebote[i].textContent);
    console.log(angebote[i].attributes.id);
    let details = angebote[i].children;
    console.log("### Details:");
    for(let j=0;j<details.length; j++){
        console.log(details[j].textContent);
    }
}

var angebote = document.querySelector(".angebote");
angebote = angebote.children;
let adressObj = {};
let cachedValue ="";
for(let i = 0; i < angebote.length; i++){
    if(angebote[i].attributes.id.value.includes("aufgeklappt")){
        adressObj[cachedValue].details = {
            specials: angebote[i].children[0].textContent,
            field1: angebote[i].children[1].textContent,
            field2: {
                contact: angebote[i].children[2].children[0].textContent,
                tel: angebote[i].children[2].children[1].textContent,
            },
            field3: angebote[i].children[3].textContent,
            field4: angebote[i].children[4].textContent,
        }
    }else{
        adressObj[angebote[i].attributes.id.value] = {
            name: angebote[i].children[0].textContent,
            traeger: angebote[i].children[1].textContent,
            kategorie: angebote[i].children[3].textContent,
            wochentag: angebote[i].children[4].textContent,
            details: "",
        }
        cachedValue = angebote[i].attributes.id.value;
    }
}

console.log(adressObj);



//** Nex Try with some functional approach */
var angebote = document.querySelector(".angebote");
angebote = angebote.children;
let adressObj = {};
let cachedValue ="";

function uniq(a) {
    var seen = {};
    return a.filter(function(item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
}

function docToJsonMain(dataNode){
    json = {};
    for(let i=0; i < dataNode.length ; i++){
        let data = [];
        data.push(dataNode[i].textContent);
        if(dataNode[i].children.length > 1){
            for(let j = 0; j < dataNode[i].children.length ; j++){
                if(dataNode[i].children[j].id, dataNode[i].children[j].textContent != ""){
                    data.push(dataNode[i].children[j].textContent);
                }
            }
        }
        data = uniq(data);
        json[dataNode[i].attributes.class.value] = data;
    }
    return json;
}

function docToJsonDetails(dataNode){
    json = {};
    for(let i=0; i < dataNode.length ; i++){
        let data = [];
        if(dataNode[i].children.length > 1){
            for(let j = 0; j < dataNode[i].children.length ; j++){
                if(dataNode[i].children[j].attributes.class.value == "heading"){
                    data.push(dataNode[i].children[j].textContent);
                }else if(dataNode[i].children[j].attributes.class.value == "special"){
                    data.push("special");
                    data.push(dataNode[i].children[j].textContent);
                }else{
                    data.push(dataNode[i].children[j].textContent);
                }
            }
            data = uniq(data);
            json[data[0]] = {data};
        }
    }
    return json;
}

for(let i = 0; i < angebote.length; i++){
    if(angebote[i].attributes.id.value.includes("aufgeklappt")){
        adressObj[cachedValue].details = docToJsonDetails(angebote[i].children);
    }else{
        adressObj[angebote[i].attributes.id.value] = docToJsonMain(angebote[i].children);
        cachedValue = angebote[i].attributes.id.value;
    }
}

console.log(adressObj);