import { Link } from "react-router-dom";
import FooterLogo from "../../assets/images/footerLogo/small_logo.png";
import FacebookCricle from "../icons/facebook.icon.component";
import TwitterIcon from "../icons/twitter.icon.component";
import InstagramIcon from "../icons/instagram.icon.component";
import YoutubeIcon from "../icons/youtube.icon.component";
import styles from "./footer.module.css";

const FooterComponent = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["frame131"]}>
        <img
          className={styles["footerLogo"]}
          src={FooterLogo}
          alt="FooterLogo"
        />
        <div className={styles["frame151"]}>
          <div className={styles["frame1511"]}>
            <span className={styles["text021"]}>
              <h4>Contact Us</h4>
              <address>
                <li>
                  <a href="tel:+47123123123">123 123 123</a>
                </li>
                <li>
                  <a href="mailto:info@littlelemon.com">info@littlelemon.com</a>
                </li>
                <li>12 Karl Johans Gate, Oslo</li>
              </address>
              <h4>Sitemap</h4>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/menu">Menu</a>
                </li>
                <li>
                  <a href="/reservations">Reservations</a>
                </li>
                <li>
                  <a href="/order-online">Order Online</a>
                </li>
                <li>
                  <a href="/login">Login</a>
                </li>
              </ul>
              <h4>Follow Us</h4>
              <ul className={styles["socialMedia"]}>
                <li>
                  <Link to="https://facebook.com">
                    <i>
                      <FacebookCricle />
                    </i>
                  </Link>
                </li>
                <li>
                  <Link to="https://twitter.com">
                    <TwitterIcon />
                  </Link>
                </li>
                <li>
                  <Link to="https://instagram.com">
                    <InstagramIcon />
                  </Link>
                </li>
                <li>
                  <Link to="https://youtube.com">
                    <YoutubeIcon />
                  </Link>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
