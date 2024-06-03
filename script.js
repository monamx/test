const puppeteer = require('puppeteer');

(async () => {
  const urls = [
    "https://www.ohang.eu.org/?source=gmail&ust=1717516869982000&usg=AOvVaw2zMKfnPXKIVQ2fLZ-kMwvu",
    "https://www.ohang.eu.org/?source=gmail&ust=1717516942098000&usg=AOvVaw1jgXacVUXL9acWDF2WgnFn",
    "https://www.ohang.eu.org/?source=gmail&ust=1717516971756000&usg=AOvVaw2O8f5SLVZ34kNowcbBuzH7",
    "https://www.ohang.eu.org/?source=gmail&ust=1717516993947000&usg=AOvVaw1DER8_2JuMdStoLC5I4TKD",
    "https://www.ohang.eu.org/?source=gmail&ust=1717517014007000&usg=AOvVaw0OkOqJdHs3E6bpaTE6AXfE"
  ];

  // Pilih URL secara acak
  const randomIndex = Math.floor(Math.random() * urls.length);
  const selectedUrl = urls[randomIndex];

  // Luncurkan browser
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Buka URL yang dipilih
  await page.goto(selectedUrl);

  // Tunggu selama 2 menit (120000 milidetik)
  await page.waitForTimeout(120000);

  // Simulasi scroll
  await page.evaluate(() => {
    window.scrollBy(0, window.innerHeight);
  });

  // Tutup browser
  await browser.close();
})();
