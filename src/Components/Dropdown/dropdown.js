import React from "react";
import { useNavigate } from "react-router-dom";
const Dropdown = () => {
  // const navigate = useNavigate();
  // const goToSignUp =()=> {navigate({
  //   pathname:"/signup",
  //   search:"?page=registration"
  // })}
  return (
    <div className="Dropdown">
      <div className="btn Sign-in-dropdown">
        <a href="/signup" ><button>sign Up</button></a>
      {/* <button type="button" className="sign-in" onClick={goToSignUp}>Sign In</button> */}
    
     
      </div>
    </div>
  );
};

export default Dropdown;
