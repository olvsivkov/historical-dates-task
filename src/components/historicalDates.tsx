
import React from "react";
import left from '../assets/left.png'
import right from '../assets/right.png'

function HistoricalDates(){
  return <div className="historical-dates">
    <h1 className="historical-dates-title">Исторические <br />даты</h1>

    <div className="change-dates-btn">
      <p>06/06</p>
      <div className="change-btns">
        <img src={left} alt="left btn" />
        <img src={right} alt="right btn" />
      </div>
    </div>
  </div>
}

export {HistoricalDates}