import Placeholder from "@/components/Placeholder";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <Placeholder
      label="Ticket not found"
      button={
        <Button asChild variant="outline">
          <Link href="/tickets">Go to tickets</Link>
        </Button>
      }
    />
  );
}
