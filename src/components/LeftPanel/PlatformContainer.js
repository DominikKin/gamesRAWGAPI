import React from "react";
import styles from "./PlatformContainer.module.css";
import Button from "./Button";

function PlatformContainer({
  listOfPlatforms,
  togglePlatforms,
  setPlatformExpanded,
  platformExpanded,
  setGenreExpanded,
  filterByPlatform,
  currPlatform,
}) {
  return (
    <div className={styles.platformContainer}>
      <h4
        className={styles.platformTitle}
        onClick={() => {
          setGenreExpanded(false);
          setPlatformExpanded(!platformExpanded);
        }}
      >
        Platforms
      </h4>

      <div
        className={`${styles.platformBtnContainer} ${
          platformExpanded ? styles.platformBtnContainerExpanded : ""
        }`}
      >
        <div className={styles.toggleBtnsContainer}>
          <Button
            data={{ name: `New` }}
            clickAction={togglePlatforms}
            specClass={"newOld"}
          />
          <Button
            data={{ name: `Old` }}
            clickAction={togglePlatforms}
            specClass={"newOld"}
          />
        </div>
        <Button
          id="allPlatforms"
          data={{ id: "", name: "All" }}
          specClass={`platform`}
          clickAction={filterByPlatform}
        />
        {listOfPlatforms
          ? listOfPlatforms.map((platform) => {
              return (
                <Button
                  id={platform}
                  marker={currPlatform === platform.id}
                  data={platform}
                  specClass={`platform`}
                  clickAction={filterByPlatform}
                />
              );
            })
          : null}
      </div>
    </div>
  );
}

export default PlatformContainer;
