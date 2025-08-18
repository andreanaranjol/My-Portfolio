import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

const db = process.env.MONGODB_DB as string;

export async function GET() {
  try {
    const client = await clientPromise;
    const database_ = client.db(db);
    const experience = await database_.collection("experience").find({}).toArray();

    return NextResponse.json(experience);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch experience" }, { status: 500 });
  }
}
