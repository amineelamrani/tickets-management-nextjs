import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Ticket from "@/models/ticketModel";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  await dbConnect();
  const { id } = await params;
  const ticket = await Ticket.findById(id);
  return NextResponse.json({
    data: ticket,
  });
}
