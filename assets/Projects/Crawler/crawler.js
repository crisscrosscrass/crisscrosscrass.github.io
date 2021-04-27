const puppeteer = require('puppeteer');
const { spawnSync } = require('child_process');

async function crawlPage(url, xpath) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    // desctructuring by extracting first item from array
    await page.waitForXPath(xpath,xpath2);
    const [el] = await page.$x(xpath);
    const src = await el.getProperty('src');
    const srcTxt = await src.jsonValue();

    const [el2] = await page.$x(xpath2);
    const src2 = await el2.getProperty('innerText');
    const src2Txt = await src2.jsonValue();

    console.log(new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" }),"\n Check Sony PlayStation 5: \n",srcTxt,{src2Txt});

    var text =  'Derzeit nicht verfügbar.\n' +
    '\n' +
    'Ob und wann dieser Artikel wieder vorrätig sein wird, ist unbekannt.';

    if(text != src2Txt){
        spawnSync("powershell.exe", [`Add-Type -AssemblyName PresentationCore,PresentationFramework;[System.Windows.MessageBox]::Show('${src2Txt}');`]);
    }

    await browser.close();
}

async function checkStatusPage(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const response = await page.goto(url);
    console.log(response.headers());
    await browser.close();
}

// //*[@id="landingImage"]

var url = 'https://www.amazon.de/Sony-Interactive-Entertainment-PlayStation-5/dp/B08H93ZRK9/ref=sr_1_3?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=ps5&qid=1617696445&sr=8-3';
var xpath = '//*[@id="landingImage"]';
var xpath2 = '//*[@id="availability_feature_div"]';


setInterval(function() {
    var date = new Date();
    if ( date.getSeconds() === 0 ) {
        crawlPage(url, xpath,xpath2);
    }
  }, 1000);


//   spawnSync("powershell.exe", [`
//   Add-Type -AssemblyName PresentationCore,PresentationFramework;
//   [System.Windows.MessageBox]::Show('Hellooooo');
//   `]);

// url = 'https://employeecmsdemo.herokuapp.com/'
//checkStatusPage(url);