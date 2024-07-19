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

const PINTEREST_EMAIL = 'qONU5fQ@instasave.biz.id';
const PINTEREST_PASSWORD = 'Muntakul1967#';

(async () => {
    const url = "https://www.pinterest.com/login/";

    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto(url, { waitUntil: 'networkidle2' });
    const title = await page.title();
    console.log(`Meta title halaman: ${title}`);

    // Input email dan password
    await page.waitForSelector('input[name="id"]');
    await page.type('input[name="id"]', PINTEREST_EMAIL);
    await page.type('input[name="password"]', PINTEREST_PASSWORD);

    // Ambil nilai dari input email dan password untuk memeriksa apakah input berhasil
    const emailValue = await page.$eval('input[name="id"]', el => el.value);
    const passwordValue = await page.$eval('input[name="password"]', el => el.value);

    if (emailValue === PINTEREST_EMAIL && passwordValue === PINTEREST_PASSWORD) {
        console.log('Input email dan password berhasil.');
    } else {
        console.log('Input email atau password gagal.');
    }

    await browser.close();
})();







// const puppeteer = require('puppeteer');

// const PINTEREST_EMAIL = 'qONU5fQ@instasave.biz.id';
// const PINTEREST_PASSWORD = 'Muntakul1967#';
// const PIN_IMAGE_PATH = '/path/to/your/image.jpg';
// const PIN_TITLE = 'Judul Pin Anda';
// const PIN_DESCRIPTION = 'Deskripsi Pin Anda';
// const PIN_URL = 'https://example.com';

// async function uploadPin() {
//   const browser = await puppeteer.launch({ headless: false }); // Ganti ke false untuk melihat browser
//   const page = await browser.newPage();
  
//   // Buka Pinterest dan login
//   await page.goto('https://www.pinterest.com/login/');
//   await page.waitForSelector('input[name="id"]');
//   await page.type('input[name="id"]', PINTEREST_EMAIL);
//   await page.type('input[name="password"]', PINTEREST_PASSWORD);

//   // Tambahkan sedikit penundaan sebelum submit
//   await page.waitForTimeout(2000);

//   await page.click('button[type="submit"]');
//   await page.waitForNavigation();

//   // Periksa apakah login berhasil dengan memeriksa elemen tertentu di halaman setelah login
//   const loginSuccess = await page.evaluate(() => {
//     return document.querySelector('div[data-test-id="searchBar"]') !== null;
//   });

//   if (!loginSuccess) {
//     console.log('Login gagal. Periksa kembali email dan password Anda.');

//     // Tampilkan pesan kesalahan dari halaman
//     const errorMessage = await page.evaluate(() => {
//       const errorElement = document.querySelector('div[data-test-id="error-message"]');
//       return errorElement ? errorElement.innerText : 'Tidak ada pesan kesalahan yang ditemukan';
//     });

//     console.log('Pesan kesalahan dari halaman:', errorMessage);

//     await browser.close();
//     return;
//   }

//   console.log('Login berhasil.');

//   // Arahkan ke halaman upload pin
//   await page.goto('https://www.pinterest.com/pin-builder/');
//   await page.waitForSelector('input[type="file"]');

//   // Unggah gambar
//   const [fileChooser] = await Promise.all([
//     page.waitForFileChooser(),
//     page.click('input[type="file"]')
//   ]);
//   await fileChooser.accept([PIN_IMAGE_PATH]);

//   // Tunggu sampai gambar terupload
//   await page.waitForTimeout(5000);

//   // Masukkan judul dan deskripsi
//   await page.type('input[name="title"]', PIN_TITLE);
//   await page.type('textarea[name="description"]', PIN_DESCRIPTION);

//   // Masukkan URL pin
//   await page.type('input[name="link"]', PIN_URL);

//   // Klik tombol Save
//   await page.click('button[data-test="save"]');
//   await page.waitForNavigation();

//   console.log('Pin berhasil diupload');

//   await browser.close();
// }

// uploadPin().catch(error => {
//   console.error('Terjadi kesalahan:', error);
// });

