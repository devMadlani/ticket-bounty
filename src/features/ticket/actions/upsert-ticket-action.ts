"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export const upsertTicket = async (
  id: string | undefined,
  formdata: FormData
) => {
  const data = {
    // id: formdata.get("id"),
    title: formdata.get("title") as string,
    content: formdata.get("content") as string,
  };
  await prisma.ticket.upsert({
    where: { id: id || "" },
    update: data,
    create: data,
  });

  revalidatePath("/tickets");
  if (id) {
    redirect(`/tickets/${id}`);
  }
};
