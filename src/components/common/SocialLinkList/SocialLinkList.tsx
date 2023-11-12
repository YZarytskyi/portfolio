import { SOCIAL_LINKS } from "../../../constants";

import styles from "./SocialLinkList.module.scss";

interface SocialLinkListProps {
  containerClassName: string;
}

export const SocialLinkList = ({ containerClassName }: SocialLinkListProps) => {
  return (
    <ul className={containerClassName}>
      {SOCIAL_LINKS.map(({ link, name, icon }) => (
        <li key={name} className={styles.socialItem}>
          <a href={link} target="_blank" rel="noopener noreferrer nofollow">
            <svg className={styles.socialIcon}>
              <use href={icon}></use>
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
};
