import Placeholder from "@/components/Placeholder";
import { Button } from "@/components/ui/button";
import { initialTickets } from "@/data";
import Link from "next/link";

type TicketPageProps = {
  params: {
    ticketId: string;
  };
};

export default function TicketPage({ params }: TicketPageProps) {
  const ticket = initialTickets.find((ticket) => ticket.id === params.ticketId);
  if (!ticket)
    return (
      <Placeholder
        label="Ticket not found"
        button={
          <Button asChild variant="outline">
            <Link href="/tickets">Back to tickets</Link>
          </Button>
        }
      />
    );
  return (
    <div>
      <h2 className="text-xl">{ticket.title}</h2>
      <h2 className="text-sm">{ticket.content}</h2>
    </div>
  );
}
