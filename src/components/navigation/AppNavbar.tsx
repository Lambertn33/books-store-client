import {
  Avatar,
  Button,
  Dropdown,
  Navbar,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";

import { useAppSelector, useAppDispatch } from "@/store/store";

import { authActions } from "@/store/auth/authSlice";

import { NavLink, Link } from "react-router-dom";

const AppNavbar = () => {
  const dispatch = useAppDispatch();

  const { user, isAuthenticated } = useAppSelector((state) => state.auth);

  const logoutHandler = () => dispatch(authActions.logout());

  return (
    <Navbar fluid rounded className="bg-gray-100 py-2">
      <div className="flex md:order-2">
        {
          !isAuthenticated ?
          <Button as={Link} to="/auth">Authenticate</Button> :
          <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">{user?.username}</span>
            <span className="block truncate text-sm font-medium">{user?.points} points</span>
          </Dropdown.Header>
          <Dropdown.Item>My Profile</Dropdown.Item>
          <Dropdown.Item>My Orders</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={logoutHandler}>Sign out</Dropdown.Item>
        </Dropdown>
        }
        <NavbarToggle />
      </div>
      
      <NavbarCollapse>
        <NavLink to="/">
          Home
        </NavLink>
        <NavLink to="/books">Books Store</NavLink>
      </NavbarCollapse>
    </Navbar>
  );
};

export default AppNavbar;
