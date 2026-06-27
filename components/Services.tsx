import { Users, Briefcase, TrendingUp, Award } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Temporary Staffing",
    desc: "Flexible workforce solutions to meet fluctuating demands. We provide pre-screened candidates ready to contribute from day one.",
  },
  {
    icon: Briefcase,
    title: "Permanent Placement",
    desc: "We match top-tier talent with permanent roles that align with your company culture, growth trajectory, and long-term vision.",
  },
  {
    icon: TrendingUp,
    title: "Executive Search",
    desc: "Confidential, high-touch search for senior leadership roles. We access passive talent pools other firms simply cannot reach.",
  },
  {
    icon: Award,
    title: "Managed Solutions",
    desc: "End-to-end workforce program management including vendor oversight, compliance reporting, and strategic workforce planning.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-slate-50/60 py-24 md:py-32">
      <div className="max-w-8xl mx-auto px-6 md:px-10 grid lg:grid-cols-[1fr_1.4fr] gap-16">
        <div>
          <span className="text-gold-600 text-xs font-semibold tracking-wider uppercase">
            What We Do
          </span>
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-navy-900 mt-4 leading-[1.15]">
            Staffing solutions built for the Canadian market
          </h2>
          <p className="text-slate-500 text-lg mt-6 leading-relaxed">
            Whether you need one hire or an entire workforce, we have a
            service model that fits your timeline, budget, and risk
            tolerance.
          </p>
          <a
            href="#contact"
            className="inline-block mt-6 text-navy-900 font-semibold border-b-2 border-navy-900 pb-1"
          >
            Speak with a consultant &gt;
          </a>
        </div>

        <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-navy-900/10">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className={`p-0 sm:px-10 py-8 ${
                  i % 2 === 0 ? "sm:pl-0" : ""
                } ${i < 2 ? "sm:pb-10" : "sm:pt-10"}`}
              >
                <Icon className="text-gold-500" size={28} strokeWidth={1.75} />
                <h3 className="font-serif font-bold text-xl text-navy-900 mt-5">
                  {s.title}
                </h3>
                <p className="text-slate-500 mt-3 leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
