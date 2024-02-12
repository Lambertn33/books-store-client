import { FC } from "react";

import { Alert } from "flowbite-react";

interface TheAlertProps {
  color: "failure" | "success";
  message: string;
  onDismiss: () => void;
}

const TheAlert: FC<TheAlertProps> = ({ message, onDismiss, color }) => {
  return (
    <Alert color={color} withBorderAccent onDismiss={onDismiss}>
      <span className="font-bold">{message}</span>
    </Alert>
  );
};

export default TheAlert
