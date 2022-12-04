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
import Modal from '../common/Modal';

const projectLinksGit = [
  'https://github.com/YZarytskyi/finance-crypto',
  'https://github.com/YZarytskyi/filmoteka',
  'https://github.com/YZarytskyi/e-shop',
  'https://github.com/YZarytskyi/ice-cream-team-project'
];
const projectLinksLive = [
  'https://yzarytskyi.github.io/finance-crypto/',
  'https://yzarytskyi.github.io/filmoteka/',
  'https://yzarytskyi.github.io/e-shop/',
  'https://yzarytskyi.github.io/ice-cream-team-project/'
];
const desktopImages = [crypto1, filmoteka, eShop, iceCream];
const mobileImages = [crypto2, filmoteka2, eShop2, iceCream2];
const projectTitles = ['Crypto', 'Filmoteka' , 'Prestige', 'Ice-cream'];

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

  const modalsSetState = [setModalShowCrypto, setModalShowFilmoteka, setModalShowPrestige, setModalShowIceCream];

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
  }

  function onClickModalOpen() {
    modalsSetState[activeIndex](true);
    setIsModalOpen(true);
    document.body.style.overflowY = 'hidden';
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
      <Modal
        modalShow={modalShowCrypto}
        setModalShow={setModalShowCrypto}
        setIsModalOpen={setIsModalOpen}>
        <div className={s.modalContainer}>
          <h1 className={s.modalTitle}>{projectTitles[0]}</h1>
          <p className={s.modalText}>
            <span>Crypto</span> provides crowdsourced and professionally curated research, price analysis, and
            crypto market-moving news to help market players make more informed trading decisions.
            If you’re looking for a set of practical and insightful crypto market information and
            data, we have the analytics tools to suit your business needs.
          </p>
          <ul className={s.modalToolingList}>
            <li>ReactJS</li>
            <li>Redux Toolkit</li>
            <li>TypeScript</li>
            <li>Firebase</li>
            <li>Binance API</li>
          </ul>
          <div className={s.modalLinksContainer}>
            <a
              href={projectLinksGit[activeIndex]}
              rel="nofollow noopener noreferrer"
              target="_blank"
              className={s.modalProjectLink}>
              GitHub
            </a>
            <a
              href={projectLinksLive[activeIndex]}
              rel="nofollow noopener noreferrer"
              target="_blank"
              className={s.modalProjectLink}>
              Live
            </a>
          </div>
        </div>
      </Modal>
      <Modal
        modalShow={modalShowFilmoteka}
        setModalShow={setModalShowFilmoteka}
        setIsModalOpen={setIsModalOpen}>
        <div className={s.modalContainer}>
          <h1 className={s.modalTitle}>{projectTitles[1]}</h1>
          <p className={s.modalText}>
          <span>Filmoteka</span> is a comprehensive and in-depth resource for finding out more about the movies you love.
          On <span>Filmoteka</span> you will find: information about your favorite movies, new movies in theaters, list of Top available movies, its rating. By creating an account with us, you will have the opportunity adding to &quot;Queue&quot; or &quot;Watched&quot;  your favorite movies.
          </p>
          <ul className={s.modalToolingList}>
            <li>Vanilla JS</li>
            <li>Firebase</li>
            <li>SASS</li>
          </ul>
          <div className={s.modalLinksContainer}>
            <a
              href={projectLinksGit[activeIndex]}
              rel="nofollow noopener noreferrer"
              target="_blank"
              className={s.modalProjectLink}>
              GitHub
            </a>
            <a
              href={projectLinksLive[activeIndex]}
              rel="nofollow noopener noreferrer"
              target="_blank"
              className={s.modalProjectLink}>
              Live
            </a>
          </div>
        </div>
      </Modal>
      <Modal
        modalShow={modalShowPrestige}
        setModalShow={setModalShowPrestige}
        setIsModalOpen={setIsModalOpen}>
        <div className={s.modalContainer}>
          <h1 className={s.modalTitle}>{projectTitles[1]}</h1>
          <p className={s.modalText}>
          At <span>PRESTIGE</span> all that you see is hand-picked and 100% true – sourced straight from the best brands and their approved affiliates from US and over the world, only for you.
          </p>
          <ul className={s.modalToolingList}>
            <li>ReactJS</li>
            <li>Redux</li>
            <li>Bootstrap</li>
            <li>SASS</li>
          </ul>
          <div className={s.modalLinksContainer}>
            <a
              href={projectLinksGit[activeIndex]}
              rel="nofollow noopener noreferrer"
              target="_blank"
              className={s.modalProjectLink}>
              GitHub
            </a>
            <a
              href={projectLinksLive[activeIndex]}
              rel="nofollow noopener noreferrer"
              target="_blank"
              className={s.modalProjectLink}>
              Live
            </a>
          </div>
        </div>
      </Modal>
      <Modal
        modalShow={modalShowIceCream}
        setModalShow={setModalShowIceCream}
        setIsModalOpen={setIsModalOpen}>
        <div className={s.modalContainer}>
          <h1 className={s.modalTitle}>{projectTitles[2]}</h1>
          <p className={s.modalText}>
          Selling ice cream online is tricky, but it can be done. With <span>Ice-Cream</span> same-day delivery, pick-up option, and Shopify POS, you can have your ice cream to your customers in no time. It is one of the best option to sell ice cream online.
          </p>
          <ul className={s.modalToolingList}>
            <li>SASS</li>
            <li>JavaScript</li>
            <li>Parcel</li>
          </ul>
          <div className={s.modalLinksContainer}>
            <a
              href={projectLinksGit[activeIndex]}
              rel="nofollow noopener noreferrer"
              target="_blank"
              className={s.modalProjectLink}>
              GitHub
            </a>
            <a
              href={projectLinksLive[activeIndex]}
              rel="nofollow noopener noreferrer"
              target="_blank"
              className={s.modalProjectLink}>
              Live
            </a>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Portfolio;
