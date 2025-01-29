import { LucideSquareArrowOutUpRight, LucideTrash } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TICKET_ICONS } from "@/features/constants";
import { Ticket } from "@/features/types";
import { deleteTicket } from "../actions/delete-ticket";
type TicketItemProps = {
  ticket: Ticket;
  isDetail?: boolean;
};

const TicketItem = ({ ticket, isDetail }: TicketItemProps) => {
  const detailButton = (
    <Button variant="outline" size="icon" asChild>
      <Link prefetch href={`/tickets/${ticket.id}`} className="underline">
        <LucideSquareArrowOutUpRight />
      </Link>
    </Button>
  );
  const deleteButton = (
    <form action={deleteTicket.bind(null, ticket.id)}>
      <Button variant="outline" size="icon">
        <LucideTrash />
      </Button>
    </form>
  );
  return (
    <div
      className={`w-full flex gap-1 ${
        isDetail ? "max-w-[580px]" : "max-w-[420px]"
      }`}
    >
      <Card key={ticket.id} className="w-full">
        <CardHeader>
          <CardTitle className="flex gap-x-2">
            <span>{TICKET_ICONS[ticket.status]}</span>
            <span className=" truncate">{ticket.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <span className="line-clamp-3">{ticket.content}</span>
        </CardContent>
      </Card>
      <div className="flex flex-col gap-y-1">
        {isDetail ? deleteButton : detailButton}
      </div>
    </div>
  );
};

export default TicketItem;
