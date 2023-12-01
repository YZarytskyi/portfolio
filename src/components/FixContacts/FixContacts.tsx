import { SocialLinkList } from "../common";

import styles from "./FixContacts.module.scss";

export const FixContacts = () => {
  return (
    <>
      <SocialLinkList containerClassName={styles.fixContacts} />

      <a
        href="mailto: zarytskyi222@gmail.com"
        target="_blank"
        rel="noopener noreferrer nofollow"
        className={styles.fixEmail}
      >
        zarytskyi222@gmail.com
      </a>
    </>
  );
};
