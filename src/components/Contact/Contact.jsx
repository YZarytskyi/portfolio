import React from 'react';
import s from './Contact.module.scss';
import Tilt from 'react-parallax-tilt';

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
          I’m currently looking for new opportunities and my inbox is always open. Whether you have
          a question or just want to say hi, I’ll try my best to get back to you!
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
