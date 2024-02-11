import { Card } from "flowbite-react";

interface TheCardProps {
  image?: string;
  children: React.ReactNode;
}

const TheCard = ({ children, image }: TheCardProps) => {
  return (
    <Card
      horizontal
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={image ? image : undefined}
    >
      {children}
    </Card>
  );
};

export default TheCard;
