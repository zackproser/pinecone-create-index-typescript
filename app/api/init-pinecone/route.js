import { NextResponse } from "next/server";
import { getPinecone } from "./pinecone.js";

export async function GET(req) {
  const pinecone = await getPinecone();

  if (pinecone) {
    return new NextResponse(JSON.stringify({ success: true }), { status: 200 });
  }
}
