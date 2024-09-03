import CommonHader from "@components/common/header/CommonHader";
import styles from "./index.module.scss";
import CommonSearchBar from "@components/common/searchBar/CommonSearchBar";

function index() {
  return (
    <div className={styles.page}>
      <CommonHader />
      <div className={styles.page__contents}>
        <div className={styles.page__contents__introBox}>
          <div className={styles.wrapper}>
            <span className={styles.wrapper__title}>PotoSplash</span>
            <span className={styles.wrapper__desc}>
              Internet <br />
              Createor
            </span>
            <CommonSearchBar />
          </div>
        </div>
        <div className={styles.page__content__imageBox}></div>
      </div>
      {/** Common UI */}
    </div>
  );
}

export default index;
