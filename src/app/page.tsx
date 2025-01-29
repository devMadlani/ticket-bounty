import Link from "next/link";
import Heading from "@/components/Heading";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading
        title="Home"
        description="Your Home place to start
"
      />

      <div className="flex-1 flex flex-col items-center">
        <Link href="/tickets" className="underline">
          Go to Tickets
        </Link>
      </div>
    </div>
  );
}
