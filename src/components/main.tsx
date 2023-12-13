import React, { useState } from "react";
import { HistoricalDates } from "./historicalDates";
import { SwiperItem } from "./swipper";
import { Ellipse } from "./ellipse";
import { MainDates } from "./mainDates";
import {Lines} from "./lines"



function Main(){
  const [count, setCount] = useState(0);
  
  const handleClickEllipseComponents = (arg: number) => {
    setCount(arg)
  }

  const handleClickIncrement = () => {
    const newCount = count + 1;
    setCount(newCount > 5 ? 0: newCount);
  };

  const handleClickDecrement = () => {
    const newCount = count - 1;
    setCount(newCount < 0 ? 5: newCount);
  };
  
  return <div className="main">
      <Lines/>
      <HistoricalDates 
        onButtonClickIncrement={handleClickIncrement}
        onButtonClickDecrement={handleClickDecrement}
        count={count}
      />
      <SwiperItem 
        count={count}
      />
      <MainDates
        count={count}
        />
      <Ellipse
        count={count}
        handleClickEllipseComponents={handleClickEllipseComponents}
      />
  </div>
}

export {Main}