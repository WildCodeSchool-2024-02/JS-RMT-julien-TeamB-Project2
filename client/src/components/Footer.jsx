import  { useState } from 'react';
import SubscriptionForm from './SubscriptionForm';



function Footer() {
  const [subscribers, setSubscribers] = useState([]);

  const handleSubscribe = (email) => {
    setSubscribers([...subscribers, email]);
  };

  return (
    <div>
      <SubscriptionForm onSubscribe={handleSubscribe} />
    </div>
  );
}

export default Footer;