import { initialTickets } from "@/data";
import { Ticket } from "@/features/types";

export const getTicket = async (id: string): Promise<Ticket | null> => {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  const maybeTicket = initialTickets.find((ticket) => ticket.id === id);
  //   throw new Error("Something went wrong");
  return new Promise((resolve) => {
    resolve(maybeTicket || null);
  });
};
