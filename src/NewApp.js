import React from "react";
import "./Styles/styles.css";
import './App.css';
import {BrowserRouter as Router ,Routes, Route ,Link} from 'react-router-dom'
import { AppHeader, useQuery } from "./Components";
import Card from "./Components/Header/Cart";
import Login from "./Components/Login";
import Address from "./Components/Address";
import Payment from "./Components/payment";
import OrderPage from "./Mainfile/orderpage";
import CheckoutPage from "./Components/checkoutPage";
import Signup from "./Components/Signup";
import Confirm from "./Components/confirm_page";
import View from "./Components/view_list";
import Home from "./Components/Home";
import Product from "./Components/Product";
import Footer from "./Components/footer";
import  SideMenu  from "./Components/MenuBar/SideMenu";

const NewApp = () => {
  const { query } = useQuery();
  console.log("Query", query);
  return (
    <div className="app-container">
      <div className="main-flex">
        <div> <AppHeader /></div>
       <div><SideMenu/></div>
      
      </div>
      
      <Router>
      <Routes>
        <Route path="/cart" element={<Card/>}/>
        <Route path='/' element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/address" element={<Address/>}/>
          <Route path='/payment' element={<Payment/>}/>
          <Route path='/order'  element={<OrderPage/>}/>
          <Route path='/checkout' element={<CheckoutPage/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path='/confirm' element={<Confirm/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route  path='/view' element={<View/>}/>
      </Routes>
      </Router>
      <Footer/>
    </div>
  );
};

export default NewApp;
