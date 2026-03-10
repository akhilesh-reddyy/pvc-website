"use client";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="flex flex-col overflow-hidden pt-[120px]">
      <ContainerScroll
        titleComponent={
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-200 bg-teal-50 text-teal-700 text-xs font-semibold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
              First Synthesised 1835 · World&apos;s #3 Polymer · 45+ Mt / year
            </div>

            <h1 className="font-serif text-5xl md:text-[6.5rem] font-normal leading-[0.95] tracking-tight text-neutral-900">
              Polyvinyl
              <br />
              <em className="text-teal-600 italic font-serif">Chloride</em>
            </h1>

            <p className="text-neutral-400 text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed">
              A complete study — from molecular chain architecture and
              polymerization mechanisms to industrial manufacturing and
              sustainability.
            </p>

            <div className="flex gap-3 justify-center pt-2 flex-wrap">
              <a
                href="#what"
                className="px-6 py-2.5 rounded-lg bg-neutral-900 text-white text-sm font-semibold hover:bg-neutral-700 transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                Start Reading
              </a>
              <a
                href="#structure"
                className="px-6 py-2.5 rounded-lg border border-neutral-200 text-neutral-800 text-sm font-medium hover:border-teal-400 hover:text-teal-600 transition-all"
              >
                Explore Structure →
              </a>
            </div>
          </div>
        }
      >
        <div className="relative w-full h-full rounded-xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b"
            alt="Industrial PVC pipes and piping system"
            fill
            className="object-cover object-center"
            draggable={false}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
          <div className="absolute top-4 left-4 font-mono text-xs text-white/60 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
            –[CH₂–CHCl]<sub>n</sub>– · MW monomer = 62.5 g/mol
          </div>
          <div className="absolute bottom-0 left-0 right-0 px-6 py-5 flex gap-8 flex-wrap border-t border-white/10 bg-black/30 backdrop-blur-sm">
            {[
              { v: "1835",   l: "First Synthesised" },
              { v: "45+ Mt", l: "Annual Production" },
              { v: "~80°C",  l: "Glass Transition Tg" },
              { v: "#3",     l: "Global Polymer Rank" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-mono text-2xl font-semibold text-white leading-none">{s.v}</div>
                <div className="text-white/40 text-xs mt-1 uppercase tracking-widest">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
}
