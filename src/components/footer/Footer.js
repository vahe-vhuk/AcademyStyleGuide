import "./Footer.css"


import InstaPng from "./logos/insta.png";
import TelegPng from "./logos/telegram.png";
import LinkPng from "./logos/linkedin.png";
import SitePng from "./logos/site.png";
import YoutubePng from "./logos/youtube.png";

function Footer() {
  return (
      <div className="footerComponent">
        <footer className="footer">
            <div className="waves">
              <div className="wave" id="wave1"></div>
              <div className="wave" id="wave2"></div>
              <div className="wave" id="wave3"></div>
              <div className="wave" id="wave4"></div>
            </div>
            <ul className="social-icon">
              <li className="social-icon__item"><a className="social-icon__link" href="https://picsartacademy.am/">
                  <img src={SitePng} alt="Insta"/>
                </a></li>
              <li className="social-icon__item"><a className="social-icon__link" href="https://www.linkedin.com/company/picsart-academy/mycompany/">
                  <img src={LinkPng} alt="Insta"/>
                </a></li>
              <li className="social-icon__item"><a className="social-icon__link" href="https://t.me/picsartacademy">
                  <img src={TelegPng} alt="Insta"/>
                </a></li>
              <li className="social-icon__item"><a className="social-icon__link" href="https://www.instagram.com/picsart__academy/">
                  <img src={InstaPng} alt="Insta"/>
                </a></li>
              <li className="social-icon__item"><a className="social-icon__link" href="https://www.youtube.com/channel/UCVUNqBJGDhXSEB9q4E96J3w">
                  <img src={YoutubePng} alt="Insta"/>
                </a></li>
            </ul>
            <ul className="menu">
              <li className="menu__item"><a className="menu__link" href="/">Home</a></li>
              <li className="menu__item"><a className="menu__link" href="/">About</a></li>
              <li className="menu__item"><a className="menu__link" href="/">Contact</a></li>

            </ul>
            <p>&copy;2021 Nadine Coelho | All Rights Reserved</p>
          </footer>
      </div>
  );
}


export default Footer;