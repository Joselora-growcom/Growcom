"use client";

import { FormEvent, useState } from "react";
import { useI18n } from "../i18n/LanguageProvider";

const recipients = [
  "joseloratamayo@growcom.es",
  "aitorbernal@growcom.es",
  "manuelfranco@growcom.es",
].join(",");

export default function ContactPage() {
  const { t } = useI18n();
  const c = t.contact;
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    reason: "",
    message: "",
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(`${c.mailSubject} - ${form.company || form.name}`);
    const body = encodeURIComponent(
      [
        `${c.name}: ${form.name}`,
        `${c.email}: ${form.email}`,
        `${c.mailCompany}: ${form.company}`,
        `${c.mailReason}: ${form.reason}`,
        "",
        `${c.mailNeeds}:`,
        form.message,
      ].join("\n"),
    );

    window.location.href = `mailto:${recipients}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-screen bg-[#edf6f9] px-4 py-14 text-[#0f172a] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-2xl border border-[#dfe7ef] bg-white p-7 shadow-[0_14px_40px_rgba(15,23,42,0.08)] sm:p-10">
        <h1 className="text-4xl font-black tracking-tight sm:text-5xl">{c.title}</h1>
        <p className="mt-4 text-lg text-[#475569] sm:text-xl">{c.sub}</p>

        <form onSubmit={onSubmit} className="mt-8 space-y-5">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-semibold text-[#1e293b]">
              {c.name}
            </label>
            <input
              id="name"
              required
              value={form.name}
              onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
              className="w-full rounded-xl border border-[#cfd8e3] px-4 py-3 text-base outline-none transition focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20"
              placeholder={c.namePlaceholder}
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-semibold text-[#1e293b]">
              {c.email}
            </label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
              className="w-full rounded-xl border border-[#cfd8e3] px-4 py-3 text-base outline-none transition focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20"
              placeholder={c.emailPlaceholder}
            />
          </div>

          <div>
            <label htmlFor="company" className="mb-2 block text-sm font-semibold text-[#1e293b]">
              {c.company}
            </label>
            <input
              id="company"
              required
              value={form.company}
              onChange={(e) => setForm((prev) => ({ ...prev, company: e.target.value }))}
              className="w-full rounded-xl border border-[#cfd8e3] px-4 py-3 text-base outline-none transition focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20"
              placeholder={c.companyPlaceholder}
            />
          </div>

          <div>
            <label htmlFor="reason" className="mb-2 block text-sm font-semibold text-[#1e293b]">
              {c.reason}
            </label>
            <input
              id="reason"
              required
              value={form.reason}
              onChange={(e) => setForm((prev) => ({ ...prev, reason: e.target.value }))}
              className="w-full rounded-xl border border-[#cfd8e3] px-4 py-3 text-base outline-none transition focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20"
              placeholder={c.reasonPlaceholder}
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-semibold text-[#1e293b]">
              {c.message}
            </label>
            <textarea
              id="message"
              required
              value={form.message}
              onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
              rows={6}
              className="w-full rounded-xl border border-[#cfd8e3] px-4 py-3 text-base outline-none transition focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20"
              placeholder={c.messagePlaceholder}
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-xl bg-black px-6 py-3 text-base font-semibold text-white transition hover:bg-[#111]"
          >
            {c.submit}
            <span aria-hidden="true">→</span>
          </button>
        </form>
      </div>
    </main>
  );
}
