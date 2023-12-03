import { LINKS } from "../../constants";
import { SocialLinkList } from "../common";
import AnimateInView from "../common/AnimateOnView/AnimateInView.tsx";

import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.pageFooter}>
      <AnimateInView width="100%">
        <ul className={styles.list}>
          {LINKS.map((link) => (
            <li key={link}>
              <a href={`#${link}`} className={styles.link}>
                {link}
              </a>
            </li>
          ))}
        </ul>
      </AnimateInView>

      <SocialLinkList containerClassName={styles.social} />

      <AnimateInView delay={0.2} width="100%">
        <p className={styles.copyright}>
          &copy; 2023 Yurii Zarytskyi. All Rights Reserved
        </p>
      </AnimateInView>
    </footer>
  );
};
