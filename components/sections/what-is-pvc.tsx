"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const bonds = [
  { v: "1.54 Å",    l: "C–C Bond Length" },
  { v: "1.77 Å",    l: "C–Cl Bond Length" },
  { v: "109.5°",    l: "Bond Angle (sp³)" },
  { v: "62.5 g/mol",l: "Monomer MW" },
  { v: "3.16",      l: "Cl Electronegativity" },
  { v: "1.44 D",    l: "Dipole Moment" },
];

export default function WhatIsPVC() {
  return (
    <section id="what" className="py-32 max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-20 items-center">

        {/* text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-teal-600 flex items-center gap-2 mb-4">
            <span className="w-5 h-px bg-teal-500 inline-block" />
            The Material
          </p>

          <h2 className="font-serif text-4xl md:text-5xl font-normal tracking-tight leading-[1.05] mb-6 text-neutral-900">
            What is Polyvinyl<br />Chloride?
          </h2>

          <p className="text-neutral-500 leading-relaxed text-[0.95rem] mb-4">
            Polyvinyl Chloride (PVC) is one of the most widely produced synthetic
            thermoplastic polymers in the world. It is created through the free
            radical polymerization of vinyl chloride monomers (VCM) and valued for
            its exceptional durability, chemical resistance, and low production cost.
          </p>

          <p className="text-neutral-500 leading-relaxed text-[0.95rem] mb-6">
            PVC can exist in two distinct forms — rigid (uPVC) and flexible —
            depending on formulation. This versatility makes it uniquely suited
            to applications spanning construction, healthcare, electrical
            infrastructure, and packaging.
          </p>

          <div className="border-l-[3px] border-teal-500 bg-teal-50 rounded-r-xl pl-4 pr-5 py-3 text-sm text-neutral-600 leading-relaxed">
            <strong className="text-neutral-800">Flame Retardancy:</strong> The C–Cl
            bond creates a permanent dipole. Chlorine acts as a radical scavenger
            during combustion — inherent flame retardancy without extra additives.
          </div>
        </motion.div>

        {/* visual card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
          className="bg-white border border-neutral-100 rounded-2xl p-7 shadow-sm"
        >
          <div className="font-mono text-2xl text-teal-600 text-center tracking-wide pb-5 mb-5 border-b border-neutral-100">
            –[CH₂–CHCl]<sub>n</sub>–
          </div>

          <div className="grid grid-cols-2 gap-3">
            {bonds.map((b) => (
              <div key={b.l} className="bg-neutral-50 rounded-xl p-3">
                <div className="font-mono text-sm font-semibold text-neutral-900">
                  {b.v}
                </div>
                <div className="text-[0.62rem] uppercase tracking-widest text-neutral-400 mt-0.5 font-medium">
                  {b.l}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
