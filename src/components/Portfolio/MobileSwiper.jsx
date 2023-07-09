import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import s from './Portfolio.module.scss';

const MobileSwiper = ({setActiveIndex, onClickModalOpen, mobileImages, device, MOBILE}) => {
  const onSlideChangeSwiper = (e) => {
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
        onSlideChange={(e) => onSlideChangeSwiper(e)}
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
  );
};

export default MobileSwiper;
