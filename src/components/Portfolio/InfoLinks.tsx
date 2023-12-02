import styles from "./InfoLinks.module.scss";

interface InfoLinksProps {
  projectLinkGit: string | undefined;
  projectLinkLive: string | undefined;
}

const InfoLinks = ({ projectLinkGit, projectLinkLive }: InfoLinksProps) => {
  return (
    <div className={styles.modalLinksContainer}>
      {projectLinkGit && (
        <a
          href={projectLinkGit}
          rel="nofollow noopener noreferrer"
          target="_blank"
          className={styles.modalProjectLink}
        >
          GitHub
        </a>
      )}

      {projectLinkLive && (
        <a
          href={projectLinkLive}
          rel="nofollow noopener noreferrer"
          target="_blank"
          className={styles.modalProjectLink}
        >
          Live
        </a>
      )}
    </div>
  );
};

export default InfoLinks;
