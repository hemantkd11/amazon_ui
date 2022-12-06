import React from "react";
import Dropdown from "../Dropdown/dropdown";

const Account = () => {
  return (
    <div className="sign-in-conatiner sing_in">
      <div className="User-name">Hello,sign in</div>
      <div className="sign-in_and_more">Account & list</div>
      <div>
        <Dropdown />
      </div>
    </div>
  );
};
export default Account;
