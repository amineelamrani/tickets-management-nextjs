"use client";
import React, { useState } from "react";

interface FormDataType {
  name: string;
  content: string;
  severity: "low" | "medium" | "high";
  owner: string;
}

export default function Page() {
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    content: "",
    severity: "low",
    owner: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("/api/tickets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        content: formData.content,
        severity: formData.severity,
        owner: formData.owner,
      }),
    });
    const data = await res.json();
    console.log("Form submitted");
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="w-full flex flex-col gap-5 items-center">
      <h1 className="text-2xl font-bold">Create A Ticket</h1>
      <form
        onSubmit={handleSubmit}
        className="flex gap-2 flex-col w-full items-center"
      >
        <input
          type="text"
          name="name"
          placeholder="name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 w-105 rounded-xl"
        />
        <input
          type="text"
          name="content"
          placeholder="content"
          value={formData.content}
          onChange={handleChange}
          className="border p-2 w-105 rounded-xl"
        />
        <input
          type="text"
          name="severity"
          placeholder="severity"
          value={formData.severity}
          onChange={handleChange}
          className="border p-2 w-105 rounded-xl"
        />
        <input
          type="text"
          name="owner"
          placeholder="owner"
          value={formData.owner}
          onChange={handleChange}
          className="border p-2 w-105 rounded-xl"
        />
        <button
          type="submit"
          className="bg-foreground text-background px-4 py-2 rounded hover:cursor-pointer hover:bg-background hover:text-foreground"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
