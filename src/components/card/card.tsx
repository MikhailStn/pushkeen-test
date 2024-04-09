import { useState } from "react";
import "./card.css";

interface Props {
  title: string;
  text: string;
}

export const Card = (props: Props) => {
  const [className, setClassName] = useState("card");

  return (
    <div
      className={className}
      onClick={() => {
        setClassName(className === "card" ? "card card__active" : "card");
      }}
    >
      <h2 className="card__title">{props.title}</h2>
      <p className="card__text">{props.text}</p>
    </div>
  );
};
