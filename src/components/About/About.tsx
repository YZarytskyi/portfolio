import Tilt from "react-parallax-tilt";

import AnimateInView from "../common/AnimateOnView/AnimateInView.tsx";
import Tabs from "./Tabs";

import styles from "./About.module.scss";

import YuriiZarytskyi from "../../assets/Zarytskyi.png";

export const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <Tilt
          tiltMaxAngleX={20}
          tiltMaxAngleY={11}
          tiltReverse={true}
          scale={1.1}
          transitionSpeed={3000}
          className="tilt"
        >
          <AnimateInView>
            <h2 className="title">About Me</h2>
          </AnimateInView>
        </Tilt>

        <div className="tiltMobile">
          <h2 className="title">About Me</h2>
        </div>

        <div className={styles.textImgContainer}>
          <AnimateInView delay={0.15}>
            <p className={styles.text}>
              Through dedicated daily practice and continuous learning, I have
              acquired a profound understanding of the programming processtyles.
              This proficiency empowers me to deliver effective solutions and
              craft code that is clear, readable, and supportable. With each
              passing day, my experience grows, enhancing my skills and
              expanding my knowledge. As a result, I approach complex tasks with
              increased confidence and efficiency.
            </p>
          </AnimateInView>
          <div className={styles.circleImgContainer}>
            <div className={styles.circle}></div>
            <div className={styles.photoContainer}>
              <img
                src={YuriiZarytskyi}
                alt="Yurii Zarytskyi"
                className={styles.photo}
              />
            </div>
          </div>
        </div>

        <Tabs />
      </div>
    </section>
  );
};
