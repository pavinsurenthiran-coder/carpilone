import { CheckCircle2 } from "lucide-react";

const credentials = ["ISO 9001 Certified", "CPSA Member Agency", "BBB Accredited", "WSIB Compliant"];

export default function About() {
  return (
    <section id="about" className="bg-white py-24 md:py-32">
      <div className="max-w-8xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div
            className="aspect-[4/3] w-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop')",
            }}
          />
          <div className="absolute bottom-0 right-0 md:right-[-2rem] bg-gold-500 text-white p-7 w-48">
            <div className="font-serif text-3xl font-bold">20+</div>
            <div className="text-sm mt-1 leading-snug">
              Years of Canadian Staffing Excellence
            </div>
          </div>
        </div>

        <div>
          <span className="text-gold-600 text-xs font-semibold tracking-wider uppercase">
            About Carpilone
          </span>
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-navy-900 mt-4 leading-[1.15]">
            Built in Canada. Trusted across Canada.
          </h2>

          <p className="text-slate-500 text-lg mt-6 leading-relaxed">
            Founded in 2004, Carpilone is one of Canada&apos;s leading
            independent staffing agencies. We were built on the belief that
            great hiring is equal parts science and human judgment — and
            that both the employer and the candidate deserve a better
            experience than the industry has traditionally offered.
          </p>
          <p className="text-slate-500 text-lg mt-5 leading-relaxed">
            Today, our team of 120+ specialized recruiters operates across
            seven cities, serving clients from growing SMEs to Fortune 500
            subsidiaries operating in the Canadian market.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-8">
            {credentials.map((c) => (
              <div key={c} className="flex items-center gap-2.5 text-navy-900">
                <CheckCircle2 className="text-gold-500" size={20} />
                <span className="font-medium">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
