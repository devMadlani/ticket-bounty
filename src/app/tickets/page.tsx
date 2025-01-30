import { Suspense } from "react";
import Heading from "@/components/Heading";
import Spinner from "@/components/Spinner";
import TicketList from "@/features/ticket/components/ticket-list";
import CardCompact from "@/components/card-compact";
import TicketUpsertForm from "@/features/ticket/components/ticket-upsert-form";

export default function TicketPage() {
  return (
    <div className="flex flex-col flex-1 gap-y-8">
      <Heading title="Tickets" description="All Your tickets at one place" />
      <CardCompact
        title="Create Ticket"
        description="A new ticket will be created."
        className="w-full max-w-[420px] self-center"
        content={<TicketUpsertForm />}
      />
      <Suspense fallback={<Spinner />}>
        <TicketList />
      </Suspense>
    </div>
  );
}
