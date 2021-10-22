import React from "react";
import GameCard from "./GameCard";
import styles from "./CardContainer.module.css";

function CardContainer({ listOfGames, openModal, selectGameForModal }) {
  return (
    <div className={styles.cardContainer}>
      {!listOfGames
        ? null
        : listOfGames.map((game) => {
            return (
              <GameCard
                key={game.id}
                game={game}
                openModal={openModal}
                selectGameForModal={selectGameForModal}
              />
            );
          })}
    </div>
  );
}

export default CardContainer;
// : <div>oelsdfsdfsdfsdf</div>
