import React, { useState } from "react";
import styles from "./LeftPanel.module.css";
import GenreContainer from "./GenreContainer";
import PlatformContainer from "./PlatformContainer";
import QualityContainer from "./QualityContainer";
import Search from "./Search";

function LeftPanel({
  listOfGenres,
  listOfPlatforms,
  togglePlatforms,
  filterByGenre,
  filterByPlatform,
  listOfQuality,
  filterByQuality,
  currGenre,
  currPlatform,
  currQuality,
  filterBySearch,
}) {
  const [genreExpanded, setGenreExpanded] = useState(false);
  const [platformExpanded, setPlatformExpanded] = useState(false);

  return (
    <div className={styles.leftPanel}>
      <GenreContainer
        listOfGenres={listOfGenres}
        setGenreExpanded={setGenreExpanded}
        setPlatformExpanded={setPlatformExpanded}
        genreExpanded={genreExpanded}
        filterByGenre={filterByGenre}
        currGenre={currGenre}
      />
      <PlatformContainer
        listOfPlatforms={listOfPlatforms}
        togglePlatforms={togglePlatforms}
        setPlatformExpanded={setPlatformExpanded}
        setGenreExpanded={setGenreExpanded}
        platformExpanded={platformExpanded}
        filterByPlatform={filterByPlatform}
        currPlatform={currPlatform}
      />
      <QualityContainer
        listOfQuality={listOfQuality}
        filterByQuality={filterByQuality}
        currQuality={currQuality}
      />
      <Search filterBySearch={filterBySearch} />

      <div className={styles.footer}>
        powered by <a href="https://rawg.io/">rawg.io</a>
      </div>
    </div>
  );
}

export default LeftPanel;

// https://api.rawg.io/api/genres
