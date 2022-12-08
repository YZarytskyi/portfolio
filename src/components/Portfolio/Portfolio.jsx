import React, { useRef, useState } from 'react';
import s from './Portfolio.module.scss';
import crypto1 from '../../assets/crypto1.jpg';
import crypto2 from '../../assets/crypto2.jpg';
import filmoteka from '../../assets/filmoteka.png';
import filmoteka2 from '../../assets/filmoteka2.jpg';
import eShop from '../../assets/eShop.jpg';
import eShop2 from '../../assets/eshop2.png';
import iceCream from '../../assets/iceCream.jpg';
import iceCream2 from '../../assets/iceCream2.png';
import { useEffect } from 'react';
import Modals from './Modals/Modals';
import { Swiper, SwiperSlide } from 'swiper/react';

const desktopImages = [crypto1, filmoteka, eShop, iceCream];
const mobileImages = [crypto2, filmoteka2, eShop2, iceCream2];
const projectTitles = ['Crypto', 'Filmoteka', 'Prestige', 'Ice-cream'];

const Portfolio = () => {
  const refWrapper = useRef(null);
  const refImage = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isImgHovered, setIsImgHovered] = useState(false);
  const [slideChangeClick, setSlideChangeClick] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalShowCrypto, setModalShowCrypto] = useState(false);
  const [modalShowFilmoteka, setModalShowFilmoteka] = useState(false);
  const [modalShowPrestige, setModalShowPrestige] = useState(false);
  const [modalShowIceCream, setModalShowIceCream] = useState(false);

  const swiper = document.getElementsByClassName('swiper')[0]?.swiper;

  const modalsSetState = [
    setModalShowCrypto,
    setModalShowFilmoteka,
    setModalShowPrestige,
    setModalShowIceCream
  ];

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
    if (window.innerWidth >= 1200) {
      if (isImgHovered || slideChangeClick || isModalOpen) {
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
    }
    return () => clearInterval(interval);
  }, [isImgHovered, slideChangeClick, isModalOpen]);

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
    if (window.innerWidth < 1200) {
      setActiveIndex(Number(e.target.dataset.index));
      swiper?.slideToLoop(Number(e.target.dataset.index), 500);
      setSlideChangeClick(null);
    }
  }

  function onClickModalOpen() {
    modalsSetState[activeIndex](true);
    setIsModalOpen(true);
    document.body.classList.add('body-overflow');
  }

  return (
    <>
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
              <div className={s.iphoneWrapper} role="button" onClick={() => onClickModalOpen()}>
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
              </div>
            </div>

            <div className={s.swiper}>
              <Swiper
                className={s.swiperWrapper}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                loopAdditionalSlides={3}
                longSwipes={false}
                onSlideChange={(e) => setActiveIndex(e.realIndex)}
                role="button" 
                onClick={() => onClickModalOpen()}>
                {mobileImages.map((element) => {
                  return (
                    <SwiperSlide key={element}>
                      <img src={element} className={s.swiperImg} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>

            <div className={s.btnContainer} role="button" onClick={() => onClickModalOpen()}>
              <span className={s.btn__circle}></span>
              <span className={s.btn__whiteCircle}>
                <svg xmlns="http://www.w3.org/2000/svg" id="icon-arrow-right" viewBox="0 0 21 12">
                  <path d="M17.104 5.072l-4.138-4.014L14.056 0l6 5.82-6 5.82-1.09-1.057 4.138-4.014H0V5.072h17.104z"></path>
                </svg>
              </span>
              <button className={s.btn}>Discover the project</button>
            </div>
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
      <Modals
        activeIndex={activeIndex}
        setIsModalOpen={setIsModalOpen}
        projectTitles={projectTitles}
        modalShowCrypto={modalShowCrypto}
        setModalShowCrypto={setModalShowCrypto}
        modalShowFilmoteka={modalShowFilmoteka}
        setModalShowFilmoteka={setModalShowFilmoteka}
        modalShowPrestige={modalShowPrestige}
        setModalShowPrestige={setModalShowPrestige}
        modalShowIceCream={modalShowIceCream}
        setModalShowIceCream={setModalShowIceCream}
      />
    </>
  );
};

export default Portfolio;
