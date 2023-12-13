import React from "react";
import { Navigation, A11y, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';

import json from "../DB/dataBase.json"

interface Iitem {
  id?: number
  text: string
  year: string
}

interface ICount {
  count: number
}

const SwiperItems: React.FC<Iitem> = ({text, year}) =>{
  return <div className="swiper-item swiper-item-width">
    <h5 className="swiper-item-title">{year}</h5>
    <p className="swiper-item-content">{text}</p>
  </div>
}

const SwiperItem: React.FC<ICount> = ({count}) =>{

  const initial = json.dates[count].items

  return (
    <Swiper
      modules={[Navigation, A11y, Pagination]}
      spaceBetween={50}
      slidesPerView={3}
      navigation={{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      }}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    > <div className="swiper-button-prev"></div>
      <SwiperSlide><SwiperItems {...initial[0]} /></SwiperSlide>
      <SwiperSlide><SwiperItems {...initial[1]}/></SwiperSlide>
      <SwiperSlide><SwiperItems {...initial[2]}/></SwiperSlide>
      <SwiperSlide><SwiperItems {...initial[3]}/></SwiperSlide>
      <SwiperSlide><SwiperItems {...initial[4]}/></SwiperSlide>
      <SwiperSlide><SwiperItems {...initial[5]}/></SwiperSlide>
      <div className="swiper-button-next btn-next"></div>
      ...
    </Swiper>
  );
};


export {SwiperItem}