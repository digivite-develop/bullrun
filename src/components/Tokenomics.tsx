// ==========================
// File: components/Tokenomics.tsx
// ==========================
"use client";
import { motion } from "framer-motion";
import Section from "./Section";
import { fadeUp } from "@/lib/variants";


const cards = [
{ t: "Liquidity", p: "45%", d: "Initial LP + burns" },
{ t: "Community", p: "35%", d: "Airdrops & incentives" },
{ t: "Treasury", p: "15%", d: "CEX, partnerships" },
];


export default function Tokenomics() {
return (
<Section id="tokenomics" className="px-4 py-14 md:py-16">
<div className="mx-auto max-w-6xl">
<motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-2xl sm:text-3xl md:text-4xl font-extrabold">Tokenomics</motion.h2>
<div className="mt-6 md:mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
{cards.map((b) => (
<motion.div key={b.t} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="rounded-2xl bg-white/70 backdrop-blur border border-black/10 p-6 text-center shadow-sm">
<p className="text-3xl md:text-4xl font-black">{b.p}</p>
<p className="mt-2 font-bold">{b.t}</p>
<p className="text-sm text-black/70 mt-1">{b.d}</p>
</motion.div>
))}
</div>
</div>
</Section>
);
}