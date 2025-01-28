import TicketItem from "@/features/ticket/components/ticket-item";
import { getTicket } from "@/features/ticket/queries/get-ticket";
import { notFound } from "next/navigation";

type TicketPageProps = {
  params: {
    ticketId: string;
  };
};

export default async function TicketPage({ params }: TicketPageProps) {
  const ticket = await getTicket(params.ticketId);
  if (!ticket) return notFound();
  return (
    <div className="flex justify-center items-center">
      <TicketItem ticket={ticket} isDetail={true} />
    </div>
  );
}
