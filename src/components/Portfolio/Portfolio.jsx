import React, { useRef, useState } from 'react';
import s from './Portfolio.module.scss';
import crypto1 from '../../assets/crypto1.jpg';
import crypto2 from '../../assets/crypto2.jpg';
import eShop from '../../assets/eShop.jpg';
import eShop2 from '../../assets/eshop2.png';
import iceCream from '../../assets/iceCream.jpg';
import iceCream2 from '../../assets/iceCream2.png';
import { useEffect } from 'react';

const projectLinks = [
  'https://yzarytskyi.github.io/finance-crypto/',
  'https://yzarytskyi.github.io/e-shop/',
  'https://yzarytskyi.github.io/ice-cream-team-project/'
];
const desktopImages = [crypto1, eShop, iceCream];
const mobileImages = [crypto2, eShop2, iceCream2];
const projectTitles = ['Crypto', 'Prestige', 'Ice-cream'];

const Portfolio = () => {
  const refWrapper = useRef(null);
  const refImage = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isImgHovered, setIsImgHovered] = useState(false);
  const [slideChangeClick, setSlideChangeClick] = useState(null);

  const prevImgIndex = activeIndex ? activeIndex - 1 : desktopImages.length - 1;
  const nextImgIndex = activeIndex === desktopImages.length - 1 ? 0 : activeIndex + 1;

  useEffect(() => {
    const mouseover = () => setIsImgHovered(true);
    const mouseout = () => setIsImgHovered(false);

    refWrapper.current.addEventListener('mouseover', mouseover);
    refWrapper.current.addEventListener('mouseout', mouseout);

    return () => {
      refWrapper.current.removeEventListener('mouseover', mouseover);
      refWrapper.current.removeEventListener('mouseout', mouseout);
    };
  }, []);

  useEffect(() => {
    let interval;
    if (isImgHovered || slideChangeClick) {
      clearInterval(interval);
      if (slideChangeClick) {
        setActiveIndex(Number(slideChangeClick));
        setSlideChangeClick(null);
      }
    } else {
      interval = setInterval(() => {
        setActiveIndex((currentIndex) => {
          const nextIndex = currentIndex === desktopImages.length - 1 ? 0 : currentIndex + 1;
          return nextIndex;
        });
      }, 7000);
    }
    return () => clearInterval(interval);
  }, [isImgHovered, slideChangeClick]);

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

  function onClickSlideChange(e) {
    setSlideChangeClick(e.target.dataset.index);
  }

  return (
    <section id="portfolio" className={s.portfolio}>
      <div className={s.container}>
        <h2 className={s.title + ' ' + s.titlePortfolio}>Portfolio</h2>
        <div className={s.presentation}>
          <div className={s.iMac} ref={refImage}>
            <div className={s.iMacWrapper} ref={refWrapper}></div>
            <div className={s.iMacWrapper2}>
              <img
                src={desktopImages[prevImgIndex]}
                className={s.sliderImgPrev + ' ' + s.sliderImg}
                key={prevImgIndex}
              />

              <img
                src={desktopImages[activeIndex]}
                className={s.sliderImg + ' ' + s.imageLg}
                key={activeIndex}
              />

              <img
                src={desktopImages[nextImgIndex]}
                className={s.sliderImgNext + ' ' + s.sliderImg}
                key={nextImgIndex}
              />
            </div>
          </div>
          <div className={s.iphone}>
            <div className={s.iphoneWrapper}>
              <a href={projectLinks[activeIndex]} target="_blank" rel="noopener noreferrer">
                <img
                  src={mobileImages[prevImgIndex]}
                  className={s.sliderImgMobilePrev + ' ' + s.mobilePhoto}
                  key={prevImgIndex}
                />

                <img src={mobileImages[activeIndex]} className={s.mobilePhoto} key={activeIndex} />

                <img
                  src={mobileImages[nextImgIndex]}
                  className={s.sliderImgMobileNext + ' ' + s.mobilePhoto}
                  key={nextImgIndex}
                />
              </a>
            </div>
          </div>
          <button href="" className={s.btn}>
            <span className={s.btn__circle}></span>
            <span className={s.btn__whiteCircle}>
              <svg xmlns="http://www.w3.org/2000/svg" id="icon-arrow-right" viewBox="0 0 21 12">
                <path d="M17.104 5.072l-4.138-4.014L14.056 0l6 5.82-6 5.82-1.09-1.057 4.138-4.014H0V5.072h17.104z"></path>
              </svg>
            </span>
            <a
              href={projectLinks[activeIndex]}
              target="_blank"
              rel="noopener noreferrer"
              className={s.btn__text}>
              Discover the project
            </a>
          </button>
        </div>
        <ul className={s.projectList} onClick={(e) => onClickSlideChange(e)}>
          {projectTitles.map((title, i) => (
            <li className={s.projectItem} key={i}>
              <button
                className={s.projectBtn + ' ' + (i === activeIndex && s.activeProject)}
                data-index={i}>
                {title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;
