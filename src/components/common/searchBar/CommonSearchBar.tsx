import styles from "./CommonSearchBar.module.scss";

function CommonSearchBar() {
  return (
    <div className={styles.searchBar}>
      <div className={styles.searchBar__search}>
        <input
          className={styles.searchBar__search__input}
          type="text"
          placeholder="찾으실 이미지를 검색하세요."
        />
        <img src="src/assets/icons/icon-search.svg" />
      </div>
    </div>
  );
}

export default CommonSearchBar;
