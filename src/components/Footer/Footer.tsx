import { LINKS } from "../../constants";
import { SocialLinkList } from "../common";

import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.pageFooter}>
      <ul className={styles.list}>
        {LINKS.map((link) => (
          <li key={link}>
            <a href={`#${link}`} className={styles.link}>
              {link}
            </a>
          </li>
        ))}
      </ul>

      <SocialLinkList containerClassName={styles.social} />

      <p className={styles.copyright}>
        &copy; 2023 Yurii Zarytskyi. All Rights Reserved
      </p>
    </footer>
  );
};
