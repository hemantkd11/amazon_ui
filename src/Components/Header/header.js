import React from "react";

import { Logo, Location, Language, SearchBar } from "./";
import Account from "./AccountDetails";

const AppHeader = () => {
  return (
    <div className="flexbox header-container">
      <Logo />
      <Location />
      <SearchBar />
      <Language />
      <Account />
    </div>
  );
};
export default AppHeader;
