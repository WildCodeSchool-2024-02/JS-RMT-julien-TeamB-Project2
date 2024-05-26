import  { useState } from 'react';
import './Footer.css';

function SubscriptionForm  ({ onSubscribe })  {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubscribe(email);
    setMessage('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <div className='footer'>
      <h2 className='titleNewsLetter'>Subscribe to our Newsletter</h2>
      <form className='emailSubscription' onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <button type="submit">Subscribe</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default SubscriptionForm;