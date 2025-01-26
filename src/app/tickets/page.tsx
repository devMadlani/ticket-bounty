import Heading from "@/components/Heading";
import { Suspense } from "react";
import TicketList from "@/features/ticket/components/ticket-list";
import Spinner from "@/components/Spinner";

export default function TicketPage() {
  return (
    <div className="flex flex-col flex-1 gap-y-8">
      <Heading title="Tickets" description="All Your tickets at one place" />
      <Suspense fallback={<Spinner />}>
        <TicketList />
      </Suspense>
    </div>
  );
}
