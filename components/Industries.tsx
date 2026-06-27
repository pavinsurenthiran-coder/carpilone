import { Package, BarChart3, Truck, ClipboardList, Headphones, Building2, ChevronRight } from "lucide-react";

const industries = [
  { icon: Package, title: "Warehouse & Distribution", roles: "340+ active roles" },
  { icon: BarChart3, title: "Manufacturing", roles: "210+ active roles" },
  { icon: Truck, title: "Logistics & Supply Chain", roles: "180+ active roles" },
  { icon: ClipboardList, title: "Administrative & Office", roles: "290+ active roles" },
  { icon: Headphones, title: "Customer Service", roles: "155+ active roles" },
  { icon: Building2, title: "Professional Services", roles: "120+ active roles" },
];

export default function Industries() {
  return (
    <section id="industries" className="bg-slate-50/60 py-24 md:py-32">
      <div className="max-w-8xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-gold-600 text-xs font-semibold tracking-wider uppercase">
            Sectors We Serve
          </span>
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-navy-900 mt-4">
            Industries We Serve
          </h2>
          <p className="text-slate-500 text-lg mt-5 leading-relaxed">
            Deep specialization across Canada&apos;s core economic sectors — we
            understand the roles, the pace, and the pressures of each one.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <a
                key={ind.title}
                href="#jobs"
                className="group flex items-center gap-4 bg-white border border-navy-900/10 px-6 py-6 hover:border-gold-500/60 hover:shadow-sm transition-all"
              >
                <span className="flex items-center justify-center w-12 h-12 bg-slate-100 shrink-0">
                  <Icon className="text-navy-900" size={22} strokeWidth={1.75} />
                </span>
                <div className="flex-1">
                  <h3 className="font-semibold text-navy-900">{ind.title}</h3>
                  <p className="text-slate-450 text-sm mt-0.5">{ind.roles}</p>
                </div>
                <ChevronRight
                  className="text-slate-400 group-hover:text-gold-500 transition-colors"
                  size={18}
                />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
