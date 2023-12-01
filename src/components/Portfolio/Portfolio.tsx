import { clsx } from "clsx";
import { MouseEventHandler, useEffect, useRef, useState } from "react";

import MobileSwiper from "./MobileSwiper";
import { Modals } from "./Modals/Modals.tsx";

import styles from "./Portfolio.module.scss";

import crypto1 from "../../assets/crypto1.jpg";
import crypto2 from "../../assets/crypto2.jpg";
import filmoteka2 from "../../assets/filmoteka2.jpg";
import filmoteka from "../../assets/filmoteka.jpg";
import jazzRender2 from "../../assets/jazzRender2.png";
import jazzRender from "../../assets/jazzRender.png";
import schoolHack2 from "../../assets/schoolHack2.jpg";
import schoolHack from "../../assets/schoolHack.jpg";
import wallet2 from "../../assets/wallet2.png";
import wallet from "../../assets/wallet.png";

const DESKTOP = "desktop";
const MOBILE = "mobile";
const desktopImages = [schoolHack, crypto1, jazzRender, wallet, filmoteka];
const mobileImages = [schoolHack2, crypto2, jazzRender2, wallet2, filmoteka2];
const projectTitles = [
  "SchoolHack AI",
  "Crypto",
  "Jazz Render",
  "Wallet",
  "Filmoteka",
];

export const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isImgHovered, setIsImgHovered] = useState(false);
  const [slideChangeClick, setSlideChangeClick] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalShowSchoolHack, setModalShowSchoolHack] = useState(false);
  const [modalShowCrypto, setModalShowCrypto] = useState(false);
  const [modalJazzRender, setModalJazzRender] = useState(false);
  const [modalShowWallet, setModalShowWallet] = useState(false);
  const [modalShowFilmoteka, setModalShowFilmoteka] = useState(false);
  const [device, setDevice] = useState<string>("");

  const desktopWrapperRef = useRef<HTMLDivElement>(null);
  const desktopImageWrapperRef = useRef<HTMLDivElement>(null);

  const modalsSetState = [
    setModalShowSchoolHack,
    setModalShowCrypto,
    setModalJazzRender,
    setModalShowWallet,
    setModalShowFilmoteka,
  ];

  const prevImgIndex = activeIndex ? activeIndex - 1 : desktopImages.length - 1;
  const nextImgIndex =
    activeIndex === desktopImages.length - 1 ? 0 : activeIndex + 1;

  useEffect(() => {
    const handleResize = () =>
      setDevice(window.innerWidth >= 1200 ? DESKTOP : MOBILE);

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const wrapperRef = desktopWrapperRef.current;
    if (!wrapperRef) return;

    const mouseover = () => setIsImgHovered(true);
    const mouseout = () => setIsImgHovered(false);

    wrapperRef.addEventListener("mouseover", mouseover);
    wrapperRef.addEventListener("mouseout", mouseout);

    return () => {
      wrapperRef?.removeEventListener("mouseover", mouseover);
      wrapperRef?.removeEventListener("mouseout", mouseout);
    };
  }, []);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (device === DESKTOP) {
      if (slideChangeClick) {
        setActiveIndex(Number(slideChangeClick));
        setSlideChangeClick("");
      }
      if (!isImgHovered && !slideChangeClick && !isModalOpen) {
        interval = setInterval(() => {
          setActiveIndex((currentIndex) => {
            return currentIndex === desktopImages.length - 1
              ? 0
              : currentIndex + 1;
          });
        }, 7000);
      }
    }
    return () => clearInterval(interval);
  }, [isImgHovered, slideChangeClick, isModalOpen, device]);

  useEffect(() => {
    if (device === MOBILE) {
      setActiveIndex(0);
    }
  }, [device]);

  useEffect(() => {
    const wrapperRef = desktopWrapperRef.current;
    if (!wrapperRef) return;

    wrapperRef.addEventListener("mousemove", onMouseMoveHandler);
    wrapperRef.addEventListener("mouseleave", onMouseLeaveHandler);

    return () => {
      wrapperRef?.removeEventListener("mousemove", onMouseMoveHandler);
      wrapperRef?.removeEventListener("mouseleave", onMouseLeaveHandler);
    };
  }, []);

  const onMouseMoveHandler = (e: MouseEvent) => {
    const imageRef = desktopImageWrapperRef.current;
    if (!imageRef) return;

    const rect = imageRef.getBoundingClientRect();
    imageRef.style.setProperty(
      "--x",
      `${e.clientX - (rect.left + Math.floor(rect.width / 2))}`,
    );
    imageRef.style.setProperty(
      "--y",
      `${e.clientY - (rect.top + Math.floor(rect.height / 2))}`,
    );
  };

  const onMouseLeaveHandler = () => {
    const imageRef = desktopImageWrapperRef.current;
    if (!imageRef) return;

    imageRef.style.setProperty("--x", "0");
    imageRef.style.setProperty("--y", "0");
  };

  const onClickSlideChange: MouseEventHandler = (e) => {
    const targetIndex = (e.target as HTMLElement).dataset.index as string;
    setSlideChangeClick(targetIndex);

    if (device === MOBILE) {
      // @ts-expect-error Check swiper
      const swiper = document.querySelector(".swiper")?.swiper;
      swiper?.slideToLoop(Number(targetIndex), 500);
      setActiveIndex(Number(targetIndex));
      setSlideChangeClick("");
    }
  };

  function onClickModalOpen() {
    modalsSetState[activeIndex](true);
    setIsModalOpen(true);
    document.body.classList.add("blockScroll");
  }

  return (
    <>
      <section id="portfolio" className={styles.portfolio}>
        <div className={styles.container}>
          <h2 className={clsx("title", styles.titlePortfolio)}>Portfolio</h2>
          <div className={styles.presentation}>
            <div className={styles.iMac} ref={desktopImageWrapperRef}>
              <div className={styles.iMacWrapper} ref={desktopWrapperRef}></div>
              <div className={styles.iMacWrapper2}>
                <img
                  src={desktopImages[prevImgIndex]}
                  className={clsx(styles.sliderImgPrev, styles.sliderImg)}
                  key={prevImgIndex}
                  alt=""
                />
                <img
                  src={desktopImages[activeIndex]}
                  className={clsx(styles.sliderImg, styles.imageLg)}
                  key={activeIndex}
                  alt=""
                />
                <img
                  src={desktopImages[nextImgIndex]}
                  className={clsx(styles.sliderImgNext, styles.sliderImg)}
                  key={nextImgIndex}
                  alt=""
                />
              </div>
            </div>
            <div className={styles.iphone}>
              <div
                className={styles.iphoneWrapper}
                role="button"
                onClick={onClickModalOpen}
              >
                <img
                  src={mobileImages[prevImgIndex]}
                  className={clsx(
                    styles.sliderImgMobilePrev,
                    styles.mobilePhoto,
                  )}
                  key={prevImgIndex}
                  alt=""
                />
                <img
                  src={mobileImages[activeIndex]}
                  className={styles.mobilePhoto}
                  key={activeIndex}
                  alt=""
                />
                <img
                  src={mobileImages[nextImgIndex]}
                  className={clsx(
                    styles.sliderImgMobileNext,
                    styles.mobilePhoto,
                  )}
                  key={nextImgIndex}
                  alt=""
                />
              </div>
            </div>

            <MobileSwiper
              setActiveIndex={setActiveIndex}
              onClickModalOpen={onClickModalOpen}
              mobileImages={mobileImages}
              device={device}
              MOBILE={MOBILE}
            />

            <div
              className={styles.btnContainer}
              role="button"
              onClick={() => onClickModalOpen()}
            >
              <span className={styles.btn__circle}></span>
              <span className={styles.btn__whiteCircle}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="icon-arrow-right"
                  viewBox="0 0 21 12"
                >
                  <path d="M17.104 5.072l-4.138-4.014L14.056 0l6 5.82-6 5.82-1.09-1.057 4.138-4.014H0V5.072h17.104z"></path>
                </svg>
              </span>
              <button className={styles.btn}>Discover the project</button>
            </div>
          </div>
          <ul className={styles.projectList} onClick={onClickSlideChange}>
            {projectTitles.map((title, i) => (
              <li className={styles.projectItem} key={i}>
                <button
                  className={clsx(
                    styles.projectBtn,
                    i === activeIndex && styles.activeProject,
                  )}
                  data-index={i}
                >
                  {title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Modals
        setIsModalOpen={setIsModalOpen}
        projectTitles={projectTitles}
        modalShowSchoolHack={modalShowSchoolHack}
        setModalShowSchoolHack={setModalShowSchoolHack}
        modalShowCrypto={modalShowCrypto}
        setModalShowCrypto={setModalShowCrypto}
        modalJazzRender={modalJazzRender}
        setModalJazzRender={setModalJazzRender}
        modalShowWallet={modalShowWallet}
        setModalShowWallet={setModalShowWallet}
        modalShowFilmoteka={modalShowFilmoteka}
        setModalShowFilmoteka={setModalShowFilmoteka}
      />
    </>
  );
};
