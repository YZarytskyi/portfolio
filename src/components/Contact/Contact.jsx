import React from 'react';
import Tilt from 'react-parallax-tilt';

import s from './Contact.module.scss';

const Contact = () => {
  return (
    <section id="contact" className={s.contact}>
      <div className={s.container}>
        <Tilt
          tiltMaxAngleX={20}
          tiltMaxAngleY={11}
          tiltReverse={true}
          scale={1.1}
          transitionSpeed={3000}
          className={s.tilt}>
          <h2 className={s.title}>Contact</h2>
        </Tilt>

        <div className={s.tiltMobile}>
          <h2 className={s.title}>Contact</h2>
        </div>

        <p className={s.text}>
        At this time, I am not actively seeking new opportunities. However, I want to assure you that my inbox is always open and I welcome your messages. Whether you have a question or simply want to say hello, I will make every effort to respond to you as promptly as possible.
        </p>
        <a
          href="mailto: zarytskyi222@gmail.com"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className={s.link}>
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Contact;
