import React from "react";

function SwiperItem(){
  return <div className="swiper-item">
    <h5 className="swiper-item-title">2015</h5>
    <p className="swiper-item-content">13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды</p>
  </div>
}

function Swiper(){
  return <div className="swiper-wrapper">
    <SwiperItem/>
    <SwiperItem/>
    <SwiperItem/>
  </div>
}

export {Swiper}