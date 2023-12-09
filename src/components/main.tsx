import React from "react";
import { HistoricalDates } from "./historicalDates";
import { SwiperItem } from "./swipper";
import { Ellipse } from "./ellipse";
import { MainDates } from "./mainDates";
import {Lines} from "./lines"
import json from "../DB/dataBase.json"


function Main(){
  const initial = json.dates[0].items
  console.log(initial)

  return <div className="main">
      <Lines/>
      <HistoricalDates/>
      <SwiperItem/>
      <Ellipse/>
      <MainDates/>
  </div>
}

export {Main}