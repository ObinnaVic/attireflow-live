import { useState } from "react";
import classes from "./Delivery.module.css";

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

function Delivery() {
  const [form, setForm] = useState({
    name: "",
    address: "",
    email: "",
    mobile: "",
  });

  const handleForm = (e, name) =>
    setForm((prevState) => ({ ...prevState, [name]: e.target.value }));

  const submitForm = (e) => {
    e.preventDefault();

    setForm({ name: "", address: "", email: "", mobile: "" });
  };

  return (
    <div className={classes.delivery_section}>
      <div className={classes.delivery_form}>
        <h2>Delivery Information</h2>
        <form onSubmit={(e) => submitForm(e)}>
          <div className={classes.form_group}>
            <label htmlFor="">Full Name</label>
            <Input
              name="name"
              type="text"
              value={form.name}
              handleForm={handleForm}
            />
          </div>
          <div className={classes.form_group}>
            <label htmlFor="">Address</label>
            <Input
              name="address"
              type="text"
              value={form.address}
              handleForm={handleForm}
            />
          </div>
          <div className={classes.form_group}>
            <label htmlFor="">Email</label>
            <Input
              name="email"
              type="text"
              value={form.email}
              handleForm={handleForm}
            />
          </div>
          <div className={classes.form_group}>
            <label htmlFor="">Mobile Number</label>
            <Input
              name="mobile"
              type="text"
              value={form.mobile}
              handleForm={handleForm}
            />
          </div>
          <button type="submit" className={classes.submit_btn}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Delivery;
