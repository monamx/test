// const puppeteer = require('puppeteer');

// (async () => {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto('https://example.com');
//     console.log('Page loaded');
//     await browser.close();
// })();

const puppeteer = require('puppeteer');

(async () => {
  try {
    const urls = [
      "https://www.google.com/url?hl=en&q=https://www.ohang.eu.org/&source=gmail&ust=1717623826462000&usg=AOvVaw1MFtp9jSiVgY7WfWNNZkFF",
      "https://www.google.com/url?hl=en&q=https://www.ohang.eu.org/&source=gmail&ust=1717622711751000&usg=AOvVaw0r20bo07Hmu-xjQ1BvnvPa",
      "https://www.google.com/url?hl=en&q=https://www.ohang.eu.org/&source=gmail&ust=1717623857593000&usg=AOvVaw0MpUBTbqI-Eg8N9zW8_mrm"
    ];

    // Pilih URL secara acak
    const randomIndex = Math.floor(Math.random() * urls.length);
    const selectedUrl = urls[randomIndex];

    // Luncurkan browser dalam mode headless
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    // Buka URL yang dipilih
    await page.goto(selectedUrl, {  waitUntil: 'networkidle2'});
    console.log(`Halaman dimuat: ${selectedUrl}`);

    const title = await page.title();
    console.log(`Meta title halaman: ${title}`);

    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight);
    });
    console.log('Scroll halaman dilakukan');

    await page.screenshot({ path: 'screenshot.png', fullPage: true });
    console.log('Screenshot diambil setelah scroll');

    const titles = await page.title();
    console.log(`Meta titles halaman: ${titles}`);

    const adsenseElements = await page.$('ins.adsbygoogle');
    if (adsenseElements) {
      console.log('Iklan AdSense dimuat di halaman.');
      // Ambil URL iklan AdSense
      const adUrl = await page.evaluate(() => {
        const iframeElement = document.querySelector('ins.adsbygoogle iframe');
        return iframeElement ? iframeElement.getAttribute('src') : null;
      });

      console.log('URL iklan AdSense:', adUrl);
    } else {
      console.log('Tidak ada iklan AdSense yang dimuat di halaman.');
    }

    // Tunggu selama 2 menit (120000 milidetik)
    // await page.waitForTimeout(120000);
    await page.evaluate(() => {
      return new Promise(resolve => setTimeout(resolve, 120000));
    });

    const adsenseElement = await page.$('ins.adsbygoogle');
    if (adsenseElement) {
      console.log('Iklan AdSense dimuat di halaman.');
      // Ambil URL iklan AdSense
      const adUrl = await page.evaluate(() => {
        const iframeElement = document.querySelector('ins.adsbygoogle iframe');
        return iframeElement ? iframeElement.getAttribute('src') : null;
      });

      console.log('URL iklan AdSense:', adUrl);
    } else {
      console.log('Tidak ada iklan AdSense yang dimuat di halaman.');
    }

    const titless = await page.title();
    console.log(`Meta titless halaman: ${titless}`);

    // Simulasi scroll
    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight);
    });
    console.log('Scroll halaman dilakukan');

    // Tutup browser
    await browser.close();
    console.log('Browser ditutup');
  } catch (error) {
    console.error('Terjadi kesalahan:', error);
  }
})();
