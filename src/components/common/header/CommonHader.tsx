import { useNavigate } from "react-router-dom";
import styles from "./CommonHeader.module.scss";

function CommonHader() {
  const navigate = useNavigate();
  const moveToPage = (path: string) => {
    navigate(path);
  };
  return (
    <header className={styles.header}>
      <div className={styles.header__logoBox} onClick={() => moveToPage("/")}>
        <img
          className={styles.header__logoBox__logo}
          src="src/assets/images/image-logo.png"
        />
        <span className={styles.header__logoBox__title}> Photo Splash</span>
      </div>
      <div className={styles.header__profileBox}>
        <button className={styles.header__profilBox__button}>Photo</button>
        <button
          className={styles.header__profilBox__button}
          onClick={() => moveToPage("/bookmark")}
        >
          북마크
        </button>
        <span className={styles.header__profilebox__userName}>
          HyunJun | @shinelazy@gmail.com
        </span>
      </div>
    </header>
  );
}

export default CommonHader;
