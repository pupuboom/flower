import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const data = await request.json()
  console.log(data)
  return NextResponse.json({ code: 200 }, { status: 200 })
}
