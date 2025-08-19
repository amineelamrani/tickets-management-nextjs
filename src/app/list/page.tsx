"use client";
import TicketsListItems from "@/components/TicketsListItems";
import React, { useEffect, useState } from "react";

interface FormDataType {
  name: string;
  content: string;
  severity: "low" | "medium" | "high";
  owner: string;
}

export default function Page() {
  const [tickets, setTickets] = useState<FormDataType[] | null>(null);

  useEffect(() => {
    const fetchTickets = async () => {
      const res = await fetch("/api/tickets", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      // const data: Array<FormDataType> = await res.json();
      console.log(data);
      setTickets(data.data);
    };
    fetchTickets();
  }, []);

  return (
    <div className="w-full px-25 flex flex-col items-center">
      <h1 className="text-3xl font-black mb-5">Show Lists</h1>
      {tickets !== null && (
        <div className="w-full flex flex-col gap-3">
          {tickets.map((ticket, index) => (
            <TicketsListItems key={index} ticket={ticket} />
          ))}
        </div>
      )}
    </div>
  );
}
