import "./FormStyles.css";

import React, { useState } from "react";

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/30ca8970-ac7e-11ed-a31e-753411848f80";

const Form = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <div className="form">
      <form
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
        target="_blank"
      >
        <input type="text" placeholder="Your name" name="name" />

        <input type="email" placeholder="Email" name="email" />

        <textarea rows="6" placeholder="Your message" name="message" />

        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
