import React from "react";
import left from '../assets/left.png'
import right from '../assets/right.png'

type ChildProps = {
  onButtonClickIncrement: () => void
  onButtonClickDecrement: () => void
  count: number
};

function HistoricalDates({onButtonClickIncrement, onButtonClickDecrement, count}: ChildProps ){
  return <div className="historical-dates">
    <h1 className="historical-dates-title">Исторические <br />даты</h1>

    <div className="change-dates-btn">
      <p>0{count+1}/06</p>
      <div className="change-btns">
        <img src={left} alt="left btn" onClick={onButtonClickDecrement}/>
        <img src={right} alt="right btn" onClick={onButtonClickIncrement}/>
      </div>
    </div>
  </div>
}

export {HistoricalDates}