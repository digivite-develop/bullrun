// ==========================
// File: components/Contract.tsx
// ==========================
"use client";
import { motion } from "framer-motion";
import Section from "./Section";
import { fadeUp } from "@/lib/variants";


export default function Contract() {
const address = "0xYOURCONTRACTADDRESS0000000000000000000";
return (
<Section id="contract" className="px-4 py-12 md:py-16 bg-orange-300/40 border-y border-black/10">
<div className="mx-auto max-w-6xl grid lg:grid-cols-[1.2fr_1fr] gap-8 md:gap-10 items-center">
<motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
<h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">Smart Contract</h2>
<p className="mt-3 text-black/80">Вставь реальный адрес контракта. Кнопка копирует в буфер. Быстрые ссылки ниже.</p>
<div className="mt-5 flex flex-col sm:flex-row gap-3">
<div className="flex-1 rounded-xl border border-black/10 bg-white p-3 text-sm font-mono break-all">{address}</div>
<button className="rounded-xl px-4 py-3 bg-black text-white text-sm" onClick={() => navigator.clipboard.writeText(address)}>Copy</button>
</div>
<div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
<a className="underline" href="#">View on Explorer</a>
<span>•</span>
<a className="underline" href="#">Trade on DEX</a>
<span>•</span>
<a className="underline" href="#">Add to Wallet</a>
</div>
</motion.div>


<motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="rounded-3xl bg-white/70 backdrop-blur p-6 border border-black/10 shadow-sm">
<h3 className="font-bold">Key Facts</h3>
<ul className="mt-3 space-y-2 text-sm">
<li>Chain: <b>Ethereum</b> (замени при необходимости)</li>
<li>Ticker: <b>SIZI</b></li>
<li>Supply: <b>1,000,000,000</b></li>
<li>Taxes: <b>0% / 0%</b></li>
</ul>
</motion.div>
</div>
</Section>
);
}