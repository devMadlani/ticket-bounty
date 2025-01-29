"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
export const createTicket = async (FormData: FormData) => {
  const data = {
    title: FormData.get("title"),
    content: FormData.get("content"),
  };
  console.log(data);

  await prisma.ticket.create({
    data: {
      title: data.title as string,
      content: data.content as string,
    },
  });
  revalidatePath("/tickets");
};
