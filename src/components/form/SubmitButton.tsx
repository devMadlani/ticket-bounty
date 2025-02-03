import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { LucideLoaderCircle } from "lucide-react";

export const SubmitButton = ({ label }: { label: string }) => {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} type="submit">
      {pending && <LucideLoaderCircle className="mr-2 size-4 animate-spin" />}

      {label}
    </Button>
  );
};
