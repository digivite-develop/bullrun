"use client";
import { useState } from "react";


const nav = [
{ href: "#hero", label: "Home" },
{ href: "#contract", label: "Contract" },
{ href: "#tokenomics", label: "Tokenomics" },
{ href: "#roadmap", label: "Roadmap" },
{ href: "#faq", label: "FAQ" },
{ href: "#socials", label: "Socials" },
];


export default function Navbar() {
const [open, setOpen] = useState(false);
return (
<div className="sticky top-0 z-50 backdrop-blur bg-yellow-200/70 border-b border-black/10">
<div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
<a href="#hero" className="font-black tracking-wide">SiZi 2025</a>
{/* Desktop */}
<nav className="hidden md:flex items-center gap-6 text-sm">
{nav.map((n) => (
<a key={n.href} href={n.href} className="hover:underline">{n.label}</a>
))}
</nav>
<div className="hidden md:block">
<a href="#contract" className="rounded-full bg-green-600 px-5 py-2 text-white text-sm font-semibold shadow-[0_3px_0_#166534] active:translate-y-[1px]">Buy</a>
</div>
{/* Mobile */}
<button className="md:hidden rounded-xl border border-black/10 px-3 py-2" onClick={()=>setOpen(v=>!v)} aria-label="Toggle menu">☰</button>
</div>
{open && (
<div className="md:hidden border-t border-black/10 bg-yellow-100/80">
<div className="mx-auto max-w-6xl px-4 py-3 grid gap-2 text-sm">
{nav.map((n) => (
<a key={n.href} href={n.href} className="py-2" onClick={()=>setOpen(false)}>{n.label}</a>
))}
<a href="#contract" className="rounded-xl bg-green-600 px-4 py-2 text-white text-center font-semibold">Buy</a>
</div>
</div>
)}
</div>
);
}