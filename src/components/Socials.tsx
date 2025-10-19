// ==========================
// File: components/Socials.tsx
// ==========================
"use client";
import Section from "./Section";


const socials = [
{ l: "Telegram", h: "#" },
{ l: "X / Twitter", h: "#" },
{ l: "Discord", h: "#" },
{ l: "Gitbook", h: "#" },
];


export default function Socials() {
return (
<Section id="socials" className="px-4 py-14 md:py-16 bg-orange-300/40 border-y border-black/10">
<div className="mx-auto max-w-6xl text-center">
<h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">Join the Community</h2>
<div className="mt-6 flex flex-wrap items-center justify-center gap-3">
{socials.map((s) => (
<a key={s.l} href={s.h} className="rounded-full bg-black text-white px-5 py-3 text-sm font-semibold">{s.l}</a>
))}
</div>
</div>
</Section>
);
}