import Tilt from "react-parallax-tilt";

import AnimateInView from "../common/AnimateOnView/AnimateInView.tsx";

import style from "./Contact.module.scss";

export const Contact = () => {
  return (
    <section id="contact" className={style.contact}>
      <div className={style.container}>
        <Tilt
          tiltMaxAngleX={20}
          tiltMaxAngleY={11}
          tiltReverse={true}
          scale={1.1}
          transitionSpeed={3000}
          className="tilt"
        >
          <AnimateInView>
            <h2 className="title">Contact</h2>
          </AnimateInView>
        </Tilt>

        <div className="tiltMobile">
          <h2 className="title">Contact</h2>
        </div>

        <AnimateInView delay={0.15}>
          <p className={style.text}>
            My inbox is always open and I welcome your messages. Whether you
            have a question or simply want to say hello, I will make every
            effort to respond to you as promptly as possible.
          </p>
        </AnimateInView>
        <AnimateInView delay={0.2} overflow="visible">
          <a
            href="mailto: zarytskyi222@gmail.com"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className={style.link}
          >
            Contact Me
          </a>
        </AnimateInView>
      </div>
    </section>
  );
};
