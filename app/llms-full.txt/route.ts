import { buildLlmsText, textResponse } from "@/lib/llms";

export const dynamic = "force-static";

export async function GET() {
  return textResponse(await buildLlmsText({ full: true }));
}
