import RectangleSelection from "@/components/RectangleSelection";
export default function Home() {
  return (
    <div className="font-sans w-full">
      <div className="flex flex-row w-3/4 gap-2">
        <RectangleSelection text="Create Ticket" direction="create" />
        <RectangleSelection text="List Tickets" direction="list" />
      </div>
    </div>
  );
}
