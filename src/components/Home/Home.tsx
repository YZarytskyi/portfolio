import Tilt from "react-parallax-tilt";

import styles from "./Home.module.scss";

export const Home = () => {
  return (
    <section id="home" className={styles.home}>
      <div className={styles.homeContainer}>
        <Tilt
          tiltMaxAngleX={8}
          tiltMaxAngleY={3}
          tiltReverse={true}
          scale={1.05}
          transitionSpeed={3000}
          className="tilt"
        >
          <p className={styles.homeText}>
            <span>
              <span className={styles.emojiHi}>✌🏻</span>Hi, my name is
            </span>
            <span>Yurii Zarytskyi</span>
            <span>I’m a Frontend Developer</span>
            Let’s build a better digital world together
          </p>
        </Tilt>

        <div className="tiltMobile">
          <p className={styles.homeText}>
            <span>
              <span className={styles.emojiHi}>✌🏻</span>Hi, my name is
            </span>
            <span>Yurii Zarytskyi</span>
            <span>I’m a Frontend Developer</span>
            Let’s build a better digital world together
          </p>
        </div>

        <a href="#portfolio" className={styles.homeBtn}>
          Check out my projects!
        </a>
      </div>

      <div className={styles.backgroundAnimated}>
        {Array(130)
          .fill(0)
          .map((_, index) => (
            <div key={index} className={styles.circleContainer}>
              <div className={styles.circle}></div>
            </div>
          ))}
      </div>
    </section>
  );
};
