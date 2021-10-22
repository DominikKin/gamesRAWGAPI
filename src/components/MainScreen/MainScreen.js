import React from "react";
import styles from "./MainScreen.module.css";
import CardContainer from "./CardContainer";
import ReactPaginate from "react-paginate";
import {
  BsArrowLeftCircleFill,
  BsArrowRightCircleFill,
  BsArrowDownCircleFill,
  BsArrowUpCircleFill,
} from "react-icons/bs";

function MainScreen({
  listOfGames,
  filterByPage,
  openModal,
  selectGameForModal,
  currPage,
}) {
  function handlePageclick(data) {
    filterByPage(data.selected);
  }
  return (
    <div className={styles.mainContainer}>
      {!listOfGames ? null : listOfGames.length > 10 ? (
        <BsArrowUpCircleFill className={styles.upDownArrow} />
      ) : null}
      <CardContainer
        listOfGames={listOfGames}
        openModal={openModal}
        selectGameForModal={selectGameForModal}
      />
      {!listOfGames ? null : listOfGames.length > 10 ? (
        <BsArrowDownCircleFill className={styles.upDownArrow} />
      ) : null}
      <ReactPaginate
        forcePage={currPage - 1}
        containerClassName={styles.paginationContainer}
        pageClassName={styles.paginationPage}
        previousClassName={styles.paginationPage}
        nextClassName={styles.paginationPage}
        breakClassName={styles.paginationPage}
        previousLabel={<BsArrowLeftCircleFill />}
        nextLabel={<BsArrowRightCircleFill />}
        pageCount={100}
        marginPagesDisplayed={1}
        pageRangeDisplayed={6}
        breakLabel={"..."}
        onPageChange={handlePageclick}
        activeClassName={styles.pageSelected}
      />
    </div>
  );
}

export default MainScreen;
// BsArrowLeftCircleFill
// BsArrowRightCircleFill
