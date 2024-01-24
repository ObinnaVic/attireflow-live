import React, { useState, useEffect } from 'react'
import classes from "./Order.module.css";
import masterCard from "../../assets/masterCard.svg";
import Visa from "../../assets/Visa.svg";
import { useGlobalContext } from '/src/controller/context';

const Input = ({ placeholder, name, type, handleForm, value }) => {
  return (
    <input
      placeholder={placeholder}
      name={name}
      type={type}
      value={value}
      onChange={(e) => handleForm(e, name)}
    />
  );
};

function Order() {
    const [subtotal, setSubTotal] = useState(0);
    const [total, setTotal] = useState(1);
    const [twenty, setTwenty] = useState(0);
    const [form, setForm] = useState({
      name: "",
      card: "",
      date: "",
      cvv: "",
    });
    const { cart } = useGlobalContext();

     useEffect(() => {
       totalFunc();
     });

    const handleForm = (e, name) =>
      setForm((prevState) => ({ ...prevState, [name]: e.target.value }));

    const submitForm = (e) => {
      e.preventDefault();

      setForm({
        name: "",
        card: "",
        date: "",
        cvv: "",
      });
    };

    // FUNCTION TO CALCULATE TOTAL AND SUBTOTAL OF THE CART ITEMS
    const totalFunc = () => {
      let { total } = cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;
          cartTotal.total += itemTotal;
          return cartTotal;
        },
        {
          total: 0,
        }
      );
      setSubTotal(total);
      setTwenty(total * 20);
      setTotal(total * 20 + 3000);
    };


  return (
    <div className={classes.order_section}>
      <h3>Order Summary</h3>
      <div className={classes.cardDetails_section}>
        <form action="">
          <div>
            <input type="radio" name="cash" id="" />
            <span>Cash on Delivery</span>
          </div>
          <div>
            <input type="radio" name="card" id="" />
            <span>Debit Card</span>
          </div>
        </form>
        <div className={classes.svg}>
          <img src={masterCard} alt="mastercard" />
          <img src={Visa} alt="visa" />
        </div>
      </div>

      <div className={classes.form_section}>
        <form onSubmit={(e) => submitForm(e)}>
          <div className={classes.form_group}>
            <label htmlFor="">Card Holder Name</label>
            <Input
              name="name"
              type="text"
              value={form.name}
              handleForm={handleForm}
            />
          </div>
          <div className={classes.form_group}>
            <label htmlFor="">Card Number</label>
            <Input
              name="card"
              type="text"
              value={form.card}
              handleForm={handleForm}
            />
          </div>
          <div className={classes.orderForm}>
            <div className={classes.form_group}>
              <label htmlFor="">Expiry Date</label>
              <Input
                name="date"
                type="text"
                value={form.date}
                handleForm={handleForm}
              />
            </div>
            <div className={classes.form_group}>
              <label htmlFor="">Cvv</label>
              <Input
                name="cvv"
                type="text"
                value={form.cvv}
                handleForm={handleForm}
              />
            </div>
          </div>
        </form>
      </div>
      <div className={classes.total_section}>
        <h1>Sub Total</h1>
        <div>
          <p>Original Price</p>
          <p>{subtotal}</p>
        </div>
        <div>
          <p>20 pieces</p>
          <p>{twenty}</p>
        </div>
        <div>
          <p>Delivery</p>
          <p>3000</p>
        </div>
        <div>
          <p>Total</p>
          <p>{total}</p>
        </div>
        <button type="submit" className={classes.submit_btn}>
            Submit
        </button>
      </div>
    </div>
  );
}

export default Order