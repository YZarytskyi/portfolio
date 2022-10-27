import React from 'react';
import s from './Home.module.scss';
import Tilt from 'react-parallax-tilt';

const Home = () => {
  const QTY = 130;
  const arr = [];
  for (let i = 0; i < QTY; i++) {
    arr.push(i);
  }
  return (
    <section id="home" className={s.home}>
      <div className={s.backgroundAnimated}>

        {arr.map((i) => (
          <div key={i} className={s.circleContainer}>
            <div className={s.circle}></div>
          </div>
        ))}

        <div className={s.homeContainer}>
          <Tilt
            tiltMaxAngleX={8}
            tiltMaxAngleY={3}
            tiltReverse={true}
            scale={1.05}
            transitionSpeed={3000}>
            <p className={s.homeText}>
              <span>Hi, my name is</span>
              <span>Yurii Zarytskyi</span>
              <span>I’m a Frontend Developer</span>
              Let’s build a better digital world together.
            </p>
          </Tilt>
          <a href='#portfolio' className={s.homeBtn}>Check out my projects!</a>
        </div>
      </div>
    </section>
  );
};

export default Home;
