"use client";
import React from "react";

export default function page() {
  const handleClick = async () => {
    const res = await fetch("/api/tickets", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log(data);
  };
  return (
    <div>
      <h1>Show Lists</h1>
      <button onClick={handleClick} className="hover:cursor-pointer">
        Click Me!
      </button>
    </div>
  );
}
