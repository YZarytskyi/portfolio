import React from 'react';
import Tilt from 'react-parallax-tilt';

import Tabs from './Tabs';

import s from './About.module.scss';

import YuriiZarytskyi from '../../assets/Zarytskyi.png';

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
          Through dedicated daily practice and continuous learning, I have acquired a profound understanding of the programming process. This proficiency empowers me to deliver effective solutions and craft code that is clear, readable, and supportable. With each passing day, my experience grows, enhancing my skills and expanding my knowledge. As a result, I approach complex tasks with increased confidence and efficiency.
          </p>
          <div className={s.circleImgContainer}>
            <div className={s.circle}></div>
            <div className={s.photoContainer}>
              <img src={YuriiZarytskyi} alt="Yurii Zarytskyi" className={s.photo} />
            </div>
          </div>
        </div>
        <Tabs />
      </div>
    </section>
  );
};

export default About;
