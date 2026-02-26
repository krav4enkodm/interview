import { NextResponse } from 'next/server'
import { customers } from '@/lib/api-data'

export async function GET() {
  return NextResponse.json(customers)
}
