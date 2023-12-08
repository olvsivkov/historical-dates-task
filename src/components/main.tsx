import React from "react";
import { HistoricalDates } from "./historicalDates";
import { Swiper } from "./swipper";
import { Ellipse } from "./ellipse";
import { MainDates } from "./mainDates";

function Main(){
  return <div className="main">
    <HistoricalDates/>
    <Swiper/>
    <Ellipse/>
    <MainDates/>
  </div>
}

export {Main}