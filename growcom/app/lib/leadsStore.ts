import fs from "node:fs";
import path from "node:path";

export type LeadStatus =
  | "Nuevo"
  | "Contactado"
  | "Reunión agendada"
  | "Propuesta enviada"
  | "Cerrado - ganado"
  | "Cerrado - perdido";

export const leadStatuses: LeadStatus[] = [
  "Nuevo",
  "Contactado",
  "Reunión agendada",
  "Propuesta enviada",
  "Cerrado - ganado",
  "Cerrado - perdido",
];

export type LeadRecord = {
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

type SupabaseLeadRow = {
  id: string;
  created_at: string;
  source: string;
  source_detail: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  company_activity: string;
  role: string;
  reason: string;
  message: string;
  status: LeadStatus;
  internal_notes: string | null;
};

const dataDir = path.join(process.cwd(), "data");
const leadsFile = path.join(dataDir, "leads.json");
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabaseEnabled = Boolean(supabaseUrl && supabaseServiceRoleKey);

function ensureStorage() {
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
  if (!fs.existsSync(leadsFile)) fs.writeFileSync(leadsFile, "[]", "utf8");
}

function readAllLeads(): LeadRecord[] {
  ensureStorage();
  const content = fs.readFileSync(leadsFile, "utf8");
  try {
    const parsed = JSON.parse(content) as LeadRecord[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeAllLeads(leads: LeadRecord[]) {
  ensureStorage();
  fs.writeFileSync(leadsFile, JSON.stringify(leads, null, 2), "utf8");
}

function mapSupabaseRow(row: SupabaseLeadRow): LeadRecord {
  return {
    id: row.id,
    createdAt: row.created_at,
    source: row.source,
    sourceDetail: row.source_detail,
    name: row.name,
    email: row.email,
    phone: row.phone,
    company: row.company,
    companyActivity: row.company_activity,
    role: row.role,
    reason: row.reason,
    message: row.message,
    status: row.status,
    internalNotes: row.internal_notes ?? "",
  };
}

async function supabaseRequest(endpoint: string, init: RequestInit): Promise<Response> {
  if (!supabaseUrl || !supabaseServiceRoleKey) {
    throw new Error("Supabase not configured");
  }
  return fetch(`${supabaseUrl}/rest/v1/${endpoint}`, {
    ...init,
    headers: {
      apikey: supabaseServiceRoleKey,
      Authorization: `Bearer ${supabaseServiceRoleKey}`,
      "Content-Type": "application/json",
      ...(init.headers ?? {}),
    },
    cache: "no-store",
  });
}

export async function listLeads(): Promise<LeadRecord[]> {
  if (supabaseEnabled) {
    try {
      const response = await supabaseRequest("leads?select=*&order=created_at.desc", { method: "GET" });
      if (response.ok) {
        const rows = (await response.json()) as SupabaseLeadRow[];
        return rows.map(mapSupabaseRow);
      }
      console.warn("[leads-store] Fallback to file storage (list)", await response.text());
    } catch (error) {
      console.warn("[leads-store] Fallback to file storage (list)", error);
    }
  }
  return readAllLeads().sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
}

export async function appendLead(
  lead: Omit<LeadRecord, "id" | "createdAt" | "status" | "internalNotes">
): Promise<LeadRecord> {
  if (supabaseEnabled) {
    try {
      const response = await supabaseRequest("leads", {
        method: "POST",
        headers: { Prefer: "return=representation" },
        body: JSON.stringify({
          source: lead.source,
          source_detail: lead.sourceDetail,
          name: lead.name,
          email: lead.email,
          phone: lead.phone,
          company: lead.company,
          company_activity: lead.companyActivity,
          role: lead.role,
          reason: lead.reason,
          message: lead.message,
          status: "Nuevo",
          internal_notes: "",
        }),
      });
      if (response.ok) {
        const created = (await response.json()) as SupabaseLeadRow[];
        if (created[0]) return mapSupabaseRow(created[0]);
      } else {
        console.warn("[leads-store] Fallback to file storage (append)", await response.text());
      }
    } catch (error) {
      console.warn("[leads-store] Fallback to file storage (append)", error);
    }
  }

  const leads = readAllLeads();
  const newLead: LeadRecord = {
    ...lead,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    status: "Nuevo",
    internalNotes: "",
  };
  leads.push(newLead);
  writeAllLeads(leads);
  return newLead;
}

export async function updateLead(
  id: string,
  updates: Partial<Pick<LeadRecord, "status" | "internalNotes">>
): Promise<LeadRecord | null> {
  if (supabaseEnabled) {
    try {
      const body: Record<string, string> = {};
      if (updates.status) body.status = updates.status;
      if (typeof updates.internalNotes === "string") body.internal_notes = updates.internalNotes;
      const response = await supabaseRequest(`leads?id=eq.${id}`, {
        method: "PATCH",
        headers: { Prefer: "return=representation" },
        body: JSON.stringify(body),
      });
      if (response.ok) {
        const rows = (await response.json()) as SupabaseLeadRow[];
        return rows[0] ? mapSupabaseRow(rows[0]) : null;
      }
      console.warn("[leads-store] Fallback to file storage (update)", await response.text());
    } catch (error) {
      console.warn("[leads-store] Fallback to file storage (update)", error);
    }
  }

  const leads = readAllLeads();
  const index = leads.findIndex((lead) => lead.id === id);
  if (index === -1) return null;

  const current = leads[index];
  leads[index] = {
    ...current,
    status: updates.status ?? current.status,
    internalNotes: updates.internalNotes ?? current.internalNotes,
  };
  writeAllLeads(leads);
  return leads[index];
}
