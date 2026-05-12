"use client";

import { useEffect, useState } from "react";

type LeadStatus =
  | "Nuevo"
  | "Contactado"
  | "Reunión agendada"
  | "Propuesta enviada"
  | "Cerrado - ganado"
  | "Cerrado - perdido";

type LeadRecord = {
  id: string;
  createdAt: string;
  source: string;
  sourceDetail: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  companyActivity: string;
  role: string;
  reason: string;
  message: string;
  status: LeadStatus;
  internalNotes: string;
};

const statuses: LeadStatus[] = [
  "Nuevo",
  "Contactado",
  "Reunión agendada",
  "Propuesta enviada",
  "Cerrado - ganado",
  "Cerrado - perdido",
];

export default function LeadsPage() {
  const [leads, setLeads] = useState<LeadRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [savingId, setSavingId] = useState<string | null>(null);

  async function loadLeads() {
    setLoading(true);
    const res = await fetch("/api/leads", { cache: "no-store" });
    const data = (await res.json()) as { leads: LeadRecord[] };
    setLeads(data.leads ?? []);
    setLoading(false);
  }

  useEffect(() => {
    void loadLeads();
  }, []);

  async function updateLead(id: string, updates: { status?: LeadStatus; internalNotes?: string }) {
    setSavingId(id);
    await fetch(`/api/leads/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates),
    });
    setSavingId(null);
    await loadLeads();
  }

  return (
    <main className="min-h-screen bg-[#f6f8fc] px-4 py-10 text-[#0f172a] sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-3xl font-black sm:text-4xl">Base de datos de leads</h1>
            <p className="mt-1 text-sm text-[#475569]">Entran aquí leads de web, LinkedIn y formularios conectados.</p>
          </div>
          <a
            href="/api/leads/export"
            className="inline-flex items-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-[#111]"
          >
            Descargar Excel
          </a>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[#d9e2ef] bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-[1200px] w-full text-sm">
              <thead className="bg-[#f2f5fb] text-left text-xs font-semibold uppercase tracking-wide text-[#334155]">
                <tr>
                  <th className="px-4 py-3">Fecha</th>
                  <th className="px-4 py-3">Origen</th>
                  <th className="px-4 py-3">Nombre</th>
                  <th className="px-4 py-3">Empresa</th>
                  <th className="px-4 py-3">Contacto</th>
                  <th className="px-4 py-3">Mensaje</th>
                  <th className="px-4 py-3">Estado</th>
                  <th className="px-4 py-3">Notas internas</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td className="px-4 py-6 text-[#64748b]" colSpan={8}>
                      Cargando leads...
                    </td>
                  </tr>
                ) : leads.length === 0 ? (
                  <tr>
                    <td className="px-4 py-6 text-[#64748b]" colSpan={8}>
                      Todavía no hay leads registrados.
                    </td>
                  </tr>
                ) : (
                  leads.map((lead) => (
                    <tr key={lead.id} className="border-t border-[#eef2f7] align-top">
                      <td className="px-4 py-3 text-[#475569]">{new Date(lead.createdAt).toLocaleString("es-ES")}</td>
                      <td className="px-4 py-3">
                        <div className="font-semibold">{lead.source}</div>
                        <div className="text-xs text-[#64748b]">{lead.sourceDetail}</div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="font-semibold">{lead.name}</div>
                        <div className="text-xs text-[#64748b]">{lead.role}</div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="font-semibold">{lead.company}</div>
                        <div className="text-xs text-[#64748b]">{lead.companyActivity}</div>
                      </td>
                      <td className="px-4 py-3 text-xs">
                        <div>{lead.email}</div>
                        <div className="text-[#64748b]">{lead.phone}</div>
                      </td>
                      <td className="px-4 py-3 text-xs text-[#334155]">
                        <div className="max-w-[320px] whitespace-pre-wrap">{lead.message}</div>
                      </td>
                      <td className="px-4 py-3">
                        <select
                          value={lead.status}
                          onChange={(event) => {
                            void updateLead(lead.id, { status: event.target.value as LeadStatus });
                          }}
                          className="rounded-lg border border-[#cbd5e1] px-2 py-1 text-xs"
                        >
                          {statuses.map((status) => (
                            <option key={status} value={status}>
                              {status}
                            </option>
                          ))}
                        </select>
                        {savingId === lead.id ? <p className="mt-1 text-[11px] text-[#64748b]">Guardando...</p> : null}
                      </td>
                      <td className="px-4 py-3">
                        <textarea
                          defaultValue={lead.internalNotes}
                          rows={3}
                          placeholder="Notas internas..."
                          className="w-[240px] rounded-lg border border-[#cbd5e1] px-2 py-1 text-xs"
                          onBlur={(event) => {
                            void updateLead(lead.id, { internalNotes: event.target.value });
                          }}
                        />
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
