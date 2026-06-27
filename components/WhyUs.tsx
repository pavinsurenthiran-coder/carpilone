const reasons = [
  {
    num: "01",
    title: "Speed Without Compromise",
    desc: "Our deep talent pipeline means we can present qualified candidates in 24–48 hours — without cutting corners on screening.",
  },
  {
    num: "02",
    title: "Canada-Wide Reach",
    desc: "With offices from Halifax to Vancouver, we have on-the-ground expertise in every major Canadian labour market.",
  },
  {
    num: "03",
    title: "Industry Specialization",
    desc: "Our recruiters are former industry professionals. They speak your language and understand what the role actually demands.",
  },
  {
    num: "04",
    title: "Guaranteed Placements",
    desc: "Every permanent placement includes a 90-day guarantee. If the fit isn't right, we make it right — at no additional cost.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-navy-900 py-24 md:py-32">
      <div className="max-w-8xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-16">
        <div>
          <span className="text-gold-400 text-xs font-semibold tracking-wider uppercase">
            The Apex Difference
          </span>
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-white mt-4 leading-[1.15]">
            Why Canada&apos;s best companies choose us
          </h2>
          <p className="text-slate-450 text-lg mt-6 leading-relaxed">
            We are not a resume-forwarding service. We are a strategic talent
            partner — one that takes accountability for every placement we
            make.
          </p>

          <div
            className="mt-10 bg-cover bg-center aspect-[4/3] w-full"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop')",
            }}
          />
        </div>

        <div className="divide-y divide-white/10">
          {reasons.map((r) => (
            <div key={r.num} className="flex gap-6 py-7 first:pt-0">
              <span className="text-gold-500/70 font-serif text-lg font-bold shrink-0">
                {r.num}
              </span>
              <div>
                <h3 className="font-serif font-bold text-xl text-white">
                  {r.title}
                </h3>
                <p className="text-slate-450 mt-2 leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
