import { Suspense } from "react";
import Heading from "@/components/Heading";
import Spinner from "@/components/Spinner";
import TicketList from "@/features/ticket/components/ticket-list";

export const dynamic = "force-dynamic";
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
