import { Card } from "./components/card/card";
import { cardsData } from "./data/data";
export const App = () => {
  return (
    <div className="wrapper">
      <h1 className="title">PushKeen Test</h1>
      <div className="cards">
        {cardsData.map((el, index) => (
          <Card key={index} title={el.title} text={el.text}></Card>
        ))}
      </div>
    </div>
  );
};
