"use client";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { upsertTicket } from "../actions/upsert-ticket-action";
import { Ticket } from "@prisma/client";
import { LucideLoaderCircle } from "lucide-react";

type TicketUpsertFormProps = {
  ticket?: Ticket;
};
const TicketUpsertForm = ({ ticket }: TicketUpsertFormProps) => {
  const [isPending, startTransition] = useTransition();
  const upsertTicketAction = async (formdata: FormData) => {
    startTransition(async () => {
      await upsertTicket.bind(null, ticket?.id)(formdata);
    });
  };
  return (
    <form
      action={upsertTicketAction}
      className="flex flex-col "
      style={{ gap: "12px" }}
    >
      {/* <Input type="hidden" name="id" defaultValue={ticket?.id} /> */}
      <Label htmlFor="title">Title</Label>
      <Input id="title" name="title" type="text" defaultValue={ticket?.title} />
      <Label htmlFor="content">Contect</Label>
      <Textarea id="content" name="content" defaultValue={ticket?.content} />
      <Button disabled={isPending} type="submit">
        {isPending && (
          <LucideLoaderCircle className="mr-2 size-4 animate-spin" />
        )}
        {ticket ? "Update" : "Create"}
      </Button>
    </form>
  );
};

export default TicketUpsertForm;
