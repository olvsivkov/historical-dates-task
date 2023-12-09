import React from "react";
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

const SwiperItems: React.FC = () =>{
  return <div className="swiper-item">
    <h5 className="swiper-item-title"></h5>
    <p className="swiper-item-content">13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды</p>
  </div>
}

const SwiperItem: React.FC = () =>{

  return (
    <Swiper
      modules={[Navigation, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation={{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    > <div className="swiper-button-prev"></div>
      <SwiperSlide><SwiperItems /></SwiperSlide>
      <SwiperSlide><SwiperItems /></SwiperSlide>
      <SwiperSlide><SwiperItems /></SwiperSlide>
      <SwiperSlide><SwiperItems /></SwiperSlide>
      <SwiperSlide><SwiperItems /></SwiperSlide>
      <SwiperSlide><SwiperItems /></SwiperSlide>
      <div className="swiper-button-next btn-next"></div>
      ...
    </Swiper>
  );
};

export {SwiperItem}