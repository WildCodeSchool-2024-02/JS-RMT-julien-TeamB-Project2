import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Footer.css";
import "../App.css";

function SubscriptionForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      form.current,
      {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      }
    );
  };

  return (
    <section className="newsLetterContainer">
      <h2 className="newsLetterTitle">Newsletter</h2>
      <form className="newsLetterEmail" ref={form} onSubmit={sendEmail}>
        <input
          className="newsLetterMessage"
          type="email"
          name="user_email"
          id="user_email"
          required
          placeholder="*Adresse e-mail"
        />
        <input
          className="styleButton newsLetterButton"
          type="submit"
          value="Send"
        />
      </form>
    </section>
  );
}

export default SubscriptionForm;
