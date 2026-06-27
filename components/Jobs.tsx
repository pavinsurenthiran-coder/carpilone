"use client";

import { useState } from "react";
import { MapPin, DollarSign, Clock, ArrowRight } from "lucide-react";

const filters = ["All", "Warehouse", "Manufacturing", "Logistics", "Administrative", "Customer Service"];

const jobs = [
  {
    title: "Warehouse Team Lead",
    company: "LogiCore Distribution",
    type: "Full-Time",
    location: "Mississauga, ON",
    pay: "$24–$28/hr",
    posted: "2 days ago",
    category: "Warehouse",
  },
  {
    title: "Production Supervisor",
    company: "Apex Manufacturing Inc.",
    type: "Permanent",
    location: "Hamilton, ON",
    pay: "$65,000–$75,000/yr",
    posted: "3 days ago",
    category: "Manufacturing",
  },
  {
    title: "Logistics Coordinator",
    company: "NorthStar Freight",
    type: "Full-Time",
    location: "Calgary, AB",
    pay: "$52,000–$60,000/yr",
    posted: "1 day ago",
    category: "Logistics",
  },
  {
    title: "Executive Assistant",
    company: "Meridian Financial Group",
    type: "Contract",
    location: "Toronto, ON",
    pay: "$30–$35/hr",
    posted: "4 days ago",
    category: "Administrative",
  },
  {
    title: "Customer Experience Rep",
    company: "TeleCan Solutions",
    type: "Full-Time",
    location: "Vancouver, BC",
    pay: "$20–$23/hr",
    posted: "Today",
    category: "Customer Service",
  },
  {
    title: "Forklift Operator",
    company: "TransPac Logistics",
    type: "Temporary",
    location: "Edmonton, AB",
    pay: "$22–$26/hr",
    posted: "5 days ago",
    category: "Warehouse",
  },
];

export default function Jobs() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? jobs : jobs.filter((j) => j.category === active);

  return (
    <section id="jobs" className="bg-white py-24 md:py-32">
      <div className="max-w-8xl mx-auto px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="text-gold-600 text-xs font-semibold tracking-wider uppercase">
              Current Opportunities
            </span>
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-navy-900 mt-4">
              Featured Job Listings
            </h2>
          </div>
          <a
            href="#"
            className="text-navy-900 font-semibold border-b-2 border-navy-900 pb-1 whitespace-nowrap"
          >
            View all openings &gt;
          </a>
        </div>

        <div className="flex flex-wrap gap-2 mt-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                active === f
                  ? "bg-navy-900 text-white"
                  : "bg-slate-100 text-slate-500 hover:bg-slate-200"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-5 mt-10">
          {filtered.map((job) => (
            <div
              key={job.title}
              className="border border-navy-900/10 p-7 hover:border-gold-500/50 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-serif font-bold text-xl text-navy-900">
                  {job.title}
                </h3>
                <span className="shrink-0 text-xs font-medium bg-slate-100 text-slate-500 px-3 py-1.5">
                  {job.type}
                </span>
              </div>
              <p className="text-slate-450 mt-1">{job.company}</p>

              <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4 text-sm text-slate-500">
                <span className="flex items-center gap-1.5">
                  <MapPin size={15} /> {job.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <DollarSign size={15} /> {job.pay}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={15} /> {job.posted}
                </span>
              </div>

              <div className="flex items-center justify-between mt-6">
                <span className="text-gold-600 font-semibold text-sm">
                  {job.category}
                </span>
                <a
                  href="#contact"
                  className="flex items-center gap-1.5 font-semibold text-navy-900 text-sm"
                >
                  Apply Now <ArrowRight size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
