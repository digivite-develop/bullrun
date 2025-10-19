// ==========================
// File: components/Footer.tsx
// ==========================
"use client";
export default function Footer() {
return (
<footer className="px-4 py-10">
<div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-6 items-center">
<div className="mx-auto w-full max-w-[200px] rounded-2xl bg-black text-white py-3 grid place-items-center">
<span className="text-[11px] uppercase tracking-widest">BINANCE</span>
<span className="text-[9px] text-white/70">Global Experimental Market</span>
</div>
<p className="text-center md:text-right text-sm text-black/70">© {new Date().getFullYear()} SiZi 2025. All rights reserved.</p>
</div>
</footer>
);
}