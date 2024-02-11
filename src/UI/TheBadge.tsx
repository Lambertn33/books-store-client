import { FC } from "react";

import { Badge } from "flowbite-react";

interface BadgeProps {
  label: string;
  color: string;
}

const TheBadge: FC<BadgeProps> = ({ label, color }) => {
  return <Badge color={color}>{label}</Badge>;
};

export default TheBadge;
