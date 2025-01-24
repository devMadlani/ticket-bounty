import { initialTickets } from "@/data";

import Heading from "@/components/Heading";
import TicketItem from "@/features/ticket/components/ticket-item";

export default function TicketPage() {
  return (
    <div className="flex flex-col flex-1 gap-y-8">
      <Heading title="Tickets" description="All Your tickets at one place" />
      <div className="flex flex-col flex-1 items-center gap-y-4 animate-fade-in-from-top">
        {initialTickets.map((ticket) => (
          <TicketItem key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
}
