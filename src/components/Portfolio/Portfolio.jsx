import React, { useRef } from 'react';
import s from './Portfolio.module.scss';
import crypto1 from '../../assets/crypto1.png';
import crypto2 from '../../assets/crypto2.png';
import { useEffect } from 'react';

const Portfolio = () => {
  const refWrapper = useRef(null);
  const refImage = useRef(null);

  useEffect(() => {
    const wrapper = refWrapper.current;
    const image = refImage.current;

    const onMouseMoveHandler = (e) => {
      const el = image;
      const rect = el.getBoundingClientRect();
      el.style.setProperty('--x', e.clientX - (rect.left + Math.floor(rect.width / 2)));
      el.style.setProperty('--y', e.clientY - (rect.top + Math.floor(rect.height / 2)));
    };

    const onMouseLeaveHandler = () => {
      const el = image;

      el.style.setProperty('--x', 0);
      el.style.setProperty('--y', 0);
    };

    wrapper.addEventListener('mousemove', onMouseMoveHandler);
    wrapper.addEventListener('mouseleave', onMouseLeaveHandler);
    return () => {
      wrapper.removeEventListener('mousemove', onMouseMoveHandler);
      wrapper.removeEventListener('mouseleave', onMouseLeaveHandler);
    };
  }, []);

  return (
    <section id="portfolio" className={s.portfolio}>
      <div className={s.container}>
        <div className={s.presentation}>
          <div className={s.imac} ref={refImage}>
            <div className={s.wrapper2} ref={refWrapper}></div>
            <div className={s.wrapper}>
              <img src={crypto1} alt="Crypto project" className={s.crypto1} />
            </div>
          </div>
          <a href="" className={s.btn}>
            <span className={s.btn__circle}></span>
            <span className={s.btn__whiteCircle}>
              <svg xmlns="http://www.w3.org/2000/svg" id="icon-arrow-right" viewBox="0 0 21 12">
                <path d="M17.104 5.072l-4.138-4.014L14.056 0l6 5.82-6 5.82-1.09-1.057 4.138-4.014H0V5.072h17.104z"></path>
              </svg>
            </span>
            <span className={s.btn__text}>Discover the project</span>
          </a>
          <div className={s.iphone}>
            <img src={crypto2} alt="Crypto project" className={s.crypto2} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
