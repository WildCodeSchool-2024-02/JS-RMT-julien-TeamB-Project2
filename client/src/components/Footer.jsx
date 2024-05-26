import  { useState } from 'react';
import SubscriptionForm from './SubscriptionForm';



function Footer() {
  const [subscribers, setSubscribers] = useState([]);

  const handleSubscribe = (email) => {
    setSubscribers([...subscribers, email]);
  };

  return (
      <SubscriptionForm onSubscribe={handleSubscribe} />
  );
}

export default Footer;