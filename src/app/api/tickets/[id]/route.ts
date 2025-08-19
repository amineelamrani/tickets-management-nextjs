import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Ticket from "@/models/ticketModel";

interface ticketData {
  name: string;
  content: string;
  severity: "low" | "medium" | "high";
  owner: string;
}

export async function GET(req: Request, { params }) {
  await dbConnect();
  const { id } = await params;
  const ticket = await Ticket.findById(id);
  return NextResponse.json({
    data: ticket,
  });
}
