import React from "react";
import json from "../DB/dataBase.json"

function MainDates(){

  const initial = json.dates[0].dates
  console.log(initial)

  return <div className="main-dates">
      <span className="left-date">{initial.date1}</span> 
      <span className="right-date">{initial.date2}</span> 
    </div>
}

export {MainDates}