import { initialTickets } from "@/data";
import { Ticket } from "@/features/types";

export const getTickets = async (): Promise<Ticket[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  // throw new Error("Something went wrong");
  return new Promise((resolve) => {
    resolve(initialTickets);
  });
};
