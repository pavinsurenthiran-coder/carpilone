"use client";

import { useState } from "react";
import { Phone, Mail } from "lucide-react";

export default function Contact() {
  const [role, setRole] = useState<"Employer" | "Job Seeker">("Employer");

  return (
    <section id="contact" className="bg-navy-900 py-24 md:py-32">
      <div className="max-w-8xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-0 lg:gap-16">
        <div className="flex flex-col justify-center">
          <span className="text-gold-400 text-xs font-semibold tracking-wider uppercase">
            Get In Touch
          </span>
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-white mt-4 leading-[1.15]">
            Ready to make your next great hire?
          </h2>
          <p className="text-slate-450 text-lg mt-6 leading-relaxed max-w-md">
            Whether you&apos;re a job seeker exploring opportunities or an
            employer looking to build your team, our consultants are ready
            to help.
          </p>

          <div className="flex flex-col gap-5 mt-9">
            <div className="flex items-center gap-4">
              <span className="flex items-center justify-center w-11 h-11 border border-gold-500/50">
                <Phone className="text-gold-400" size={18} />
              </span>
              <div>
                <div className="text-slate-450 text-sm">Main Office</div>
                <div className="text-white font-semibold">1-343-943-0860</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center justify-center w-11 h-11 border border-gold-500/50">
                <Mail className="text-gold-400" size={18} />
              </span>
              <div>
                <div className="text-slate-450 text-sm">Email Us</div>
                <div className="text-white font-semibold">
                  carpilone.contact@gmail.com
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-white/10">
            <div className="text-slate-450 text-sm">Offices across Canada:</div>
            <div className="text-white mt-2">
              Toronto &middot; Calgary &middot; Vancouver &middot; Ottawa &middot;
              Edmonton &middot; Halifax &middot; Montr&eacute;al
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-white p-8 md:p-10 mt-16 lg:mt-0"
        >
          <label className="block">
            <span className="text-sm font-medium text-navy-900">Full Name</span>
            <input
              type="text"
              placeholder="Jane Smith"
              className="mt-2 w-full border border-navy-900/15 bg-slate-50 px-4 py-3 text-navy-900 placeholder:text-slate-400 focus:outline-none focus:border-gold-500"
            />
          </label>

          <label className="block mt-5">
            <span className="text-sm font-medium text-navy-900">
              Email Address
            </span>
            <input
              type="email"
              placeholder="jane@company.com"
              className="mt-2 w-full border border-navy-900/15 bg-slate-50 px-4 py-3 text-navy-900 placeholder:text-slate-400 focus:outline-none focus:border-gold-500"
            />
          </label>

          <div className="mt-5">
            <span className="text-sm font-medium text-navy-900">I am a...</span>
            <div className="grid grid-cols-2 gap-0 mt-2">
              {(["Employer", "Job Seeker"] as const).map((r) => (
                <button
                  type="button"
                  key={r}
                  onClick={() => setRole(r)}
                  className={`py-3 font-semibold border ${
                    role === r
                      ? "bg-navy-900 text-white border-navy-900"
                      : "bg-white text-navy-900 border-navy-900/15"
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          <label className="block mt-5">
            <span className="text-sm font-medium text-navy-900">Message</span>
            <textarea
              rows={4}
              placeholder="Tell us about your hiring needs or the role you're looking for..."
              className="mt-2 w-full border border-navy-900/15 bg-slate-50 px-4 py-3 text-navy-900 placeholder:text-slate-400 focus:outline-none focus:border-gold-500 resize-none"
            />
          </label>

          <button
            type="submit"
            className="mt-7 w-full bg-gold-500 text-navy-900 font-bold py-4 hover:bg-gold-400 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
