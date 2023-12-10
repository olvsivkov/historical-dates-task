import React, { useState, useEffect }  from "react";

interface CircleProps {
  active: boolean;
  onClick: () => void;
  text: string;
  number: string;
}

interface ICount {
  count: number
}

const Circle: React.FC<CircleProps> = ({ active, onClick, text, number }) => {
  return (
    <div
      className={`circle ${active ? 'active-circle' : ''}`}
      onClick={onClick}
    >
      
      {active ? (<div className="active-block">
          <div className="active-block-div">{number}</div>
          <span className="active-block-span">
            {text}
          </span>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

function Ellipse ({count}: ICount){
  const [activeCircle, setActiveCircle] = useState<number>(count);

  useEffect(() => {
    setActiveCircle(count);
  }, [count]);

  const handleCircleClick = (index: number) => {
    setActiveCircle(index);
  };
 


  return (
      <div className="ellipse">
      <Circle
          active={(activeCircle) === 0}
          onClick={() => handleCircleClick(0)}
          text="Наука"
          number ="1"
        />
        <Circle
          active={(activeCircle) === 1}
          onClick={() => handleCircleClick(1)}
          text="История"
          number ="2"
        />
        <Circle
          active={(activeCircle) === 2}
          onClick={() => handleCircleClick(2)}
          text="Литература"
          number ="3"
        />
        <Circle
          active={(activeCircle) === 3}
          onClick={() => handleCircleClick(3)}
          text="Искусство"
          number ="4"
        />
        <Circle
          active={(activeCircle) === 4}
          onClick={() => handleCircleClick(4)}
          text="Люди"
          number ="5"
        />
        <Circle
          active={(activeCircle) === 5}
          onClick={() => handleCircleClick(5)}
          text="Медицина"
          number ="6"
        />
      </div>
  );
}
export {Ellipse}