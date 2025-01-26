import React from "react";
import { getTickets } from "../queries/get-tickets";
import TicketItem from "./ticket-item";

const TicketList = async () => {
  const ticket = await getTickets();
  return (
    <div className="flex flex-col flex-1 items-center w-full gap-4  animate-fade-in-from-top">
      {ticket.map((ticket) => (
        <TicketItem key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export default TicketList;
