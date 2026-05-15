// src/app/api/keepalive/route.ts
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function GET(request: Request) {
  // 1. Security Check: Read the token from the URL
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");

  // Verify it matches your Vercel environment variable
  if (token !== process.env.CRON_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // 2. The Ping: A lightweight query to wake up the database
    const { data, error } = await supabase
      .from("user_progress")
      .select("id")
      .limit(1);

    if (error) throw error;

    // 3. Success Response
    return NextResponse.json({ 
      status: "Database is awake", 
      time: new Date().toISOString() 
    });

  } catch (error) {
    console.error("Keep-Alive Ping Failed:", error);
    return NextResponse.json({ error: "Database ping failed" }, { status: 500 });
  }
}
