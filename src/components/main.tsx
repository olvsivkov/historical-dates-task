import React from "react";
import { HistoricalDates } from "./historicalDates";
import { Swiper } from "./swipper";

function Main(){
  return <div className="main">
    <HistoricalDates/>
    <Swiper/>
  </div>
}

export {Main}