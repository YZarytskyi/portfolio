import Tilt from "react-parallax-tilt";

import styles from "./Contact.module.scss";

export const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <Tilt
          tiltMaxAngleX={20}
          tiltMaxAngleY={11}
          tiltReverse={true}
          scale={1.1}
          transitionSpeed={3000}
          className="tilt"
        >
          <h2 className="title">Contact</h2>
        </Tilt>

        <div className="tiltMobile">
          <h2 className="title">Contact</h2>
        </div>

        <p className={styles.text}>
          At this time, I am not actively seeking new opportunities. However, I
          want to assure you that my inbox is always open and I welcome your
          messages. Whether you have a question or simply want to say hello, I
          will make every effort to respond to you as promptly as possible.
        </p>
        <a
          href="mailto: zarytskyi222@gmail.com"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className={styles.link}
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};
