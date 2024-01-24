import React from "react";
import classes from "./Cart.module.css";
import { useGlobalContext } from "/src/controller/context";

function Cart() {
    const { cart } = useGlobalContext();
    return (
        <div className={classes.cart_section}>
            <h3>Review Items</h3>
            <div>
                {cart.map((product) => {
                    const { image, name, price, amount, id } = product;
                    return (
                      <div key={id} className={classes.cart_product}>
                        <img src={image} alt="product" />
                        <h3>{name}</h3>
                        <div>
                          <p>&#x20A6; {price}</p>
                          <p>Quantity: {amount}</p>
                        </div>
                      </div>
                    );
                })}
            </div>
        <div>

        </div>
    </div>
    )
}

export default Cart;
