import { useState } from "react";
import styles from "./CommonSearchBar.module.scss";
import { useRecoilState } from "recoil";
import { searchState } from "@store/atoms/searchState.store";

function CommonSearchBar() {
  const [search, setSearch] = useRecoilState(searchState);
  const [text, setText] = useState<string>("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const onSearch = () => {
    if (text === "") {
      setSearch("");
    } else {
      setSearch(text);
    }
  };
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      if (text === "") {
        setSearch("");
      } else {
        setSearch(text);
      }
    }
  };
  return (
    <div className={styles.searchBar}>
      <div className={styles.searchBar__search}>
        <input
          className={styles.searchBar__search__input}
          onChange={onChange}
          onKeyDown={handleKeyDown}
          value={text}
          type="text"
          placeholder="찾으실 이미지를 검색하세요."
        />
        <img src="src/assets/icons/icon-search.svg" onClick={onSearch} alt="" />
      </div>
    </div>
  );
}

export default CommonSearchBar;
