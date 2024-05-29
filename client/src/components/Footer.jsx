import { Link } from "react-router-dom";
import SubscriptionForm from "./SubscriptionForm";

import facebookImg from "../assets/images/facebook.png";
import instagramImg from "../assets/images/instagram.png";
import youtubeImg from "../assets/images/youtube.png";
import logoGamingZone from "../assets/images/logoGamingZone.png";
import linkedinImg from "../assets/images/linkedin.png";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="iconSocial">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="iconFooter" src={facebookImg} alt="facebook" />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="iconFooter" src={instagramImg} alt="instagram" />
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="iconFooter" src={youtubeImg} alt="youtube" />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="iconFooter" src={linkedinImg} alt="linkedin" />
        </a>
      </div>
      <div>
        <Link to="/app">
          <img
            className="logoFooter"
            src={logoGamingZone}
            alt="gamingZoneLogo"
          />
        </Link>
      </div>
      <SubscriptionForm />
    </div>
  );
}

export default Footer;
