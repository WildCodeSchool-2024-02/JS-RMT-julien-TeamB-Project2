import { Link } from "react-router-dom";
import NewsLetter from "./NewsLetter";
import Social from "./Social";
import facebookImg from "../assets/images/facebook.png";
import instagramImg from "../assets/images/instagram.png";
import youtubeImg from "../assets/images/youtube.png";
import logoGamingZone from "../assets/images/logoGamingZone.png";
import linkedinImg from "../assets/images/linkedin.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footerContainer">
      <section className="iconSocial">
        <Social
          href="https://www.facebook.com"
          src={facebookImg}
          alt="facebook"
        />
        <Social
          href="https://www.instagram.com"
          src={instagramImg}
          alt="instagram"
        />
        <Social href="https://www.youtube.com" src={youtubeImg} alt="youtube" />
        <Social
          href="https://www.linkedin.com"
          src={linkedinImg}
          alt="linkedin"
        />
      </section>
      <section>
        <Link to="/app">
          <img
            className="logoFooter"
            src={logoGamingZone}
            alt="gamingZoneLogo"
          />
        </Link>
      </section>
      <NewsLetter />
    </footer>
  );
}

export default Footer;
