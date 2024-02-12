import { ChangeEvent, FC } from "react";

import { Label, TextInput } from "flowbite-react";

interface TheInputProps {
  id?: string;
  label?: string;
  value?: string;
  type?: string;
  additionalProps?: object;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const TheTextInput: FC<TheInputProps> = ({
  id,
  label,
  value,
  type,
  additionalProps,
  onChange,
}) => {
  return (
    <div>
      {label && (
        <div className="mb-2 block">
          <Label htmlFor={id} value={label} />
        </div>
      )}
      <TextInput
        id={id}
        type={type}
        required
        value={value}
        onChange={onChange}
        {...additionalProps}
      />
    </div>
  );
};
