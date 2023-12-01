import s from "../Portfolio.module.scss";

interface InfoLinksProps {
  projectLinkGit: string;
  projectLinkLive?: string;
}

const InfoLinks = ({ projectLinkGit, projectLinkLive }: InfoLinksProps) => {
  return (
    <div className={s.modalLinksContainer}>
      {projectLinkGit && (
        <a
          href={projectLinkGit}
          rel="nofollow noopener noreferrer"
          target="_blank"
          className={s.modalProjectLink}
        >
          GitHub
        </a>
      )}

      {projectLinkLive && (
        <a
          href={projectLinkLive}
          rel="nofollow noopener noreferrer"
          target="_blank"
          className={s.modalProjectLink}
        >
          Live
        </a>
      )}
    </div>
  );
};

export default InfoLinks;
