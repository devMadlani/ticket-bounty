"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { upsertTicket } from "../actions/upsert-ticket-action";
import { Ticket } from "@prisma/client";
import { useActionState } from "react";
import { FieldError } from "@/components/form/fieldError";
import { SubmitButton } from "@/components/form/SubmitButton";
import { EMPTY_ACTION_STATE } from "@/components/form/utils/to-action-state";
import { useActionFeedback } from "@/components/form/hooks/useActionFeedback";
import { toast } from "sonner";
import { Form } from "@/components/form";
type TicketUpsertFormProps = {
  ticket?: Ticket;
};

const TicketUpsertForm = ({ ticket }: TicketUpsertFormProps) => {
  const [actionState, action] = useActionState(
    upsertTicket.bind(null, ticket?.id),
    EMPTY_ACTION_STATE
  );

  return (
    <Form action={action} actionState={actionState}>
      {/* <Input type="hidden" name="id" defaultValue={ticket?.id} /> */}
      <Label htmlFor="title">Title</Label>
      <Input id="title" name="title" type="text" defaultValue={ticket?.title} />
      <FieldError actionState={actionState} name="title" />

      <Label htmlFor="content">Contect</Label>
      <Textarea id="content" name="content" defaultValue={ticket?.content} />
      <FieldError actionState={actionState} name="content" />
      <SubmitButton label={ticket ? "Update" : "Create"} />
      {actionState.message}
    </Form>
  );
};

export default TicketUpsertForm;
