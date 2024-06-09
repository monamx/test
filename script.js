// const puppeteer = require('puppeteer');

// (async () => {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto('https://example.com');
//     console.log('Page loaded');
//     await browser.close();
// })();

// const puppeteer = require('puppeteer');

// (async () => {
//   try {
//     const urls = [
//       "https://www.google.com/url?hl=en&q=https://www.ohang.eu.org/&source=gmail&ust=1717657654525000&usg=AOvVaw2bdDuZCDwwutjRXrMUANcq",
//       "https://www.google.com/url?hl=en&q=https://www.ohang.eu.org/&source=gmail&ust=1717657684549000&usg=AOvVaw0f-ZH2u1RPn-NqDIGOFQ4D",
//       "https://www.google.com/url?hl=en&q=https://www.ohang.eu.org/&source=gmail&ust=1717657710009000&usg=AOvVaw1HNAp-gQoHAXJ23b6YegrU",
//       "https://www.google.com/url?hl=en&q=https://www.ohang.eu.org/&source=gmail&ust=1717657738915000&usg=AOvVaw2mYCNBiuuYnpzKddUFBJe6"
//     ];

//     // Pilih URL secara acak
//     const randomIndex = Math.floor(Math.random() * urls.length);
//     const selectedUrl = urls[randomIndex];

//     // Luncurkan browser dalam mode headless
//     const browser = await puppeteer.launch({ headless: true });
//     const page = await browser.newPage();

//     // Buka URL yang dipilih
//     await page.goto(selectedUrl, {  waitUntil: 'networkidle2'});
//     console.log(`Halaman dimuat: ${selectedUrl}`);

//     const title = await page.title();
//     console.log(`Meta title halaman: ${title}`);

//     await page.evaluate(() => {
//       window.scrollBy(0, window.innerHeight);
//     });
//     console.log('Scroll halaman dilakukan');

//     await page.screenshot({ path: 'screenshot.png', fullPage: true });
//     console.log('Screenshot diambil setelah scroll');

//     const titles = await page.title();
//     console.log(`Meta titles halaman: ${titles}`);

//     const adsenseElements = await page.$('ins.adsbygoogle');
//     if (adsenseElements) {
//       console.log('Iklan AdSense dimuat di halaman.');
//       // Ambil semua iframe dalam elemen iklan AdSense
//       const iframes = await page.$$eval('ins.adsbygoogle iframe', iframes => iframes.map(iframe => iframe.src));

//       // Cari iframe yang memiliki domain yang diinginkan
//       const adUrls = iframes.filter(url => url.startsWith('https://www.googleadservices.com/pagead/aclk?'));

//       // Cetak URL iklan yang sesuai
//       adUrls.forEach((adUrl, index) => {
//         console.log(`URL iklan AdSense ${index + 1}: ${adUrl}`);
//       });
//     } else {
//       console.log('Tidak ada iklan AdSense yang dimuat di halaman.');
//     }

//     // Tunggu selama 2 menit (120000 milidetik)
//     // await page.waitForTimeout(120000);
//     await page.evaluate(() => {
//       return new Promise(resolve => setTimeout(resolve, 120000));
//     });

//     const adsenseElement = await page.$('ins.adsbygoogle');
//     if (adsenseElement) {
//       console.log('Iklan AdSense dimuat di halaman.');
//       // Ambil URL iklan AdSense
//       const adUrl = await page.evaluate(() => {
//         const iframeElement = document.querySelector('ins.adsbygoogle iframe');
//         return iframeElement ? iframeElement.getAttribute('src') : null;
//       });

//       console.log('URL iklan AdSense:', adUrl);
//     } else {
//       console.log('Tidak ada iklan AdSense yang dimuat di halaman.');
//     }

//     const titless = await page.title();
//     console.log(`Meta titless halaman: ${titless}`);

//     // Simulasi scroll
//     await page.evaluate(() => {
//       window.scrollBy(0, window.innerHeight);
//     });
//     console.log('Scroll halaman dilakukan');

//     // Tutup browser
//     await browser.close();
//     console.log('Browser ditutup');
//   } catch (error) {
//     console.error('Terjadi kesalahan:', error);
//   }
// })();













// const puppeteer = require('puppeteer');

// (async () => {
//   try {
//     const url = "https://ttsave.app/";
//     const tiktokUrl = "https://www.tiktok.com/@jeromepolin98/video/7349411581362474241";

//     const browser = await puppeteer.launch({ headless: true });
//     const page = await browser.newPage();

//     await page.goto(url, { waitUntil: 'networkidle2' });

//     await page.waitForXPath('//input[@id="input-query"]', { visible: true });
//     const input = await page.$x('//input[@id="input-query"]');
//     await input[0].type(tiktokUrl);

//     await Promise.all([
//       page.click('button[id="btn-download"]'),
//       page.waitForNavigation({ waitUntil: 'networkidle2' })
//     ]);

//     await page.waitForSelector('a[href^="https://v16.tiktokcdn.com/"]', { visible: true });

//     // Mengambil URL dari href elemen link download
//     const downloadUrl = await page.evaluate(() => {
//       const link = document.querySelector('a[href^="https://v16.tiktokcdn.com/"]');
//       return link ? link.href : null;
//     });

//     if (downloadUrl) {
//       console.log('URL Download:', downloadUrl);
//     } else {
//       console.log('Gagal menemukan URL download.');
//     }
    
//     await browser.close();
//   } catch (error) {
//     console.error('Terjadi kesalahan:', error);
//   }
// })();






const puppeteer = require('puppeteer');

(async () => {
  try {
    const url = "https://www.tiktok.com/explore";

    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto(url, { waitUntil: 'networkidle2' });
    const title = await page.title();
    console.log(`Meta title halaman: ${title}`);
} catch (error) {
    console.error('Terjadi kesalahan:', error);
  }
})();


