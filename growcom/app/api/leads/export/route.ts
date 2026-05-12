import { NextResponse } from "next/server";
import * as XLSX from "xlsx";
import { listLeads } from "@/app/lib/leadsStore";

export const runtime = "nodejs";

export async function GET() {
  const leads = await listLeads();
  const headers = [
    "Fecha",
    "Origen",
    "Detalle origen",
    "Nombre",
    "Email",
    "Telefono",
    "Empresa",
    "Actividad empresa",
    "Rol",
    "Motivo",
    "Mensaje",
    "Estado",
    "Notas internas",
  ];

  const rows = leads.map((lead) => ({
    Fecha: lead.createdAt,
    Origen: lead.source,
    "Detalle origen": lead.sourceDetail,
    Nombre: lead.name,
    Email: lead.email,
    Telefono: lead.phone,
    Empresa: lead.company,
    "Actividad empresa": lead.companyActivity,
    Rol: lead.role,
    Motivo: lead.reason,
    Mensaje: lead.message,
    Estado: lead.status,
    "Notas internas": lead.internalNotes,
  }));

  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.json_to_sheet(rows, { header: headers });
  if (rows.length === 0) {
    XLSX.utils.sheet_add_aoa(
      worksheet,
      [[
        "Sin leads todavía. Cuando entren desde web/LinkedIn aparecerán aquí automáticamente.",
      ]],
      { origin: "A2" }
    );
  }

  worksheet["!cols"] = [
    { wch: 22 },
    { wch: 18 },
    { wch: 26 },
    { wch: 24 },
    { wch: 30 },
    { wch: 16 },
    { wch: 24 },
    { wch: 28 },
    { wch: 24 },
    { wch: 30 },
    { wch: 48 },
    { wch: 20 },
    { wch: 36 },
  ];
  worksheet["!autofilter"] = { ref: "A1:M1" };

  const lastRow = Math.max(rows.length + 1, 2);
  worksheet["!ref"] = `A1:M${lastRow}`;

  const summaryData = [
    ["Metrica", "Valor"],
    ["Total leads", leads.length],
    ["Nuevos", leads.filter((l) => l.status === "Nuevo").length],
    ["Contactados", leads.filter((l) => l.status === "Contactado").length],
    ["Reunión agendada", leads.filter((l) => l.status === "Reunión agendada").length],
    ["Propuesta enviada", leads.filter((l) => l.status === "Propuesta enviada").length],
    ["Cerrado - ganado", leads.filter((l) => l.status === "Cerrado - ganado").length],
    ["Cerrado - perdido", leads.filter((l) => l.status === "Cerrado - perdido").length],
  ];
  const summarySheet = XLSX.utils.aoa_to_sheet(summaryData);
  summarySheet["!cols"] = [{ wch: 24 }, { wch: 14 }];

  XLSX.utils.book_append_sheet(workbook, worksheet, "Leads");
  XLSX.utils.book_append_sheet(workbook, summarySheet, "Resumen");
  const buffer = XLSX.write(workbook, { type: "buffer", bookType: "xlsx" });

  return new NextResponse(buffer, {
    status: 200,
    headers: {
      "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "Content-Disposition": `attachment; filename="growcom-leads.xlsx"`,
      "Cache-Control": "no-store",
    },
  });
}
