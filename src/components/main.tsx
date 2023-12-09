import React from "react";
import { HistoricalDates } from "./historicalDates";
import { SwiperItem } from "./swipper";
import { Ellipse } from "./ellipse";
import { MainDates } from "./mainDates";
import {Lines} from "./lines"

function Main(){
  return <div className="main">
    <Lines/>
    <HistoricalDates/>
    <SwiperItem/>
    <Ellipse/>
    <MainDates/>
  </div>
}

export {Main}