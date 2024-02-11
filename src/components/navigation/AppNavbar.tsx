import {
  Button,
  Navbar,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";

import { NavLink } from "react-router-dom";

const AppNavbar = () => {
  return (
    <Navbar fluid rounded className="bg-gray-100 py-2">
      <div className="flex md:order-2">
        <Button>Authenticate</Button>
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
