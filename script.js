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
      "https://www.google.com/url?hl=en&q=https://www.ohang.eu.org/?source=gmail&ust=1717516869982000&usg=AOvVaw2zMKfnPXKIVQ2fLZ-kMwvu",
      "https://www.google.com/url?hl=en&q=https://www.ohang.eu.org/&source=gmail&ust=1717622711751000&usg=AOvVaw0r20bo07Hmu-xjQ1BvnvPa",
      "https://www.google.com/url?hl=en&q=https://www.ohang.eu.org/?source=gmail&ust=1717516942098000&usg=AOvVaw1jgXacVUXL9acWDF2WgnFn",
      "https://www.google.com/url?hl=en&q=https://www.ohang.eu.org/?source=gmail&ust=1717516971756000&usg=AOvVaw2O8f5SLVZ34kNowcbBuzH7",
      "https://www.google.com/url?hl=en&q=https://www.ohang.eu.org/?source=gmail&ust=1717516993947000&usg=AOvVaw1DER8_2JuMdStoLC5I4TKD",
      "https://www.google.com/url?hl=en&q=https://www.ohang.eu.org/?source=gmail&ust=1717517014007000&usg=AOvVaw0OkOqJdHs3E6bpaTE6AXfE"
    ];

    // Pilih URL secara acak
    const randomIndex = Math.floor(Math.random() * urls.length);
    const selectedUrl = urls[randomIndex];
    console.log(`Membuka URL: ${selectedUrl}`);

    // Luncurkan browser dalam mode headless
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    // Buka URL yang dipilih
    await page.goto(selectedUrl, {  waitUntil: 'networkidle2'});
    console.log(`Halaman dimuat: ${selectedUrl}`);

    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight);
    });
    console.log('Scroll halaman dilakukan');

    // Tunggu selama 2 menit (120000 milidetik)
    // await page.waitForTimeout(120000);
    await page.evaluate(() => {
      return new Promise(resolve => setTimeout(resolve, 120000));
    });

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
