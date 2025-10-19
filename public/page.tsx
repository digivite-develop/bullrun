import Image from "next/image";
import Hero from "@/components/Hero";
import Contract from "@/components/Contract";
import Tokenomics from "@/components/Tokenomics";
import Roadmap from "@/components/Roadmap";
import FAQ from "@/components/FAQ";
import Socials from "@/components/Socials";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
<main className="min-h-screen w-full bg-gradient-to-b from-yellow-200 via-yellow-300 to-orange-400 text-black">
<Navbar />
{/* Decorative background */}
<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
<div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-orange-200/40 blur-3xl" />
</div>


<Hero />
<Contract />
<Tokenomics />
<Roadmap />
<FAQ />
<Socials />
<Footer />
</main>
);
}
