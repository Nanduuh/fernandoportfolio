import sharp from "sharp";

const photo = "assets/source/fernando.png";

await sharp(photo)
  .resize({ width: 1200, height: 1200, fit: "cover", position: "centre" })
  .webp({ quality: 82 })
  .toFile("public/images/fernando.webp");

const ogPhotoCut = await sharp(photo)
  .resize({ width: 760, height: 760, fit: "cover", position: "centre" })
  .png()
  .toBuffer();

const ogSvg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1200" y2="630">
      <stop stop-color="#071610"/>
      <stop offset="0.55" stop-color="#080D15"/>
      <stop offset="1" stop-color="#160B12"/>
    </linearGradient>
    <pattern id="grid" width="42" height="42" patternUnits="userSpaceOnUse">
      <path d="M42 0H0V42" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#grid)" opacity="0.65"/>
  <rect x="64" y="64" width="72" height="72" rx="12" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.18)"/>
  <text x="87" y="109" fill="#4FE3C1" font-family="Arial, sans-serif" font-size="25" font-weight="800">FS</text>
  <text x="64" y="206" fill="#F2C66D" font-family="Arial, sans-serif" font-size="19" font-weight="800" letter-spacing="4">PORTFOLIO PESSOAL</text>
  <text x="64" y="295" fill="#F7FBFF" font-family="Arial, sans-serif" font-size="66" font-weight="900">Fernando Soares</text>
  <text x="64" y="362" fill="#4FE3C1" font-family="Arial, sans-serif" font-size="45" font-weight="900">Desenvolvedor Web</text>
  <text x="64" y="414" fill="#4FE3C1" font-family="Arial, sans-serif" font-size="45" font-weight="900">&amp; Tecnologia</text>
  <text x="68" y="478" fill="#A9B6C7" font-family="Arial, sans-serif" font-size="25">Web, automação, VBA, JavaScript e projetos reais.</text>
  <rect x="64" y="526" width="440" height="54" rx="10" fill="#4FE3C1"/>
  <text x="88" y="561" fill="#02110E" font-family="Arial, sans-serif" font-size="21" font-weight="900">fernandoportfolio-eight.vercel.app</text>
  <rect x="736" y="56" width="388" height="518" rx="18" fill="rgba(255,255,255,0.08)" stroke="#4FE3C1"/>
</svg>`;

const ogBase = await sharp(Buffer.from(ogSvg)).png().toBuffer();
const ogPhoto = await sharp(ogPhotoCut)
  .resize({ width: 356, height: 486, fit: "cover", position: "centre" })
  .png()
  .toBuffer();

await sharp(ogBase)
  .composite([{ input: ogPhoto, left: 752, top: 72 }])
  .jpeg({ quality: 86 })
  .toFile("public/og-image.jpg");

const iconSvg = `
<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" rx="92" fill="#080D15"/>
  <rect x="38" y="38" width="436" height="436" rx="72" fill="rgba(255,255,255,0.05)" stroke="#4FE3C1" stroke-width="10"/>
  <path d="M139 145H332V200H203V256H313V309H203V377H139V145Z" fill="#F7FBFF"/>
  <path d="M326 377C302 377 281 371 262 358L286 310C299 319 313 324 328 324C343 324 351 319 351 309C351 301 345 296 332 293L306 287C277 280 263 261 263 232C263 203 286 181 328 181C351 181 373 187 393 198L371 244C358 237 345 233 331 233C319 233 313 237 313 246C313 253 319 258 332 261L358 267C389 274 405 293 405 323C405 356 379 377 326 377Z" fill="#4FE3C1"/>
</svg>`;

await sharp(Buffer.from(iconSvg)).png().toFile("public/icon-512.png");
await sharp(Buffer.from(iconSvg)).resize(192, 192).png().toFile("public/icon-192.png");
