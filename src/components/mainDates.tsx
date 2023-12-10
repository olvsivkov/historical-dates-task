import React from "react";
import json from "../DB/dataBase.json"

interface ICount {
  count: number
}

function MainDates({count}: ICount){

  const initial = json.dates[count].dates

  return <div className="main-dates">
      <span className="left-date">{initial.date1}</span> 
      <span className="right-date">{initial.date2}</span> 
    </div>
}

export {MainDates}