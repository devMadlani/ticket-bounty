"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import {
  ActionState,
  fromErrorToActionState,
  toActionState,
} from "@/components/form/utils/to-action-state";

const upsertTicketSchema = z.object({
  title: z.string().min(1).max(91),
  content: z.string().min(1).max(1024),
});

export const upsertTicket = async (
  id: string | undefined,
  _actionState: ActionState,
  formdata: FormData
) => {
  try {
    const data = upsertTicketSchema.parse({
      // id: formdata.get("id"),
      title: formdata.get("title"),
      content: formdata.get("content"),
    });
    await prisma.ticket.upsert({
      where: { id: id || "" },
      update: data,
      create: data,
    });
  } catch (error) {
    return fromErrorToActionState(error, formdata);
  }

  revalidatePath("/tickets");
  if (id) {
    redirect(`/tickets/${id}`);
  }
  return toActionState("SUCCESS", "Ticket Created");
};
