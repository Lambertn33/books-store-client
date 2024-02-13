import { Card } from "flowbite-react";

interface TheCardProps {
  image?: string;
  children: React.ReactNode;
  isHorizontal: boolean;
  cardClasses?: string;
}

const TheCard = ({
  children,
  image,
  isHorizontal,
  cardClasses,
}: TheCardProps) => {
  return (
    <Card
      horizontal={isHorizontal}
      className={cardClasses ?? "max-w-sm"}
      imgAlt=""
      imgSrc={isHorizontal ? image : undefined}
    >
      {!isHorizontal && <img src={image} alt="" className="w-full h-[300px]" />}
      {children}
    </Card>
  );
};

export default TheCard;
