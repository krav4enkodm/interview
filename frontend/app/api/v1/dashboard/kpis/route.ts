import { NextResponse } from 'next/server'
import { dashboardKpis } from '@/lib/api-data'

export async function GET() {
  return NextResponse.json(dashboardKpis)
}
