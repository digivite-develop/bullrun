"use client";
import Image from "next/image";
import { Press_Start_2P } from "next/font/google";

const press = Press_Start_2P({ subsets: ["latin"], weight: "400" });
import { Bangers } from "next/font/google";
const bangers = Bangers({ subsets: ["latin"], weight: "400" });

export default function MockPage() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-yellow-200 via-yellow-300 to-orange-400 text-black">
      {/* контейнер без рамок: широкий на ПК, с паддингами на мобилке */}
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 md:px-8 mb-0">

        {/* Header */}
        <header className="text-center">
          <h1 className={`${press.className} uppercase text-[4vw] md:text-[36px] leading-tight text-black pt-10`}>
            Bullrun SiZi （ IZI ）
          </h1>
          <p className={`${press.className} uppercase mt-3 text-[12px] md:text-[14px] text-black`}>
            Pioneering the Next Era of Memetic Finance
          </p>
        </header>
</div>
        {/* Hero image – широкая, без внешней карты */}
        <div className="mt-6 md:mt-8">
          <div className="relative mx-auto w-full aspect-[16/9] overflow-hidden border border-black/20">
            <Image src="/hero.png" alt="Hero" fill className="object-cover" />
          </div>
        </div>
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 md:px-8 mb-0">

        {/* Текстовый блок */}
        <div className="mt-6 md:mt-8">
          <div className="mx-auto max-w-[980px] px-4 sm:px-6 py-4">
            <p className={`${press.className} uppercase font-bold text-[12px] sm:text-[13px] md:text-[14px] leading-5 md:leading-6 text-center`}>
              Bullrun Sizizi 2025 is poised to redefine the memecoin landscape.<br/>
              Born from the confluence of bullish market<br/>
              sentiment and an intriguing legacy,<br/>
              SiZiZi represents more than just a digital asset;<br/>
              it embodies resilience and<br/>
              the relentless pursuit of prosperity.
            </p>
          </div>
        </div>
</div>
        {/* Smart contract – во всю ширину контейнера */}
        <section id="contract" className="mt-6 md:mt-8 mb-6">
          <div className="mx-auto ounded-md bg-[#3E944F] p-4 sm:p-5 shadow-inner">
            <p className={`${press.className} uppercase text-white text-[18px] md:text-[22px] text-center`}>
              Smart contract
            </p>
            <div className="mt-3 mx-auto h-6 md:h-8 w-[92%] max-w-[860px] rounded-full bg-white/95" />
          </div>
        </section>

        


{/* Meme Rush section */}
<section className="w-full bg-black text-white ">
  <div className="mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-16 max-w-[1400px]">
    {/* Text side */}
    <div className="flex-1 text-center md:text-left space-y-5">
      {/* Binance Wallet title */}
      <div className="flex items-center justify-center md:justify-start gap-3">
        <Image
          src="/binance-w.png"
          alt="Binance logo"
          width={150}
          height={40}
          style={{ height: "auto" }}
        />
        <h3 className="text-white text-lg md:text-xl font-semibold tracking-wide">
           WALLET
        </h3>
      </div>

      {/* Introducing Meme Rush */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
        INTRODUCING <br />
        <span className="text-yellow-400">MEME RUSH</span>
      </h2>

      {/* Button */}
      <div className="pt-4">
        <button
          className="hover:cursor-pointer inline-block bg-yellow-400 text-black font-bold px-6 py-3 rounded-full text-sm sm:text-base md:text-lg hover:bg-yellow-300 transition-colors"
          onClick={() => window.open('https://www.binance.com/ru/binancewallet', '_blank')}
        >
          BINANCE WALLET EXCLUSIVE
        </button>
      </div>
    </div>

    {/* Image stack */}
    <div className="flex-1 flex justify-center md:justify-end">
      <div className="relative w-[260px] sm:w-[320px] md:w-[420px] aspect-[4/5]">
        <Image
          src="/meme-stack.png"
          alt="Meme Rush Stack"
          fill
          className="object-contain"
        />
      </div>
    </div>
  </div>
</section>
        {/* Bull Run 2025? */}
<section className="w-full bg-black text-white">
  <div className="mx-auto flex flex-col items-center">
    {/* постер */}
    <div className="relative w-full aspect-[9/16] md:aspect-[5/8] overflow-hidden shadow-[0_18px_60px_rgba(0,0,0,0.55)]">
      {/* фон */}
      <div className="absolute inset-0 bg-black" />

      {/* ОРАНЖЕВАЯ МОЛНИЯ (адаптивный clip-path) */}
      {/* mobile */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-yellow-300 via-orange-400 to-orange-700 md:hidden"
        style={{
          clipPath:
            "polygon(-20% 0%, 120% 0%, 56% 50%, 100% 100%, 0% 100%, 30% 68%, 12% 56%, 38% 40%)",
        }}
      />
      {/* desktop */}
      <div
        className="absolute inset-0 hidden md:block bg-gradient-to-b from-yellow-300 via-orange-400 to-orange-700"
        style={{
          clipPath:
            "polygon(-20% 0%, 120% 0%, 57% 60%, 100% 100%, 0% 100%, 34% 77%, 15% 65%, 40% 46%)",
        }}
      />

      {/* заголовок */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[92%] text-center">
  <h2
    className={`${bangers.className} font-extrabold leading-[0.95]`}
    style={{
      fontSize: "clamp(3.2rem, 10vw, 8.6rem)",
      letterSpacing: "0.5px",
      // яркая комикс-тень (жёлтая, без размытия)
      textShadow:
        "rgba(0, 0,0, 0.3) -5px 5px 5px",
    }}
  >
    BULL RUN 2025? <br/> NO YOU DIDN’T
  </h2>
  
</div>

      {/* токены */}
      <Image
        src="/memes/token_10.png"
        alt="meme-1"
        width={170}
  height={170}
        sizes="(max-width: 768px) 140px, 170px"
        className="absolute left-[23%] top-[18%] md:left-[20%] md:top-[16%] w-[22vw] md:w-[18vw] h-auto drop-shadow-[0_8px_14px_rgba(0,0,0,0.45)]"
        priority
      />
      <Image
        src="/memes/token_20.png"
        alt="meme-2"
        width={180}
        height={180}
        sizes="(max-width: 768px) 150px, 180px"
        className="absolute right-[19%] top-[16%]  w-[22vw] md:w-[18vw] md:right-[25%] md:top-[14%] drop-shadow-[0_8px_14px_rgba(0,0,0,0.45)]"
      />
      <Image
        src="/memes/token_12.png"
        alt="meme-3"
        width={190}
        height={190}
        sizes="(max-width: 768px) 160px, 190px"
        className="absolute left-1/2 top-[30%] w-[22vw] md:w-[19vw]  md:top-[26%] -translate-x-1/2 drop-shadow-[0_8px_14px_rgba(0,0,0,0.45)]"
      />
      <Image
        src="/memes/token_14.png"
        alt="meme-rocket"
        width={190}
        height={190}
        sizes="(max-width: 768px) 160px, 190px"
        className="absolute left-[43%] top-[50%] w-[22vw] md:w-[18vw] md:left-[50%] md:top-[46%] -translate-x-1/2 drop-shadow-[0_8px_14px_rgba(0,0,0,0.45)]"
      />
      <Image
        src="/memes/token_16.png"
        alt="meme-cat"
        width={175}
        height={175}
        sizes="(max-width: 768px) 150px, 175px"
        className="absolute left-[43%] top-[65%] w-[22vw] md:w-[18vw] md:left-[43%] md:top-[64%] -translate-x-1/2 drop-shadow-[0_8px_14px_rgba(0,0,0,0.45)]"
      />

      {/* логотип binance */}
      
        <Image
        src="/memes/binance_lg.png"
        alt="binance"
        width={175}
        height={175}
        sizes="(max-width: 768px) 150px, 175px"
        className="absolute left-0 right-0 m-auto top-[78%] w-[17vw] md:w-[18vw]  md:top-[78%] drop-shadow-[0_8px_14px_rgba(0,0,0,0.45)]"
      />
      <div className="text-black m-auto text-center absolute left-0 right-0 top-[90%] md:top-[90%]">
        <p className="text-[3.5vw]">Our goal is with you our witout you</p>
        <h4 className="font-bold text-[7vw]">BINANCE <strong className="text-white">ALPHA</strong></h4>
      </div>
    </div>
  </div>
</section>



        
{/* <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 md:px-8">
        
        <footer className="mt-10 md:mt-14 pb-12 text-center">
          <Image
            src="/binance-alpha.png"
            alt="Binance Alpha"
            width={280}
            height={42}
            className="mx-auto md:w-[340px] md:h-auto"
          />
        </footer>
      </div> */}
    </main>
  );
}
