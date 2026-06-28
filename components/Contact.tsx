"use client";

import { useState } from "react";
import { Mail, Phone } from "lucide-react";

type Role = "Employer" | "Job Seeker";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [role, setRole] = useState<Role>("Employer");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log("CLICKED"); // ✅ TEST LINE

    setSuccess("");
    setError("");

    if (!form.name || !form.email || !form.message) {
      setError("Please complete all fields.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          role,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setSuccess("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        message: "",
      });

      setRole("Employer");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to send message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

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
            Whether you're a job seeker exploring opportunities or an employer
            looking to build your team, our consultants are ready to help.
          </p>

          <div className="flex flex-col gap-5 mt-9">
            <div className="flex items-center gap-4">
              <span className="flex items-center justify-center w-11 h-11 border border-gold-500/50">
                <Phone className="text-gold-400" size={18} />
              </span>

              <div>
                <div className="text-slate-450 text-sm">Main Office</div>
                <div className="text-white font-semibold">
                  1-343-943-0860
                </div>
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
            <div className="text-slate-450 text-sm">
              Offices across Canada:
            </div>

            <div className="text-white mt-2">
              Toronto · Calgary · Vancouver · Ottawa · Edmonton · Halifax · Montréal
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 md:p-10 mt-16 lg:mt-0"
        >
          <label className="block">
            <span className="text-sm font-medium text-navy-900">
              Full Name
            </span>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
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
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="jane@company.com"
              className="mt-2 w-full border border-navy-900/15 bg-slate-50 px-4 py-3 text-navy-900 placeholder:text-slate-400 focus:outline-none focus:border-gold-500"
            />
          </label>

          <div className="mt-5">
            <span className="text-sm font-medium text-navy-900">
              I am a...
            </span>

            <div className="grid grid-cols-2 gap-0 mt-2">
              {(["Employer", "Job Seeker"] as const).map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setRole(r)}
                  className={`py-3 font-semibold border transition-colors ${
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
            <span className="text-sm font-medium text-navy-900">
              Message
            </span>

            <textarea
              rows={4}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your hiring needs or the role you're looking for..."
              className="mt-2 w-full border border-navy-900/15 bg-slate-50 px-4 py-3 text-navy-900 placeholder:text-slate-400 focus:outline-none focus:border-gold-500 resize-none"
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="mt-7 w-full bg-gold-500 text-navy-900 font-bold py-4 hover:bg-gold-400 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}