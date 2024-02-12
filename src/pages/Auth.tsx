import { FormEvent, useState } from "react";

import { useHistory } from "react-router-dom";

import { JwtPayload, jwtDecode } from "jwt-decode";

import { useAppDispatch } from "@/store/store";

import { authActions } from "@/store/auth/authSlice";

import { login, register } from "@/api/auth";

import AuthForm from "@/components/auth/AuthForm";

interface userInputs {
  id?: number;
  username: string;
  password: string;
}

interface MyJWTPayload extends JwtPayload {
  authUser: loggedInUser;
}

interface loggedInUser {
  id: number;
  username: string;
  points: number;
}

interface ErrorResponse {
  response: {
    data: {
      error: string;
    };
  };
}

const Auth = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string>("");

  const authenticateHandler = async (
    e: FormEvent,
    inputs: userInputs,
    isLoginMode: boolean
  ) => {
    e.preventDefault();
    setIsSubmitting(true);

    const authInputs = {
      username: inputs.username,
      password: inputs.password,
    };

    try {
      let response;
      if (isLoginMode) {
        response = await login(authInputs);
      } else {
        response = await register(authInputs);
        if (response.message) {
          response = await login(authInputs);
        }
      }

      const authObject = jwtDecode(response.token) as MyJWTPayload;
      dispatch(authActions.setUser(authObject.authUser));
      history.replace("/books");
    } catch (error) {
      const errorResponse = error as ErrorResponse;
      setError(errorResponse.response.data.error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-md">
        <AuthForm
          onAuthenticate={authenticateHandler}
          error={error}
          isSubmitting={isSubmitting}
          clearError={() => setError("")}
        />
      </div>
    </div>
  );
};

export default Auth;
