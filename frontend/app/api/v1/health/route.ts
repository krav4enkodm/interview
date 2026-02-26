import { NextResponse } from "next/server";
import { healthSchema } from "@/lib/api-schemas";

export async function GET() {
  return NextResponse.json(healthSchema.parse({ status: "ok" }));
}
