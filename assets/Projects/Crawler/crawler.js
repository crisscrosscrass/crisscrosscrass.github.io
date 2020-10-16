const puppeteer = require('puppeteer');

async function crawlPage(url, xpath) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    // desctructuring by extracting first item from array
    await page.waitForXPath(xpath);
    const [el] = await page.$x(xpath);
    const src = await el.getProperty('src');
    const srcTxt = await src.jsonValue();

    console.log({ srcTxt });
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

var url = 'https://www.amazon.de/Star-Wars-Aufstieg-Skywalkers-Blu-ray/dp/B082TDT3RJ?ref_=Oct_s9_apbd_orecs_hd_bw_b1Bww&pf_rd_r=4RZMFE94PWAZR1Z7EG33&pf_rd_p=f180e3b2-0390-50fb-a6a1-baa746b71eae&pf_rd_s=merchandised-search-10&pf_rd_t=BROWSE&pf_rd_i=284266';
var xpath = '//*[@id="landingImage"]';

// crawlPage(url, xpath);
url = 'https://employeecmsdemo.herokuapp.com/'
checkStatusPage(url);