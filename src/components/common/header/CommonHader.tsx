import styles from "./CommonHeader.module.scss";

function CommonHader() {
  return (
    <div className={styles.header}>
      <div className={styles.header__logoBox}>
        <img
          className={styles.header__logoBox__logo}
          src="src/assets/images/image-logo.png"
        />
        <span className={styles.header__logoBox__title}> Photo Splash</span>
      </div>
      <div className={styles.header__profileBox}>
        <button className={styles.header__profilBox__button}>Photo</button>
        <button className={styles.header__profilBox__button}>BookMark</button>
        <span className={styles.header__profilebox__userName}>
          HyunJun | @shinelazy@gmail.com
        </span>
      </div>
    </div>
  );
}

export default CommonHader;
