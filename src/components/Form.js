import "./FormStyles.css";

import React, { useState } from "react";

const Form = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const changeHandler = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const config = {
      username: "candide23@yopmail.com",
      password: "E8E170B768548FDAC8299BFB4732D9304F7E",
      host: "2525",
      to: "candide23@yopmail.com",
      from: formState.email,
      subject: formState.subject,
      body: `${formState.name}\n\n${formState.message}`,
    };

    if (window.Email) {
      window.Email.send(config).then(() => {
        alert("Email sent successfully");
      });
    }
  };

  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <label>Your Name</label>
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={changeHandler}
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={changeHandler}
        />
        <label>Subject</label>
        <input
          type="text"
          name="subject"
          value={formState.subject}
          onChange={changeHandler}
        />
        <label>Message</label>
        <textarea
          rows="6"
          name="message"
          value={formState.message}
          onChange={changeHandler}
        />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;


/*import React, { useState } from "react";

const Form = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const changeHandler = (event) => {
    setFormState.name({
      ...formState,
      [event.target.name]: event.target.value,
    });
    setFormState.email({
      ...formState,
      [event.target.email]: event.target.value,
    });
    setFormState.subject({
      ...formState,
      [event.target.subject]: event.target.value,
    });
    setFormState.message({
      ...formState,
      [event.target.message]: event.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const config = {
      Username: "candide23@yopmail.com",
      Password: "E8E170B768548FDAC8299BFB4732D9304F7E",
      Host: "2525",
      To: "candide23@yopmail.com",
      From: formState.email,
      Subject: "This is the subject",
      Body: `${formState.name}`,
    };

    if (window.Email) {
      window.Email.send(config).then(() => alert
      ("email sent successfully")

      );
    }
  };
  return (
    <div className="form" onSubmit={submitHandler}>
      <form>
        <label>Your Name</label>
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={changeHandler}
        ></input>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={changeHandler}
        ></input>
        <label>Subject</label>
        <input
          type="text"
          name="subject"
          value={formState.subject}
          onChange={changeHandler}
        ></input>
        <label>Message</label>
        <input
          type="text"
          name="subject"
          value={formState.message}
          onChange={changeHandler}
        ></input>
        <textarea rows="6" placeholder="Type your message here" />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;*/
