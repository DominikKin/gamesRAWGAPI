import React, { useState, useEffect } from "react";
import styles from "./Search.module.css";
import { IoEnter } from "react-icons/io5";

function Search({ filterBySearch }) {
  const [search, setSearch] = useState("");
  function inputChange(e) {
    setSearch(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!search) return;
    filterBySearch(search);
    setSearch("");
  }
  return (
    <div className={styles.searchContainer}>
      <form onSubmit={handleSubmit} className={styles.searchForm}>
        <input
          value={search}
          onChange={inputChange}
          className={styles.input}
          placeholder={"Search..."}
        />
      </form>
    </div>
  );
}

export default Search;
