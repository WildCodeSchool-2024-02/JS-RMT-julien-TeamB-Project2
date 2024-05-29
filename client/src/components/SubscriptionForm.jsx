import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./SubscriptionForm.css";

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
    <div>
      <h2 className="titleNewsLetter">Newsletter</h2>
      <form className="emailSubscription" ref={form} onSubmit={sendEmail}>
        <input
          type="email"
          name="user_email"
          id="user_email"
          required
          placeholder="*Adresse e-mail"
        />
        <input className="buttonNewsLetter" type="submit" value="Send" />
      </form>
    </div>
  );
}

export default SubscriptionForm;
