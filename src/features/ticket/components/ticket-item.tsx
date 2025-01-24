import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "lucide-react";
import { TICKET_ICONS } from "@/features/constants";
import { Ticket } from "@/features/types";

type TicketItemProps = {
  ticket: Ticket;
};

const TicketItem = ({ ticket }: TicketItemProps) => {
  return (
    <div>
      <Card key={ticket.id} className="w-full max-w-[420px] ">
        <CardHeader>
          <CardTitle className="flex gap-x-2">
            <span>{TICKET_ICONS[ticket.status]}</span>
            <span className=" truncate">{ticket.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <span className="line-clamp-3">{ticket.content}</span>
        </CardContent>
        <CardFooter>
          <Link href={`/tickets/${ticket.id}`} className="underline">
            view
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default TicketItem;