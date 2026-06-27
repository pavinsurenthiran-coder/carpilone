"use client";

import { useState } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Carpilone delivered three qualified candidates within 48 hours of our urgent request. The quality of screening was exceptional — every person they sent was interview-ready.",
    name: "Sandra Kowalski",
    role: "VP of Operations — Brightline Logistics",
  },
  {
    quote:
      "They took the time to understand our culture before sending a single resume. The permanent hire they placed with us is now leading our operations team.",
    name: "Marcus Chen",
    role: "Director of HR — Apex Manufacturing",
  },
  {
    quote:
      "We've used staffing agencies before, but none with this level of follow-through. Carpilone checks in long after the placement is made.",
    name: "Priya Anand",
    role: "Plant Manager — NorthStar Freight",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className="bg-slate-50/60 py-24 md:py-32">
      <div className="max-w-8xl mx-auto px-6 md:px-10 text-center">
        <span className="text-gold-600 text-xs font-semibold tracking-wider uppercase">
          Client Stories
        </span>
        <h2 className="font-serif font-bold text-4xl md:text-5xl text-navy-900 mt-4">
          What our clients say
        </h2>

        <div className="relative max-w-4xl mx-auto mt-14 bg-white border border-navy-900/10 px-10 md:px-16 py-14 text-left">
          <Quote className="absolute top-10 right-10 text-gold-200" size={48} />
          <div className="flex gap-1 text-gold-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
            ))}
          </div>
          <p className="font-serif italic text-2xl md:text-3xl text-navy-900 mt-7 leading-snug">
            &quot;{t.quote}&quot;
          </p>
          <div className="flex items-center gap-4 mt-9">
            <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center font-semibold text-navy-900">
              {t.name.split(" ").map((n) => n[0]).join("")}
            </div>
            <div>
              <div className="font-semibold text-navy-900">{t.name}</div>
              <div className="text-slate-450 text-sm">{t.role}</div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Show testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === active ? "w-8 bg-gold-500" : "w-2 bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
