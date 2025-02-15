import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const tickets = [
  {
    title: "Ticket 1",
    content: "This is first ticket from the database",
    status: "DONE" as const,
  },
  {
    title: "Ticket 2",
    content: "This is sencond ticket from the database",
    status: "OPEN" as const,
  },
  {
    title: "Ticket 3",
    content: "This is third ticket from the database",
    status: "IN_PROGRESS" as const,
  },
];
const seed = async () => {
  await prisma.ticket.deleteMany();
  await prisma.ticket.createMany({ data: tickets });
};

seed();
