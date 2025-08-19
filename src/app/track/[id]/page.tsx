"use client";
import React, { useEffect, useState } from "react";

interface TrackPageProps {
  params: {
    id: string; // dynamic param from the URL
  };
}

interface TicketTypeform {
  name: string;
  content: string;
  severity: "low" | "medium" | "high";
  owner: string;
}

export default function Page({ params }: TrackPageProps) {
  const { id } = React.use(params);
  const [ticketdata, setTicketData] = useState<TicketTypeform | null>(null);

  useEffect(() => {
    const fetchTickets = async () => {
      const res = await fetch(`/api/tickets/${id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      console.log(data);
      setTicketData(data.data);
    };
    fetchTickets();
  }, []);

  return (
    <div>
      <h1>Tracking ticket</h1>
      <h2>ID : {id}</h2>
      {ticketdata !== null && (
        <div>
          <h1>Title : {ticketdata.name}</h1>
          <h2>Owner : {ticketdata.owner}</h2>
          <h3>Severity : {ticketdata.severity}</h3>
          <p>Description : {ticketdata.content}</p>
        </div>
      )}
    </div>
  );
}
