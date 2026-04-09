"use client";

import { FormEvent, useState } from "react";

const recipients = [
  "joseloratamayo@growcom.es",
  "aitorbernal@growcom.es",
  "manuelfranco@growcom.es",
].join(",");

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    reason: "",
    message: "",
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Nuevo contacto web - ${form.company || form.name}`);
    const body = encodeURIComponent(
      [
        `Nombre: ${form.name}`,
        `Email: ${form.email}`,
        `Empresa: ${form.company}`,
        `Motivo de contacto: ${form.reason}`,
        "",
        "Necesidades / Contexto:",
        form.message,
      ].join("\n")
    );

    window.location.href = `mailto:${recipients}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-screen bg-[#edf6f9] px-4 py-14 text-[#0f172a] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-2xl border border-[#dfe7ef] bg-white p-7 shadow-[0_14px_40px_rgba(15,23,42,0.08)] sm:p-10">
        <h1 className="text-4xl font-black tracking-tight sm:text-5xl">Contacto</h1>
        <p className="mt-4 text-lg text-[#475569] sm:text-xl">
          Cuéntanos brevemente qué necesitas y por qué quieres contactar con Growcom.
        </p>

        <form onSubmit={onSubmit} className="mt-8 space-y-5">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-semibold text-[#1e293b]">
              Nombre completo
            </label>
            <input
              id="name"
              required
              value={form.name}
              onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
              className="w-full rounded-xl border border-[#cfd8e3] px-4 py-3 text-base outline-none transition focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-semibold text-[#1e293b]">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
              className="w-full rounded-xl border border-[#cfd8e3] px-4 py-3 text-base outline-none transition focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20"
              placeholder="tu@email.com"
            />
          </div>

          <div>
            <label htmlFor="company" className="mb-2 block text-sm font-semibold text-[#1e293b]">
              Empresa
            </label>
            <input
              id="company"
              required
              value={form.company}
              onChange={(e) => setForm((prev) => ({ ...prev, company: e.target.value }))}
              className="w-full rounded-xl border border-[#cfd8e3] px-4 py-3 text-base outline-none transition focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20"
              placeholder="Nombre de tu empresa"
            />
          </div>

          <div>
            <label htmlFor="reason" className="mb-2 block text-sm font-semibold text-[#1e293b]">
              ¿Por qué nos contactas?
            </label>
            <input
              id="reason"
              required
              value={form.reason}
              onChange={(e) => setForm((prev) => ({ ...prev, reason: e.target.value }))}
              className="w-full rounded-xl border border-[#cfd8e3] px-4 py-3 text-base outline-none transition focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20"
              placeholder="Ejemplo: automatización comercial, mejora operativa..."
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-semibold text-[#1e293b]">
              Necesidades / contexto
            </label>
            <textarea
              id="message"
              required
              value={form.message}
              onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
              rows={6}
              className="w-full rounded-xl border border-[#cfd8e3] px-4 py-3 text-base outline-none transition focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20"
              placeholder="Cuéntanos tu situación actual y lo que te gustaría conseguir."
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-xl bg-black px-6 py-3 text-base font-semibold text-white transition hover:bg-[#111]"
          >
            Enviar
            <span aria-hidden="true">→</span>
          </button>
        </form>
      </div>
    </main>
  );
}
