const BACKEND_URL = process.env.BACKEND_URL ?? "http://localhost:3000";

type ChatRequestBody = {
  prompt: string;
  sessionId?: string;
};

// ponytail: server-side proxy, want de backend stuurt geen CORS-headers mee
export async function POST(request: Request) {
  const body: ChatRequestBody = await request.json();

  try {
    const backendResponse = await fetch(`${BACKEND_URL}/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await backendResponse.json();
    return Response.json(data, { status: backendResponse.status });
  } catch {
    return Response.json({ error: "Kan de backend niet bereiken" }, { status: 502 });
  }
}
