import styles from "./FooterStyles.module.css";
import { FaFacebook, FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialGooglePlus } from "react-icons/ti";
const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.inputWrapper}>
          <input type="text" placeholder="Enter your email to subscribe..." />
          <button className={styles.subscribe}>Subscribe</button>
          <div className={styles.socialIcons}>
            <button>
              <FaFacebook className={styles.icon} />
            </button>
            <button>
              <FaXTwitter className={styles.icon} />
            </button>
            <button>
              <TiSocialGooglePlus className={styles.icon} />
            </button>
            <button>
              <FaPinterest className={styles.icon} />
            </button>
          </div>
        </div>
        <p>Copyright 2024 Yudah Tech. All rights reserved</p>
      </div>
    </section>
  );
};
export default Footer;
