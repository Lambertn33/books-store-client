import { FC, ReactNode } from "react";

import { Route, Redirect, RouteProps } from "react-router-dom";

import { useAppSelector } from "@/store/store";

interface PrivateRouteProps extends RouteProps {
  children: ReactNode;
}

export const PrivateRoute: FC<PrivateRouteProps> = ({ children, ...rest }) => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/auth",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
