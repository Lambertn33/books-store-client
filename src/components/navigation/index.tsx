import { useState } from "react";

import { useAppSelector, RootState } from "@/store/store";

import AppNavbar from "./AppNavbar";

import AppSearchBar from "./AppSearchBar/AppSearchBar";

import CartModal from "../cart/CartModal";

const Navigation = () => {
  const [openModal, setOpenModal] = useState(false);

  const [makeOrderError, setMakeOrderError] = useState("");

  const toggleCartModalHandler = () => setOpenModal(true);

  const { items } = useAppSelector((state: RootState) => state.cart);

  return (
    <>
      <AppSearchBar
        onToggleCartModal={toggleCartModalHandler}
        cartItemsNumber={items.length}
      />
      <AppNavbar />

      <CartModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        makeOrderError={makeOrderError}
        setMakeOrderError={setMakeOrderError}
      />
    </>
  );
};

export default Navigation;
