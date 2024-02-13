import { ReactNode, MouseEventHandler } from "react";

interface TheIconProps {
  icon: ReactNode;
  className: string;
  onClick?: MouseEventHandler<HTMLDivElement>
}

const TheIcon = ({ icon, className, onClick }: TheIconProps) => {
  return <div className={`${className}`} onClick={onClick}>{icon}</div>;
};

export default TheIcon;
