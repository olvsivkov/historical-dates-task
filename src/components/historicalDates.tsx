
import React from "react";
//import left from '../assets/left.png'

function HistoricalDates(){
  return <div className="historical-dates">
    <h1 className="historical-dates-title">Исторические <br />даты</h1>
    <p className="main-dates">
      <span className="left-date">2015</span> 
      <span className="right-date">2022</span> 
    </p>
    <div className="change-dates-btn">
      <p>06/06</p>
      <div>
        <img src="../assets/left.png" alt="left btn" />
        <img src="../assets/right.png" alt="right btn" />
      </div>
    </div>
  </div>
}

export {HistoricalDates}