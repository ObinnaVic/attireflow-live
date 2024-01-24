import { useState, useEffect } from "react";
import classes from "./Checkout.module.css";
import { Link } from "react-router-dom"; 
import Cart from "components/Cart/Cart";
import Delivery from "components/DeliveryForm/Delivery";
import Order from "components/OrderForm/Order";


function Checkout() {

  return (
    <div className={classes.checkout_section}>
      <div className={classes.links}>
        <Link to="/">
          <p>Home </p>{" "}
        </Link>
        /
        <p>Check Out</p>
      </div>
      <div className={classes.checkoutDetails_section}>
        <section className={classes.left_section}>
          <div>
            {/*CART */}
            <Cart />
          </div>
            {/*delivery information */}
            <Delivery />
          {/* <div>
          </div> */}
        </section>
        <section className={classes.right_section}>
          {/*Order information */}
          <Order />
        </section>
      </div>
    </div>
  );
}

export default Checkout;
