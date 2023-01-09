import React from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import { useNavigator } from "react-router-dom";
import { useStateValue } from "../../context";

const ShoppingCart = ()=>{

    const[{basket}] = useStateValue()
    // const Navigate = useNavigator()
    return(<div>
         <div className="basket-Btn" >

            <span className="cart"> <AddShoppingCartIcon></AddShoppingCartIcon></span>
                     {/* <img src="./ShopCart.jpg" /> */}
                     {basket.length}
                 </div>
    </div>)
}
export  default ShoppingCart