import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const columns = [
  {
    title: "Services",
    links: ["Temporary Staffing", "Permanent Placement", "Executive Search", "Managed Solutions", "Payroll Services"],
  },
  {
    title: "Industries",
    links: ["Warehouse", "Manufacturing", "Logistics", "Administrative", "Customer Service"],
  },
  {
    title: "Company",
    links: ["About Us", "Our Team", "Careers at Apex", "Press & Media", "Contact"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white pt-20 pb-8">
      <div className="max-w-8xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-[1.3fr_1fr_1fr_1fr] gap-12">
          <div>
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-md bg-gold-500 flex items-center justify-center">
                <span className="w-3 h-3 bg-navy-900 rounded-sm" />
              </span>
              <span className="font-serif text-2xl font-bold">Carpilone</span>
            </div>
            <p className="text-slate-450 mt-5 max-w-xs leading-relaxed">
              Canada&apos;s trusted staffing partner since 2004. Connecting
              great people with great companies coast to coast.
            </p>
            <div className="flex gap-3 mt-6">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social link"
                  className="w-9 h-9 border border-white/20 flex items-center justify-center hover:border-gold-500 transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-gold-400 text-xs font-semibold tracking-wider uppercase">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-slate-450 hover:text-white transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 mt-14 pt-7 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-450 text-sm">
            &copy; 2024 Carpilone Inc. All rights reserved. Serving Canada from
            coast to coast.
          </p>
          <div className="flex gap-6 text-sm text-slate-450">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Use
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
