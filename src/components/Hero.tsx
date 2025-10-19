// ==========================
// File: components/Hero.tsx
// ==========================
"use client";
import { motion } from "framer-motion";
import Section from "./Section";
import { fadeUp } from "@/lib/variants";


export default function Hero() {
return (
<Section id="hero" className="px-4">
<div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-10 items-center py-10 md:py-14">
<motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
<h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">Bullrun SiZi 2025 ( IZI )</h1>
<p className="mt-2 text-xs sm:text-sm uppercase tracking-wider">Pioneering the Next Era of Memeic Finance</p>
<p className="mt-5 max-w-prose text-base sm:text-lg">Born from the confluence of bullish market sentiment and raw internet magic, SiZi represents more than just a digital asset; it embodies resilience and the relentless pursuit of prosperity.</p>
<div className="mt-6 flex flex-wrap gap-3">
<a href="#contract" className="rounded-full bg-green-600 px-6 py-3 text-white font-semibold shadow-[0_4px_0_#166534] active:translate-y-[2px]">Smart contract</a>
<a href="#tokenomics" className="rounded-full bg-black/80 text-white px-6 py-3 font-semibold">Tokenomics</a>
</div>
</motion.div>


{/* Mockup card */}
<motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mx-auto w-full max-w-[420px] rounded-3xl shadow-2xl overflow-hidden border border-black/10 bg-gradient-to-b from-yellow-200 to-orange-300">
<div className="px-6 pt-6 pb-3 text-center">
<h3 className="text-lg sm:text-xl font-black">Preview</h3>
</div>
<div className="px-6">
<div className="aspect-[16/10] w-full rounded-xl border border-black/20 bg-black/80 grid place-items-center">
<span className="text-white/80 text-sm">Hero Image / Video</span>
</div>
<div className="mt-3 rounded-lg border border-black/30 bg-yellow-100 p-3 text-[11px] leading-[1.1rem]">
<p className="text-center font-medium">Bullrun SiZi 2025 is poised to redefine the memecoin landscape.</p>
<p className="mt-2">SiZi represents more than just a digital asset; it embodies resilience and the relentless pursuit of prosperity.</p>
</div>
<div className="mt-4 flex items-center justify-center">
<a href="#contract" className="inline-flex items-center justify-center rounded-full bg-green-600 px-8 py-3 text-white text-sm font-semibold shadow-[0_4px_0_#166534] active:translate-y-[2px]">Smart contract</a>
</div>
<div className="px-6 mt-6 mb-8">
<div className="mx-auto w-full max-w-[180px] rounded-2xl bg-black text-white py-3 grid place-items-center">
<span className="text-[11px] uppercase tracking-widest">BINANCE</span>
<span className="text-[9px] text-white/70">Global Experimental Market</span>
</div>
</div>
</div>
</motion.div>
</div>
</Section>
);
}