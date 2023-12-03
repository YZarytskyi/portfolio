import { clsx } from "clsx";
import Tilt from "react-parallax-tilt";

import AnimateInView from "../common/AnimateOnView/AnimateInView.tsx";

import style from "./Home.module.scss";

export const Home = () => {
  return (
    <section id="home" className={style.home}>
      <div className={style.homeContainer}>
        <Tilt
          tiltMaxAngleX={8}
          tiltMaxAngleY={3}
          tiltReverse={true}
          scale={1.05}
          transitionSpeed={3000}
          className={clsx("tilt", style.textContainer)}
        >
          <AnimateInView overflow="visible">
            <p className={style.greeting}>
              <span className={style.emojiHi}>✌🏻</span>Hi, my name is
            </p>
          </AnimateInView>
          <AnimateInView delay={0.15}>
            <p className={style.name}>Yurii Zarytskyi</p>
          </AnimateInView>
          <AnimateInView delay={0.2}>
            <p className={style.myPosition}>I’m a Frontend Developer</p>
          </AnimateInView>
          <AnimateInView delay={0.25}>
            <p className={style.homeText}>
              Let’s build a better digital world together
            </p>
          </AnimateInView>
        </Tilt>

        <div className="tiltMobile">
          <p className={style.homeText}>
            <span>
              <span className={style.emojiHi}>✌🏻</span>Hi, my name is
            </span>
            <span>Yurii Zarytskyi</span>
            <span>I’m a Frontend Developer</span>
            Let’s build a better digital world together
          </p>
        </div>

        <AnimateInView delay={0.3} overflow="visible">
          <a href="#projects" className={style.homeBtn}>
            Check out my projects!
          </a>
        </AnimateInView>
      </div>

      <div className={style.backgroundAnimated}>
        {Array(130)
          .fill(0)
          .map((_, index) => (
            <div key={index} className={style.circleContainer}>
              <div className={style.circle}></div>
            </div>
          ))}
      </div>
    </section>
  );
};
