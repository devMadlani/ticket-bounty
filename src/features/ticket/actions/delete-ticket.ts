"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
export const deleteTicket = async (id: string) => {
  await prisma.ticket.delete({ where: { id } });
  revalidatePath("/tickets");
  redirect("/tickets");
};
