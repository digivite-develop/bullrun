// ==========================
// File: components/Section.tsx
// ==========================
"use client";
import { ReactNode } from "react";


export default function Section({ id, children, className = "" }: { id: string; children: ReactNode; className?: string }) {
return (
<section id={id} className={`scroll-mt-24 ${className}`}>{children}</section>
);
}