import React from 'react';
import s from './About.module.scss';
import me from '../../assets/Zarytskyi.png';
import Tilt from 'react-parallax-tilt';
import Tabs from './Tabs';

const About = () => {
  return (
    <section id="about" className={s.about}>
      <div className={s.container}>

        <Tilt
          tiltMaxAngleX={20}
          tiltMaxAngleY={11}
          tiltReverse={true}
          scale={1.1}
          transitionSpeed={3000}
          className={s.tilt}>
          <h2 className={s.title}>About Me</h2>
        </Tilt>

        <div className={s.tiltMobile}>
          <h2 className={s.title}>About Me</h2>
        </div>

        <div className={s.textImgContainer}>
          <p className={s.text}>
            All of my knowledge has been gained with hundreds hours of learning and practice within
            Fullstack Bootcamp course from GoIT school and self-education daily. It gives me a
            strong understanding of the programming process which allows me to provide better
            solutions and write a clear, readable and supportable code.
          </p>
          <div className={s.circleImgContainer}>
            <div className={s.circle}></div>
            <div className={s.photoContainer}>
              <img src={me} alt="Yurii Zarytskyi" className={s.photo} />
            </div>
          </div>
        </div>
        <Tabs />
      </div>
    </section>
  );
};

export default About;
