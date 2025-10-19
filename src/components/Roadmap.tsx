// ==========================
// File: components/Roadmap.tsx
// ==========================
"use client";
import { motion } from "framer-motion";
import Section from "./Section";
import { fadeUp } from "@/lib/variants";


const phases = [
{ q: "Q4 2024", items: ["Launch website & socials", "Fair launch", "LP lock & audit"] },
{ q: "Q1 2025", items: ["DEX/CMC listings", "Meme campaign", "Staking beta"] },
{ q: "Q2 2025", items: ["CEX listing", "Merch + IRL events", "Governance v1"] },
];


export default function Roadmap() {
return (
<Section id="roadmap" className="px-4 py-14 md:py-16 bg-orange-300/40 border-y border-black/10">
<div className="mx-auto max-w-6xl">
<motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-2xl sm:text-3xl md:text-4xl font-extrabold">Roadmap</motion.h2>
<div className="mt-6 md:mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
{phases.map((r) => (
<motion.div key={r.q} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="rounded-2xl bg-white/70 backdrop-blur border border-black/10 p-6 shadow-sm">
<h3 className="text-lg md:text-xl font-bold">{r.q}</h3>
<ul className="mt-3 space-y-2 text-sm list-disc list-inside">
{r.items.map((it) => <li key={it}>{it}</li>)}
</ul>
</motion.div>
))}
</div>
</div>
</Section>
);
}