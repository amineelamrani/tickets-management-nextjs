import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const filepath = path.join(process.cwd(), "src/data/data.json");
  const fileContents = fs.readFileSync(filepath, "utf-8");
  const data = JSON.parse(fileContents);

  return NextResponse.json({
    message: "first GET request from the server",
    data: data,
  });
}
