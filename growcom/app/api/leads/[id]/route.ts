import { NextResponse } from "next/server";
import { leadStatuses, updateLead } from "@/app/lib/leadsStore";

export const runtime = "nodejs";

type Payload = {
  status?: string;
  internalNotes?: string;
};

export async function PATCH(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const payload = (await request.json()) as Payload;
  const { id } = await context.params;

  const status =
    typeof payload.status === "string" && leadStatuses.includes(payload.status as (typeof leadStatuses)[number])
      ? (payload.status as (typeof leadStatuses)[number])
      : undefined;
  const internalNotes = typeof payload.internalNotes === "string" ? payload.internalNotes : undefined;

  const updated = await updateLead(id, { status, internalNotes });
  if (!updated) {
    return NextResponse.json({ ok: false, error: "Lead no encontrado." }, { status: 404 });
  }
  return NextResponse.json({ ok: true, lead: updated });
}
