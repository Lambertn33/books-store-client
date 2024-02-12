import { FC, FormEvent, useState } from "react";

import { TheTextInput, TheAlert } from "@/UI";

import { Button, Card } from "flowbite-react";

interface userInterface {
  id?: number;
  username: string;
  password: string;
}

interface AuthFormProps {
  onAuthenticate(
    e: FormEvent,
    userInputs: userInterface,
    isLoginMode: boolean
  ): void;
  error: string;
  isSubmitting: boolean;
  clearError: () => void;
}

const AuthForm: FC<AuthFormProps> = ({
  onAuthenticate,
  error,
  isSubmitting,
  clearError,
}) => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [userInputs, setUserInputs] = useState<userInterface>({
    username: "",
    password: "",
  });

  const changeInputHandler = (input: string, value: string) => {
    setUserInputs((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  const toggleMode = () => setIsLoginMode(!isLoginMode);

  const hasError = error.trim().length > 0;

  const submitForm = (e: FormEvent) => {
    onAuthenticate(e, userInputs, isLoginMode);
  };

  return (
    <div>
      <Card className="max-w-sm">
        <form
          onSubmit={submitForm}
          className="flex max-w-full sm:max-w-full md:max-w-[100%] mx-auto flex-col gap-4 bg-gray-200 p-8 rounded-md"
        >
          {hasError && (
            <TheAlert
              color="failure"
              message={error}
              onDismiss={() => clearError()}
            />
          )}
          <div className="flex flex-col">
            <h2 className="font-semibold text-xl">
              Sign {isLoginMode ? "in" : "up"}
            </h2>
          </div>

          <TheTextInput
            id="username"
            label="Your username"
            type="text"
            value={userInputs.username}
            onChange={(e) => changeInputHandler("username", e.target.value)}
          />

          <TheTextInput
            id="password"
            label="Your password"
            type="password"
            value={userInputs.password}
            onChange={(e) => changeInputHandler("password", e.target.value)}
          />

          <Button
            gradientMonochrome="success"
            type="submit"
            disabled={isSubmitting}
          >
            <span className="font-bold">
              {isSubmitting
                ? "Please wait..."
                : isLoginMode
                ? "Login"
                : "Register"}
            </span>
          </Button>

          <span
            onClick={toggleMode}
            className="text-xs cursor-pointer text-[#0e7490]"
          >
            {isLoginMode ? "No Account yet?" : "Already have an account?"}
          </span>
        </form>
      </Card>
    </div>
  );
};

export default AuthForm;
