import React from "react";
import { HistoricalDates } from "./historicalDates";
import { Swiper } from "./swipper";
import { Ellipse } from "./ellipse";
import { MainDates } from "./mainDates";
import {Lines} from "./lines"

function Main(){
  return <div className="main">
    <Lines/>
    <HistoricalDates/>
    <Swiper/>
    <Ellipse/>
    <MainDates/>
  </div>
}

export {Main}