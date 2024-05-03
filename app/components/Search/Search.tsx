"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useRef, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { CgCloseO } from "react-icons/cg";

import styles from "./Search.module.css";
import useDebounce from "@/app/hooks/useDebounce";
import { updateSearchParams } from "@/app/utils/updateSearchParams";

const Search = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchText, setSearchText] = useState(searchParams.get("query") || "");
  const clearRef = useRef<HTMLButtonElement>(null);

  const handleSearch = () => {
    const newParams = updateSearchParams(searchParams, [
      { key: "query", value: searchText },
    ]);

    router.push(newParams);
  };

  // wait 500ms after last keypress
  useDebounce(handleSearch, 500, [searchText]);

  return (
    <div className={styles.searchWrapper}>
      <div className={styles.searchInputContainer}>
        <input
          type="text"
          placeholder="Enter what you are looking for"
          className={styles.searchInputField}
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />
        {!searchText && (
          <div className={styles.searchIcon}>
            <IoSearch />
            <span>Search</span>
          </div>
        )}

        <button type="button" className={styles.searchDelete} ref={clearRef}>
          <CgCloseO
            onClick={() => {
              setSearchText("");
              clearRef.current?.blur();
            }}
          />
        </button>
      </div>
    </div>
  );
};

export default Search;
