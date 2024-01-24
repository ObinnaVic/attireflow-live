import { useState } from "react";
import classes from "./Contact.module.css";


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


function Contact() {
  const [form, setForm] = useState({name: "", email: "", message: ""});

  const handleForm = (e, name) =>
    setForm((prevState) => ({ ...prevState, [name]: e.target.value }));

  const submitForm = (e) => {
    e.preventDefault();

    setForm({ name: "", email: "", message: "" });
  }


  return (
    <div className={classes.contact_section}>
      <div className="header-background">
        <div className={classes.contact_hero}>
          <h1>Contact Us</h1>
        </div>
      </div>
      <div className={classes.contact_form}>
        <h2>Contact Form</h2>
        <form onSubmit={(e) => submitForm(e)}>
          <div className={classes.form_group}>
            <Input
              placeholder="Enter Your Name"
              name="name"
              type="text"
              value={form.name}
              handleForm={handleForm}
            />
          </div>
          <div className={classes.form_group}>
            <Input
              placeholder="Enter Your Email"
              name="email"
              type="text"
              value={form.email}
              handleForm={handleForm}
            />
          </div>
          <div className={classes.form_group}>
            <Input
              placeholder="Enter Your Message"
              name="message"
              type="text"
              value={form.message}
              handleForm={handleForm}
            />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
