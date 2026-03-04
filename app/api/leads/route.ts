import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone } = await req.json()

    const webhookUrl = process.env.N8N_WEBHOOK_URL ?? "https://curran.app.n8n.cloud/webhook/laestancia"

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name ?? "",
        email: email ?? "",
        phone: phone ?? "",
        submittedAt: new Date().toISOString(),
        source: "Landing Page Popup",
      }),
    })

    if (!response.ok) {
      const text = await response.text()
      console.error("n8n webhook error:", text)
      return NextResponse.json({ error: "Failed to save" }, { status: 502 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Lead capture error:", err)
    return NextResponse.json({ error: "Internal error" }, { status: 500 })
  }
}
