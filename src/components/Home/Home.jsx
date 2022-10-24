import React from "react";
import s from "./Home.module.scss";

const Home = () => {
  const QTY = 100;
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
          <p className={s.homeText}>
            <span>Hi, my name is</span>
            <span>Yurii Zarytskyi</span>
            <span>I’m a Frontend Developer</span>
            Let’s build a better digital world together.
          </p>
          <button className={s.homeBtn}>Check out my projects!</button>
        </div>
      </div>
    </section>
  );
};

export default Home;
