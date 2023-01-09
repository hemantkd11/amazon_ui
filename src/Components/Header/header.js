import React from "react";
import { SideMenu } from "../MenuBar";

import { Logo, Location, Language, SearchBar, ShoppingCart } from "./";
import Account from "./AccountDetails";

const AppHeader = () => {
  return (
    
    <div className="flexbox header-container">
      <Logo />
      <Location />
      <SearchBar />
      <Language />
      <Account />
      <ShoppingCart/>
    </div>
   
   
  );
};
export default AppHeader;
