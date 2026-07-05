// src/app/api/keepalive/route.ts
export const dynamic = "force-dynamic"; // <-- THIS IS THE CRITICAL FIX

import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");

  if (token !== process.env.CRON_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { data, error } = await supabase
      .from("user_progress")
      .select("id")
      .limit(1);

    if (error) throw error;

    return NextResponse.json({ 
      status: "Database is awake", 
      time: new Date().toISOString() 
    });

  } catch (error) {
    console.error("Keep-Alive Ping Failed:", error);
    return NextResponse.json({ error: "Database ping failed" }, { status: 500 });
  }
}
