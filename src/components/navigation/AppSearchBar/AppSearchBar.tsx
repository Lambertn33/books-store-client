import { CiShoppingCart } from "react-icons/ci";

import { Badge } from "flowbite-react";

import AppSearchLogo from "./AppSearchLogo";

import AppSearchInput from "./AppSearchInput";

const AppSearchBar = () => {
  return (
    <div className="bg-gray-300 py-4 px-3">
      <div className="flex justify-between items-center">
        <AppSearchLogo />
        <AppSearchInput />

        <div className="relative">
          <CiShoppingCart size={35} />
          <div className="absolute right-[-6px] top-[-6px]">
            <Badge>0</Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppSearchBar;
