"use client";
import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";
import { Zap, Shield, Recycle, DollarSign, Thermometer } from "lucide-react";

const properties: Array<{area: string; icon: React.ReactNode; title: string; description: string}> = [
  {
    area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
    icon: <Shield className="h-4 w-4" />,
    title: "Chemical Resistance",
    description: "Resistant to most acids, alkalis, salts and many organic solvents. Ideal for pipes carrying corrosive fluids.",
  },
  {
    area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
    icon: <DollarSign className="h-4 w-4" />,
    title: "Cost Efficiency",
    description: "One of the most economical polymers. 57% of its mass is chlorine derived from cheap, abundant salt (NaCl).",
  },
  {
    area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
    icon: <Zap className="h-4 w-4" />,
    title: "Inherent Flame Retardancy",
    description: "Chlorine acts as a radical scavenger during combustion — PVC is self-extinguishing without additional flame retardant additives, unlike polyethylene or polypropylene.",
  },
  {
    area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
    icon: <Thermometer className="h-4 w-4" />,
    title: "Tunable Stiffness",
    description: "Add plasticisers → flexible PVC (cables, flooring). Remove them → rigid uPVC (pipes, window frames). Same base polymer, completely different properties.",
  },
  {
    area: "md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]",
    icon: <Recycle className="h-4 w-4" />,
    title: "Durability & Recyclability",
    description: "PVC pipes last 40–100 years. Rigid PVC (resin code #3) is mechanically recyclable 5+ times. VinylPlus recycled 771,000 tonnes in 2022.",
  },
];

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

function GridItem({ area, icon, title, description }: GridItemProps) {
  return (
    <li className={cn("min-h-[14rem] list-none", area)}>
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-neutral-200 p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect spread={40} glow proximity={64} inactiveZone={0.01} borderWidth={2} />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] border-neutral-100 bg-white p-6 shadow-sm">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-neutral-100 bg-neutral-50 p-2 text-teal-600">
              {icon}
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold font-sans tracking-tight text-neutral-900">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-neutral-500">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default function WhatIsPVC() {
  return (
    <section id="what" className="py-32 max-w-6xl mx-auto px-6">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-14"
      >
        <p className="text-xs font-semibold tracking-[0.18em] uppercase text-teal-600 flex items-center gap-2 mb-4">
          <span className="w-5 h-px bg-teal-500 inline-block" />
          The Material
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-normal tracking-tight leading-[1.05] text-neutral-900 mb-3">
          Why PVC Matters
        </h2>
        <p className="text-neutral-400 text-sm max-w-xl leading-relaxed">
          PVC's unique property profile — no other single polymer covers this range without modification.
        </p>
      </motion.div>

      {/* GlowingEffect bento grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
          {properties.map((p) => (
            <GridItem key={p.title} {...p} />
          ))}
        </ul>
      </motion.div>

      {/* Molecular formula card + bond data — visual, not a wall of text */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white border border-neutral-100 rounded-2xl p-8 shadow-sm"
        >
          {/* SVG backbone diagram */}
          <div className="text-[0.6rem] font-mono text-neutral-400 uppercase tracking-widest mb-3">Repeat Unit</div>
          <div className="font-mono text-2xl text-teal-600 text-center py-4 border-y border-neutral-100 mb-6">
            –[CH₂–CHCl]<sub>n</sub>–
          </div>
          <svg viewBox="0 0 440 110" className="w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="wglow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#0d9488" stopOpacity="0.07"/>
                <stop offset="100%" stopColor="#0d9488" stopOpacity="0"/>
              </radialGradient>
            </defs>
            <ellipse cx="220" cy="55" rx="210" ry="48" fill="url(#wglow)"/>
            <polyline points="20,70 80,38 140,70 200,38 260,70 320,38 380,70 420,55"
              fill="none" stroke="#0d9488" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/>
            {/* Cl pendants */}
            {[80,200,320].map(x => (
              <g key={x}>
                <line x1={x} y1="38" x2={x} y2="10" stroke="#0d9488" strokeWidth="2"/>
                <circle cx={x} cy="8" r="8" fill="#f0fdfa" stroke="#0d9488" strokeWidth="1.5"/>
                <text x={x} y="11.5" textAnchor="middle" fill="#0d9488" fontSize="7" fontWeight="700" fontFamily="monospace">Cl</text>
              </g>
            ))}
            {/* C atoms */}
            {[80,140,200,260,320,380].map((x,i) => (
              <g key={x}>
                <circle cx={x} cy={i%2===0?38:70} r="13" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1.5"/>
                <text x={x} y={i%2===0?42:74} textAnchor="middle" fill="#475569" fontSize="8" fontWeight="600" fontFamily="monospace">C</text>
              </g>
            ))}
            {/* legend */}
            <circle cx="20" cy="100" r="4" fill="#f0fdfa" stroke="#0d9488" strokeWidth="1.2"/>
            <text x="30" y="103" fill="#94a3b8" fontSize="7" fontFamily="monospace">Chlorine (Cl) — pendant group</text>
            <circle cx="220" cy="100" r="4" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1.2"/>
            <text x="230" y="103" fill="#94a3b8" fontSize="7" fontFamily="monospace">Carbon (C) — backbone</text>
          </svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-3"
        >
          {[
            { v: "1.54 Å",     l: "C–C Bond Length" },
            { v: "1.77 Å",     l: "C–Cl Bond Length" },
            { v: "109.5°",     l: "Bond Angle (sp³)" },
            { v: "62.5 g/mol", l: "Monomer MW" },
            { v: "3.16",       l: "Cl Electronegativity" },
            { v: "1.44 D",     l: "Dipole Moment" },
            { v: "339 kJ/mol", l: "C–Cl Bond Energy" },
            { v: "~80°C",      l: "Glass Transition Tg" },
          ].map((b) => (
            <div key={b.l} className="bg-neutral-50 border border-neutral-100 rounded-xl p-3 hover:border-teal-200 transition-colors">
              <div className="font-mono text-sm font-semibold text-neutral-900">{b.v}</div>
              <div className="text-[0.6rem] uppercase tracking-wider text-neutral-400 mt-0.5 font-medium">{b.l}</div>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
