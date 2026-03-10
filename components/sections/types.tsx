"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const types = [
  {
    id: "atactic",
    label: "Atactic",
    badge: "Commercial",
    badgeColor: "bg-teal-50 text-teal-700 border-teal-200",
    crystallinity: "~5%",
    tg: "~80°C",
    desc: "Random arrangement of Cl groups. Largely amorphous (~5% crystallinity). Softens gradually above Tg — ideal for extrusion and moulding. This is ~95% of all commercial PVC produced globally.",
    stat: "95% of production",
    patternFn: (i: number) => Math.sin(i * 2.7) > 0,
  },
  {
    id: "syndiotactic",
    label: "Syndiotactic",
    badge: "High Performance",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
    crystallinity: "~30%",
    tg: "~80°C / Tm 270°C",
    desc: "Perfectly alternating Cl groups above and below the backbone. Highest crystallinity (~30–40%) and superior mechanical properties. Produced via Ziegler–Natta catalysts at low temperature. Niche use due to cost.",
    stat: "Superior properties",
    patternFn: (i: number) => i % 2 === 0,
  },
  {
    id: "isotactic",
    label: "Isotactic",
    badge: "Theoretical",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
    crystallinity: "High",
    tg: "N/A (poor stability)",
    desc: "All Cl groups on the same side of the backbone. Regular structure but poor processability and thermal stability. Mainly of academic interest — very limited commercial application.",
    stat: "Mainly academic",
    patternFn: () => true,
  },
];

function Chain({ patternFn }: { patternFn: (i: number) => boolean }) {
  const n = 8;
  return (
    <div className="flex items-center overflow-x-auto py-6 gap-0 scrollbar-none">
      {Array.from({ length: n }).map((_, i) => {
        const up = patternFn(i);
        return (
          <div key={i} className="flex items-center gap-0 flex-shrink-0">
            {i > 0 && <div className="w-7 h-0.5 bg-neutral-200 flex-shrink-0" />}
            <div className="flex flex-col items-center gap-1.5 flex-shrink-0">
              {up ? (
                <motion.div
                  key={`cl-up-${i}`}
                  initial={{ scale: 0.3, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="w-8 h-8 rounded-full bg-teal-50 border-2 border-teal-400 flex items-center justify-center text-[0.6rem] font-bold font-mono text-teal-700"
                >
                  Cl
                </motion.div>
              ) : (
                <div className="w-8 h-8 flex-shrink-0" />
              )}

              <motion.div
                key={`c-${i}`}
                initial={{ scale: 0.3, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: i * 0.04 + 0.02 }}
                className="w-9 h-9 rounded-full bg-slate-100 border-2 border-slate-300 flex items-center justify-center text-[0.65rem] font-bold font-mono text-slate-600"
              >
                C
              </motion.div>

              {!up ? (
                <motion.div
                  key={`cl-dn-${i}`}
                  initial={{ scale: 0.3, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.04 + 0.04 }}
                  className="w-8 h-8 rounded-full bg-teal-50 border-2 border-teal-400 flex items-center justify-center text-[0.6rem] font-bold font-mono text-teal-700"
                >
                  Cl
                </motion.div>
              ) : (
                <div className="w-8 h-8 flex-shrink-0" />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Types() {
  const [active, setActive] = useState(types[0]);

  return (
    <section id="types" className="py-32 max-w-6xl mx-auto px-6">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <p className="text-xs font-semibold tracking-[0.18em] uppercase text-teal-600 flex items-center gap-2 mb-4">
          <span className="w-5 h-px bg-teal-500" />
          Stereochemistry
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-normal tracking-tight leading-[1.05] text-neutral-900">
          Tacticity
        </h2>
        <p className="text-neutral-400 mt-3 max-w-xl text-sm leading-relaxed">
          The spatial arrangement of chlorine substituents along the backbone controls crystallinity, mechanical performance, and processability.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="bg-white border border-neutral-100 rounded-2xl p-6 md:p-8 shadow-sm"
      >
        {/* Tab switcher */}
        <div className="flex gap-2 flex-wrap mb-6">
          {types.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
                active.id === t.id
                  ? "bg-teal-600 text-white border-teal-600"
                  : "bg-neutral-50 border-neutral-200 text-neutral-600 hover:border-neutral-400"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Chain visualisation */}
        <AnimatePresence mode="wait">
          <Chain key={active.id} patternFn={active.patternFn} />
        </AnimatePresence>

        {/* Description */}
        <div className="pt-5 mt-2 border-t border-neutral-100 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className={`inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full border mb-3 ${active.badgeColor}`}>
              {active.badge}
            </div>
            <p className="text-neutral-500 text-sm leading-relaxed">{active.desc}</p>
          </div>
          <div className="space-y-3">
            <div className="bg-neutral-50 rounded-xl p-3">
              <div className="font-mono text-lg font-semibold text-neutral-900">{active.crystallinity}</div>
              <div className="text-[0.62rem] uppercase tracking-widest text-neutral-400 mt-0.5">Crystallinity</div>
            </div>
            <div className="bg-neutral-50 rounded-xl p-3">
              <div className="font-mono text-lg font-semibold text-neutral-900">{active.tg}</div>
              <div className="text-[0.62rem] uppercase tracking-widest text-neutral-400 mt-0.5">Tg / Tm</div>
            </div>
          </div>
        </div>
      </motion.div>

    </section>
  );
}
