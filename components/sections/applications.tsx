"use client";
import { motion } from "framer-motion";

const apps = [
  { icon: "🏗️", title: "Construction",   share: "~60%", desc: "Pressure pipes, window profiles (uPVC), roofing membranes, flooring (LVT), siding and cladding. A uPVC window frame contains ~6 kg PVC with 40+ year service life." },
  { icon: "⚡", title: "Electrical",       share: "~10%", desc: "Cable insulation and jacketing, conduit, switch gear components. PVC insulates over 70% of global low-voltage wire — 30 kV/mm dielectric strength." },
  { icon: "🚗", title: "Automotive",       share: "~8%",  desc: "Dashboard skins, door panels, wiring harnesses, seals and gaskets. Flexible PVC provides weight reduction vs rubber while meeting durability standards." },
  { icon: "🏥", title: "Healthcare",       share: "~5%",  desc: "Blood bags, IV tubing, catheters, oxygen masks. Medical-grade PVC undergoes ISO 10993 biocompatibility testing. Phthalate-free alternatives increasingly specified." },
  { icon: "📦", title: "Packaging",        share: "~8%",  desc: "Blister packs, clamshells, shrink film, bottle caps. PVC's clarity, stiffness, and barrier properties suit pharmaceutical and food packaging." },
  { icon: "👗", title: "Consumer Goods",   share: "~9%",  desc: "Flooring, synthetic leather, sportswear, rainwear, garden hoses, credit cards. Flexible PVC's ability to mimic leather and accept vivid colour makes it omnipresent." },
];

export default function Applications() {
  return (
    <section id="applications" className="py-32 max-w-6xl mx-auto px-6">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-14"
      >
        <p className="text-xs font-semibold tracking-[0.18em] uppercase text-teal-600 flex items-center gap-2 mb-4">
          <span className="w-5 h-px bg-teal-500" />
          Industrial Use
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-normal tracking-tight leading-[1.05] text-neutral-900 mb-4">
          Applications of PVC
        </h2>
        <p className="text-neutral-400 max-w-xl text-sm leading-relaxed">
          PVC pipes silently carry water beneath every modern city. Blood bags in hospitals, cable insulation in walls, window frames in buildings — PVC is embedded in infrastructure most people never see.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-5">
        {apps.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            viewport={{ once: true, margin: "-60px" }}
            className="group bg-white border border-neutral-100 rounded-2xl p-6 cursor-default relative overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          >
            {/* hover tint */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative">
              <div className="text-3xl mb-4">{a.icon}</div>
              <div className="font-serif text-xl text-neutral-900 mb-1">{a.title}</div>
              <div className="font-mono text-xs text-teal-600 font-semibold mb-3 tracking-wide">{a.share} of global use</div>
              <p className="text-neutral-400 text-sm leading-relaxed">{a.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
