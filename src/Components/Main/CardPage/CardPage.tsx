import React from "react";
import { CardContentD } from "../../../data/CardContentD"; // Adjust the import path as necessary
import CardContent from "../CardPage/CardContent/CardContent";
import { ICardContent } from "../../../models/CardContentModels";
import styles from "./CardPage.module.css";

function CardPage() {
  // Initialize topCards with data from CardContentD
  const topCards: ICardContent[] = CardContentD;

  return (
    <div className={styles.CardPage}>
      {topCards.map((card) => (
        <CardContent card={card} key={card.id} />
      ))}
    </div>
  );
}

export default CardPage;
