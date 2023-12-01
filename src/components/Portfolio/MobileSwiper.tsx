import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import s from "./Portfolio.module.scss";

interface MobileSwiperProps {
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  onClickModalOpen: () => void;
  mobileImages: string[];
  device: string;
  MOBILE: string;
}

const MobileSwiper = ({
  setActiveIndex,
  onClickModalOpen,
  mobileImages,
  device,
  MOBILE,
}: MobileSwiperProps) => {
  const onSlideChangeSwiper = (e: { realIndex: number }) => {
    if (device === MOBILE) {
      setActiveIndex(e.realIndex);
    }
  };

  return (
    <div className={s.swiper}>
      <Swiper
        className={s.swiperWrapper}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        loopAdditionalSlides={3}
        longSwipes={false}
        onSlideChange={onSlideChangeSwiper}
        role="button"
        onClick={() => onClickModalOpen()}
      >
        {mobileImages.map((element) => {
          return (
            <SwiperSlide key={element}>
              <img src={element} className={s.swiperImg} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default MobileSwiper;
