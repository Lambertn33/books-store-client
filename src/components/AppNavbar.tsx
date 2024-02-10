import {
  Button,
  Navbar,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

const AppNavbar = () => {
  return (
    <Navbar fluid rounded className="bg-gray-100 py-2">
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
