import React from "react";

interface TrackPageProps {
  params: {
    id: string; // dynamic param from the URL
  };
}

export default async function Page({ params }: TrackPageProps) {
  const { id } = await params;
  return (
    <div>
      <h1>Tracking ticket</h1>
      <h2>ID : {id}</h2>
    </div>
  );
}
