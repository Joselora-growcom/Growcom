import { NextResponse } from "next/server";
import { listLeads } from "@/app/lib/leadsStore";

export const runtime = "nodejs";

export async function GET() {
  return NextResponse.json({ ok: true, leads: await listLeads() });
}
