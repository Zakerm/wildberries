import React from "react";
import PopapCard from "./PopapCard";
import { CardContentD } from "../../data/CardContentD";
import { ICardContent } from "../../models/CardContentModels";

const Popap: React.FC = () => {
  const topCards: ICardContent[] = CardContentD;
  return (
    <div className="popap">
      {topCards.map((card) => (
        <PopapCard card={card} key={card.id} />
      ))}
    </div>
  );
};

export default Popap;
