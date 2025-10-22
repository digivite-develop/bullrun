"use client";
import { useEffect, useRef, useState } from "react";

type Props = { pressClass?: string };

export default function OurMission({ pressClass = "" }: Props) {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {/* Секция на странице */}
      <section className="w-full py-10 md:py-14 bg-black">
        <div className="mx-auto max-w-[1100px] shadow-[0_18px_60px_rgba(0,0,0,0.12)] overflow-hidden">
          <div className="bg-gradient-to-r from-yellow-200 via-amber-200 to-orange-300 px-5 sm:px-8 py-8 md:py-10">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
              <div className="flex-1 text-center md:text-left">
                <h3 className={`${pressClass} text-black text-xl sm:text-2xl md:text-3xl leading-tight`}>
                  BullRunCZ — Pioneering the Next Era of Memetic Finance
                </h3>
                <p className="mt-3 text-black/80 text-sm sm:text-base">
                  Vision, strategy, and community — distilled into one mission.
                </p>
              </div>
              <div className="flex-1 md:text-right text-center">
                <button
                  ref={btnRef}
                  onClick={() => setOpen(true)}
                  className={`${pressClass} inline-flex items-center justify-center rounded-full bg-black text-white px-6 py-3 text-xs sm:text-sm md:text-base font-bold shadow-[0_4px_0_rgba(0,0,0,0.6)] active:translate-y-[1px] hover:bg-black/90 transition`}
                  aria-haspopup="dialog"
                  aria-expanded={open}
                  aria-controls="our-mission-dialog"
                >
                  Our Mission
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {open && (
        <div
          className="fixed inset-0 z-[90] grid place-items-center"
          aria-modal="true"
          role="dialog"
          id="our-mission-dialog"
          onClick={(e) => e.target === e.currentTarget && setOpen(false)}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div className="relative z-[91] mx-4 w-full max-w-[860px] rounded-2xl border border-white/15 bg-gradient-to-b from-yellow-50 to-orange-100 shadow-2xl">
            <div className="flex items-center justify-between px-5 sm:px-7 py-4 border-b border-black/10">
              <h4 className={`${pressClass} text-black text-lg sm:text-xl`}>Our Mission</h4>
              <button
                onClick={() => setOpen(false)}
                className="rounded-full border border-black/10 px-3 py-1 text-sm hover:bg-black/5"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="px-5 sm:px-7 py-6 max-h-[70vh] overflow-auto leading-relaxed text-black">
              <p className="text-base sm:text-lg font-semibold mb-3">
                BullRunCZ — Pioneering the Next Era of Memetic Finance
              </p>
              <p className="mb-4">
                BullRunCZ is poised to redefine the memecoin landscape. Born from the confluence of bullish market
                sentiment and an intriguing legacy, CZ represents more than just a digital asset — it embodies
                resilience and the relentless pursuit of prosperity.
              </p>
              <p className="mb-4">
                Built on a robust and scalable blockchain infrastructure, BullRunCZ introduces a dynamic tokenomic model
                designed to incentivize long-term holder value and foster a vibrant, engaged community. Our goal is to
                cultivate a unique ecosystem poised for synergistic expansion into the rapidly growing decentralized
                application (dApp) space.
              </p>
              <p>
                Driven by a forward-thinking strategy and spearheaded by a seasoned team, BullRunCZ (BCZ) is not merely
                participating in the next alt-season — we are leading it. We are setting a new standard for memetic
                innovation, community-driven growth, and sustainable financial impact for our stakeholders.
              </p>
            </div>

            <div className="px-5 sm:px-7 py-4 border-t border-black/10 flex items-center justify-end gap-3">
              <button onClick={() => setOpen(false)} className="rounded-xl px-4 py-2 bg-black text-white text-sm hover:bg-black/90">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
