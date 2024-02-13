import { FC, MouseEventHandler } from "react";

import { CiShoppingCart } from "react-icons/ci";

import AppSearchLogo from "./AppSearchLogo";

import AppSearchInput from "./AppSearchInput";

import { TheBadge } from "@/UI";

interface AppSearchBarProps {
  onToggleCartModal: MouseEventHandler<HTMLDivElement>;
  cartItemsNumber: number
}

const AppSearchBar: FC<AppSearchBarProps> = ({ onToggleCartModal, cartItemsNumber }) => {
  return (
    <div className="bg-gray-300 py-4 px-3">
      <div className="flex justify-between items-center">
        <AppSearchLogo />
        <AppSearchInput />

        <div className="relative cursor-pointer" onClick={onToggleCartModal}>
          <CiShoppingCart size={35} />
          <div className="absolute right-[-6px] top-[-6px]">
            <TheBadge color="success" label={cartItemsNumber.toString()} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppSearchBar;
