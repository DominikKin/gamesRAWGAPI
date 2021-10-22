import React from "react";
import styles from "./QualityContainer.module.css";
import Button from "./Button";

function QualityContainer({ listOfQuality, filterByQuality, currQuality }) {
  return (
    <div className={styles.qualityContainer}>
      <h4 className={styles.qualityTitle}>Quality</h4>
      {listOfQuality.map((quality) => {
        return (
          <Button
            marker={currQuality === quality.id}
            data={quality}
            specClass={
              quality.name === "Awesome"
                ? "aws"
                : quality.name === "Great"
                ? "grt"
                : quality.name === "Good"
                ? "good"
                : quality.name === "Meh..."
                ? "meh"
                : "rub"
            }
            clickAction={filterByQuality}
          />
        );
      })}
    </div>
  );
}

export default QualityContainer;
