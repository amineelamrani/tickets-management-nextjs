import mongoose, { Schema, model } from "mongoose";

export interface TicketsInterface extends mongoose.Document {
  name: string;
  content: string;
  severity: "low" | "medium" | "high";
  owner: string;
}

const ticketSchema = new Schema<TicketsInterface>({
  name: { type: String, required: true },
  content: String,
  severity: String,
  owner: String,
});

const Ticket =
  mongoose.models.Ticket || model<TicketsInterface>("Ticket", ticketSchema);
export default Ticket;
