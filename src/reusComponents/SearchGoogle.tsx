import React, { useState, useRef } from "react";
import styles from "../styles/SearchInput.module.css";

export default function SearchGoogle() {
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // perform search logic and navigate to URL based on searchQuery
    window.location.href = `https://www.liveryvideo.com/?s=${searchQuery}`;
  };

  const handleSearchQueryChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchQuery(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
     
    }
  };

  return (
    <section className={styles.SearchInput_Section}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="myInput">
          <button type="submit"  id="buttonTitle" title="Title">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-search"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth="4"
            stroke="#929aff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="10" cy="10" r="7" />
            <line x1="21" y1="21" x2="15" y2="15" />
          </svg>
          </button>
        </label>
        <input
          id="myInput"
          type="search"
        //   autoComplete="off"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchQueryChange}
          ref={inputRef}
          onKeyDown={handleKeyDown}
        />
      </form>
    </section>
  );
}