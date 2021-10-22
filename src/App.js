import React, { useState, useEffect } from "react";
import useFetch from "./components/useFetch";
import styles from "./App.module.css";
import MainScreen from "./components/MainScreen/MainScreen";
import LeftPanel from "./components/LeftPanel/LeftPanel";
import Modal from "./components/Modal";

const MAIN_URL =
  "https://api.rawg.io/api/games?key=e0c2967df4484d51b5eb22795c64467f";

const SEARCH_URL = `${MAIN_URL}&page_size=40&search=`;

function App() {
  const [currGenre, setCurrGenre] = useState("");
  const [currPlatform, setCurrPlatform] = useState("");
  const [currQuality, setCurrQuality] = useState("90,100");
  const [listOfGames, setListOfGames] = useState([1]);
  const [currSearchedGame, setCurrSearchedGame] = useState([]);
  const [selectedGame, setSelectedGame] = useState();

  const [gameForModal, setGameForModal] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenOverlay, setIsOpenOverlay] = useState(false);

  const [listOfGenres, setListOfGenres] = useState([]);

  const [listOfPlatforms, setListOfPlatforms] = useState([]);

  const [listOfQuality, setListOfQuality] = useState([
    { id: "90,100", name: "Awesome" },
    { id: "80,89", name: "Great" },
    { id: "70,79", name: "Good" },
    { id: "60,69", name: "Meh..." },
    { id: "1,59", name: "Rubbish" },
  ]);

  //////////////////FILTER FUNCTIONS!!!!!!!!!!!!!

  function filterByGenre(genre) {
    setCurrGenre(genre.id);
    setCurrPage(1);
  }
  function filterByPlatform(platform) {
    setCurrPlatform(platform.id);
    setCurrPage(1);
  }
  function filterByQuality(quality) {
    setCurrQuality(quality.id);
    setCurrPage(1);
  }
  function filterBySearch(input) {
    setCurrSearchedGame(input);
    setCurrPage(1);
  }

  function filterByPage(page) {
    setCurrPage(page + 1);
  }

  function openModal(openClose) {
    if (!openClose) {
      setGameForModal({});
      setTimeout(() => {
        setIsOpenOverlay(openClose);
      }, 500);
      setIsOpenModal(openClose);
    } else {
      setIsOpenModal(openClose);
      setIsOpenOverlay(openClose);
    }
  }

  function selectGameForModal(game) {
    setSelectedGame(game);
  }
  //

  ////////////////FETCH FUNCTIONS!!!!!!!!!!!!!!
  const gameDetails = useFetch(
    `https://api.rawg.io/api/games/${selectedGame}?key=e0c2967df4484d51b5eb22795c64467f`
  ).allData;

  const searchedGames = useFetch(`${SEARCH_URL}${currSearchedGame}`).allData
    .results;

  const listOfGamesData = useFetch(
    `${MAIN_URL}&page_size=40&metacritic=${currQuality}${
      currGenre ? `&genres=${currGenre}` : ""
    }${currPlatform ? `&platforms=${currPlatform}` : ""}&page=${currPage}`
  ).allData.results;

  const listOfGenresData = useFetch(
    "https://api.rawg.io/api/genres?key=e0c2967df4484d51b5eb22795c64467f"
  ).allData.results;

  const listOfPlatformsData = useFetch(
    "https://api.rawg.io/api/platforms?key=e0c2967df4484d51b5eb22795c64467f&page_size=40"
  ).allData.results;

  ////////////////USEEFFECT FUNCTIONS!!!!!!!!!!!!!!
  useEffect(() => {
    setListOfGames(searchedGames);
  }, [searchedGames]);

  useEffect(() => {
    setGameForModal(gameDetails);
  }, [gameDetails]);

  useEffect(() => {
    setListOfGames(listOfGamesData);
  }, [listOfGamesData, currGenre, currPage, currPlatform, currQuality]);

  useEffect(() => {
    setListOfGenres(listOfGenresData);
  }, listOfGenresData);

  useEffect(() => {
    setListOfPlatforms(
      listOfPlatformsData ? listOfPlatformsData.slice(0, 22) : null
    );
  }, listOfPlatformsData);

  function togglePlatforms(newPlatforms) {
    setListOfPlatforms(
      newPlatforms.name === "New"
        ? listOfPlatformsData.slice(0, 22)
        : newPlatforms.name === "Old"
        ? listOfPlatformsData.slice(23)
        : null
    );
  }

  return (
    <div className={styles.App}>
      <LeftPanel
        listOfGenres={listOfGenres}
        setListOfGenres={setListOfGenres}
        listOfPlatforms={listOfPlatforms}
        setListOfPlatforms={setListOfPlatforms}
        listOfQuality={listOfQuality}
        setListOfQuality={setListOfQuality}
        togglePlatforms={togglePlatforms}
        filterByGenre={filterByGenre}
        filterByPlatform={filterByPlatform}
        filterByQuality={filterByQuality}
        currGenre={currGenre}
        currPlatform={currPlatform}
        currQuality={currQuality}
        filterBySearch={filterBySearch}
      />
      <MainScreen
        listOfGames={listOfGames}
        setListOfGames={setListOfGames}
        filterByPage={filterByPage}
        openModal={openModal}
        selectGameForModal={selectGameForModal}
        currPage={currPage}
      />
      <Modal
        openModal={openModal}
        isOpenModal={isOpenModal}
        isOpenOverlay={isOpenOverlay}
        gameForModal={gameForModal}
      />
    </div>
  );
}

export default App;
