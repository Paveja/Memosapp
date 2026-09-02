import { headers } from "next/headers";

export default async function HealthPage() {
  const requestId = (await headers()).get("x-request-id") ?? "local";
  return <main style={{ padding: 40, fontFamily: "monospace" }}><h1>FlowDesk health</h1><p>status: ok</p><p>requestId: {requestId}</p></main>;
}
