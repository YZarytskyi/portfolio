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
          transitionSpeed={3000}>
          <h2 className={s.title}>About Me</h2>
        </Tilt>
        <div className={s.textImgContainer}>
          <p className={s.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed ex pharetra,
            tincidunt ante vel, pulvinar enim. Nam aliquam eros quis augue fermentum feugiat. Ut non
            varius eros. Curabitur semper venenatis dui, at ornare nibh bibendum vel. Donec nulla
            velit, vehicula a ex vitae, aliquet suscipit libero. Nunc sit amet magna nisl.
          </p>
          <div className={s.photoContainer}>
            <img src={me} alt="Yurii Zarytskyi" className={s.photo} />
          </div>
        </div>

        <Tabs />

        <div className={s.circle}>

        </div>
      </div>
    </section>
  );
};

export default About;
