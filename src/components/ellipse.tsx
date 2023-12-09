import React, { useState }  from "react";

interface CircleProps {
  active: boolean;
  onClick: () => void;
  text: string
}

const Circle: React.FC<CircleProps> = ({ active, onClick, text }) => {
  return (
    <div
      className={`circle ${active ? 'active-circle' : ''}`}
      onClick={onClick}
    >
      {active ? (
        <span className="active-span">
          {text}
        </span>
      ) : (
        <div></div>
      )}
    </div>
  );
};

function Ellipse (){
  const [activeCircle, setActiveCircle] = useState<number | null>(null);

  const handleCircleClick = (index: number) => {
    setActiveCircle(index);
  };

  return (
      <div className="ellipse">
      <Circle
          active={activeCircle === 0}
          onClick={() => handleCircleClick(0)}
          text="Наука"
        />
        <Circle
          active={activeCircle === 1}
          onClick={() => handleCircleClick(1)}
          text="Text 2"
        />
        <Circle
          active={activeCircle === 2}
          onClick={() => handleCircleClick(2)}
          text="Text 4"
        />
        <Circle
          active={activeCircle === 3}
          onClick={() => handleCircleClick(3)}
          text="Text 5"
        />
        <Circle
          active={activeCircle === 4}
          onClick={() => handleCircleClick(4)}
          text="Text 6"
        />
        <Circle
          active={activeCircle === 5}
          onClick={() => handleCircleClick(5)}
          text="Text 7"
        />
      </div>
  );
}
export {Ellipse}