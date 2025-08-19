import Link from "next/link";
import React, { JSX } from "react";

interface TicketTypeInterface {
  name: string;
  content: string;
  severity: "low" | "medium" | "high";
  owner: string;
}

const TicketsListItems = ({ ticket }: TicketTypeInterface): JSX.Element => {
  return (
    <Link
      href={`/track/${ticket.name}`}
      className="w-full border-white border-2 rounded-xl p-5 hover:cursor-pointer hover:bg-foreground hover:text-background"
    >
      <h1>{ticket.name}</h1>
      <h3>Owner : {ticket.owner}</h3>
      <h2>Severity : {ticket.severity}</h2>
      <p>{ticket.content}</p>
    </Link>
  );
};

export default TicketsListItems;
