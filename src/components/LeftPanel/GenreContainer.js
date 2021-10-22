import React from "react";
import styles from "./GenreContainer.module.css";
import Button from "./Button";

function GenreContainer({
  listOfGenres,
  genreExpanded,
  setGenreExpanded,
  setPlatformExpanded,
  filterByGenre,
  currGenre,
}) {
  return (
    <div className={styles.genreContainer}>
      <h4
        className={styles.genreTitle}
        onClick={() => {
          setPlatformExpanded(false);
          setGenreExpanded(!genreExpanded);
        }}
      >
        Genres
      </h4>
      <div
        className={`${styles.genreBtnContainer} ${
          genreExpanded ? styles.genreBtnContainerExpanded : ""
        }`}
      >
        <Button
          id="allGenres"
          data={{ id: "", name: "All" }}
          specClass={`genre`}
          clickAction={filterByGenre}
        />
        {listOfGenres
          ? listOfGenres.map((genre) => {
              return (
                <Button
                  id={genre}
                  marker={currGenre === genre.id}
                  data={genre}
                  specClass={`genre`}
                  clickAction={filterByGenre}
                />
              );
            })
          : null}
      </div>
    </div>
  );
}

export default GenreContainer;
