import Link from "next/link";
import Heading from "@/components/Heading";
import CardCompact from "@/components/card-compact";
import TicketUpsertForm from "@/features/ticket/components/ticket-upsert-form";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading
        title="Home"
        description="Your Home place to start
"
      />
      <CardCompact
        title="Create Ticket"
        description="A new ticket will be created."
        className="w-full max-w-[420px] self-center"
        content={<TicketUpsertForm />}
      />

      <div className="flex-1 flex flex-col items-center">
        <Link href="/tickets" className="underline">
          Go to Tickets
        </Link>
      </div>
    </div>
  );
}
