import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filepath = path.join(process.cwd(), "src/data/data.json");

interface ticketData {
  name: string;
  content: string;
  severity: "low" | "medium" | "high";
  owner: string;
}

export async function GET() {
  const fileContents = fs.readFileSync(filepath, "utf-8");
  const data = JSON.parse(fileContents);

  return NextResponse.json({
    message: "first GET request from the server",
    data: data,
  });
}

export async function POST(request: Request) {
  const body: ticketData = await request.json();
  const fileContents = fs.readFileSync(filepath, "utf-8");
  const data = JSON.parse(fileContents);
  data.push(body);
  fs.writeFileSync(filepath, JSON.stringify(data, null, 2));
  return NextResponse.json({ message: "done successfully" });
}
