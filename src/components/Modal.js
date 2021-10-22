import React from "react";
import styles from "./Modal.module.css";
import { IoMdCloseCircle } from "react-icons/io";
import { PieChart } from "react-minimal-pie-chart";

function Modal({ openModal, isOpenModal, isOpenOverlay, gameForModal }) {
  return (
    <div className={isOpenOverlay ? styles.overlayShow : styles.overlayHidden}>
      <div className={isOpenModal ? styles.modalShow : styles.modalHidden}>
        {gameForModal ? (
          <div className={styles.modalContainer}>
            {gameForModal.background_image ? (
              <img src={gameForModal.background_image} alt="" />
            ) : null}

            <div className={styles.modalLeft}>
              <div className={styles.modalTitle}>
                <h3>{gameForModal.name}</h3>
                <p>
                  {gameForModal.developers
                    ? gameForModal.developers[0]
                      ? gameForModal.developers[0].name
                      : null
                    : null}
                </p>
              </div>
              <div className={styles.modalGenres}>
                {gameForModal.genres
                  ? gameForModal.genres.map((genre) => {
                      return <p className={styles.modalGenre}>{genre.name}</p>;
                    })
                  : null}
              </div>
              <div className={styles.modalRatings}>
                <h3>What do people think?</h3>
                <PieChart
                  className={styles.modalChart}
                  lineWidth={70}
                  paddingAngle={10}
                  data={[
                    {
                      title: "Good",
                      value: gameForModal.ratings
                        ? gameForModal.ratings[1]
                          ? gameForModal.ratings[1].count +
                            gameForModal.ratings[0].count
                          : 0
                        : 0,
                      color: "#00ff22",
                    },
                    {
                      title: "Meh",
                      value: gameForModal.ratings
                        ? gameForModal.ratings[2]
                          ? gameForModal.ratings[2].count
                          : 0
                        : 0,
                      color: "#ffbb00",
                    },
                    {
                      title: "Rubbish",
                      value: gameForModal.ratings
                        ? gameForModal.ratings[3]
                          ? gameForModal.ratings[3].count
                          : 0
                        : 0,
                      color: "#ff2600",
                    },
                  ]}
                />
              </div>
            </div>
            <div className={styles.modalRight}>
              <div className={styles.modalDescription}>
                {gameForModal.description_raw}
              </div>
            </div>
          </div>
        ) : null}
        <IoMdCloseCircle
          className={styles.closeBtn}
          onClick={() => {
            openModal(false);
          }}
        />
      </div>
    </div>
  );
}

export default Modal;
