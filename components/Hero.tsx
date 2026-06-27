import Navbar from "./Navbar";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "15,000+", label: "Placements Made" },
  { value: "500+", label: "Client Companies" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "20+", label: "Years in Canada" },
];

export default function Hero() {
  return (
    <section id="top" className="relative bg-navy-900 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2000&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/95 to-navy-900/50" />

      <Navbar transparent />

      <div className="relative max-w-8xl mx-auto px-6 md:px-10 pt-36 pb-20">
        <div className="inline-flex items-center gap-2 border border-gold-500/60 rounded-sm px-4 py-2 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
          <span className="text-gold-400 text-xs font-semibold tracking-wider uppercase">
            Canada&apos;s Trusted Staffing Partner
          </span>
        </div>

        <h1 className="font-serif font-bold text-white text-5xl md:text-6xl lg:text-7xl leading-[1.08] max-w-4xl">
          Connecting <em className="text-gold-400 font-medium italic">Great</em>{" "}
          People with <em className="text-gold-400 font-medium italic">Great</em>{" "}
          Companies
        </h1>

        <p className="mt-8 text-slate-450 text-lg md:text-xl max-w-2xl leading-relaxed">
          From coast to coast, Carpilone has been matching skilled
          professionals with leading Canadian employers for over two
          decades. Your next opportunity — or your next hire — starts here.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#jobs"
            className="inline-flex items-center gap-2 bg-gold-500 text-navy-900 font-semibold px-7 py-4 hover:bg-gold-400 transition-colors"
          >
            Find Work <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-white/40 text-white font-semibold px-7 py-4 hover:bg-white/5 transition-colors"
          >
            Hire Talent <ArrowRight size={18} />
          </a>
        </div>

        <div className="mt-20 pt-10 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-serif text-3xl md:text-4xl font-bold text-white">
                {s.value}
              </div>
              <div className="text-slate-450 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
