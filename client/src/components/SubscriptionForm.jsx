import  { useState } from 'react';
import { Link } from "react-router-dom";
import './SubscriptionForm.css';


import facebookImg from "../assets/images/facebook.png";
import instagramImg from "../assets/images/instagram.png";
import youtubeImg from "../assets/images/youtube.png";
import logoFooter from "../assets/images/logoFooter.png";


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
    <div className='footerContainer'>
      <div className='iconSocial'>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img className='iconFooter' src={facebookImg} alt="facebook"/>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img className='iconFooter' src={instagramImg} alt="instagram" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <img className='iconFooter' src={youtubeImg} alt="youtube" />
          </a>  
      </div>
      <div>
        <Link to="/app">
          <img className='logoFooter' src={logoFooter} alt="gamingZoneLogo" />
        </Link>
      </div>
      <div>
      <h2 className='titleNewsLetter'>Newsletter</h2>
      <form className='emailSubscription' onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </form>
      {message && <p className='messageNewsLetter'>{message}</p>}
      </div>
    </div>
  );
};

export default SubscriptionForm;

