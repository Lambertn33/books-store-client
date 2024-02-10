import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

import logoImg from "../assets/images/logo.png";

const AppNavbar = () => {
  return (
    <Navbar fluid rounded>
      <NavbarBrand href="https://flowbite-react.com">
        <img
          src={logoImg}
          className="mr-3 h-6 sm:h-9"
          alt=""
        />
        <span className="self-center whitespace-nowrap text-2xl text-primary font-semibold dark:text-white">
          Book store
        </span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button>Authenticate</Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink href="#">About</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};

export default AppNavbar;
