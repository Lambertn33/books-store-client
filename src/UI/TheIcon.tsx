import { ReactNode } from "react";

interface TheIconProps {
  icon: ReactNode;
  className: string;
}

const TheIcon = ({ icon, className }: TheIconProps) => {
  return <div className={`${className}`}>{icon}</div>;
};

export default TheIcon;
