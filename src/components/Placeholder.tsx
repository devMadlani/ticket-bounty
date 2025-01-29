import { LucideMessageSquareWarning } from "lucide-react";
import { ComponentType } from "react";

type PlaceholderProps = {
  label: string;
  icon?: ComponentType<{ className?: string }>;
  button?: React.ReactNode;
};
const Placeholder = ({
  label,
  icon: Icon = LucideMessageSquareWarning,
  button = <div className="h-10" />,
}: PlaceholderProps) => {
  return (
    <div className="flex-1 self-center flex flex-col  items-center justify-center space-y-2">
      <Icon className="w-16 h-16" />
      <h2 className="text-center text-2xl ">{label}</h2>
      {button}
    </div>
  );
};

export default Placeholder;
