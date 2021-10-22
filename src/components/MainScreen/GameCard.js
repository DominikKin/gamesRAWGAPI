import React from "react";
import styles from "./GameCard.module.css";

function GameCard({ game, openModal, selectGameForModal }) {
  return (
    <div
      className={styles.gameCard}
      onClick={() => {
        openModal(true);
        selectGameForModal(game.id);
      }}
    >
      {game.background_image ? (
        <img src={game.background_image} alt={game.name} />
      ) : null}
      <div className={styles.gameTitle}>
        <h2>{game.name}</h2>
      </div>
      <div
        className={`${styles.meta} ${
          !game.metacritic
            ? styles.none
            : game.metacritic < 60
            ? styles.red
            : game.metacritic < 80
            ? styles.yellow
            : styles.green
        }`}
      >
        {game.metacritic}
      </div>
    </div>
  );
}

export default GameCard;
