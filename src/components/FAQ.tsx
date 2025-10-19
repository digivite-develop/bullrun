

// ==========================
// File: components/FAQ.tsx
// ==========================
"use client";
import Section from "./Section";


const faqs = [
{ q: "Где купить токен?", a: "Ссылка на DEX в секции Smart Contract. Позже добавим CEX." },
{ q: "Есть ли налоги?", a: "По умолчанию 0/0 — можно изменить в контракте и отобразить здесь." },
{ q: "Audits / KYC?", a: "Планируем аудит после листингов. Ссылки добавим здесь." },
];


export default function FAQ() {
return (
<Section id="faq" className="px-4 py-14 md:py-16">
<div className="mx-auto max-w-4xl">
<h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">FAQ</h2>
<div className="mt-6 divide-y divide-black/10 rounded-2xl border border-black/10 bg-white/70 backdrop-blur">
{faqs.map((f, i) => (
<details key={i} className="group px-5 py-4">
<summary className="cursor-pointer font-semibold list-none flex items-center justify-between">{f.q}<span>+</span></summary>
<p className="mt-2 text-sm text-black/80">{f.a}</p>
</details>
))}
</div>
</div>
</Section>
);
}