import { Children } from "react";
import { useActionFeedback } from "./form/hooks/useActionFeedback";
import { toast } from "sonner";
import { ActionState } from "./form/utils/to-action-state";

type FormProps = {
  action: (payload: FormData) => void;
  actionState: ActionState;
  children: React.ReactNode;
};

export const Form = ({ action, actionState, children }: FormProps) => {
  useActionFeedback(actionState, {
    onSuccess: ({ actionState }) => {
      if (actionState.message) toast.success(actionState.message);
    },
    onError: ({ actionState }) => {
      if (actionState.message) toast.error(actionState.message);
    },
  });
  return (
    <form action={action} className="flex flex-col " style={{ gap: "12px" }}>
      {children}
    </form>
  );
};
