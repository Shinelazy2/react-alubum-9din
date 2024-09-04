import styles from "./DetailDialog.module.scss";

function DetailDialog() {
  return (
    <div className={styles.container}>
      <div className={styles.container__dialog}>
        <div className={styles.container__dialog__header}>
          <div className={styles.close}>
            <button className={styles.close__button}>{/* icon */}Close</button>
            <img
              className={styles.close__autorImage}
              alt="사진작가 프로필 사진"
            />
            <span className={styles.close__autorName}>ShineLazy</span>
          </div>
          <div className={styles.bookmark}>
            <button className={styles.bookmark__button}>
              {/* icon */}BookMark
            </button>
            <button className={styles.bookmark__button}>Download</button>
          </div>
        </div>
        <div className={styles.container__dialog__body}>
          <img src="" alt="Details" className={styles.image} />
        </div>
        <div className={styles.container__dialog__footer}>
          <div className={styles.infoBox}>
            <div className={styles.infoBox__item}>
              <span className={styles.infoBox__item__label}>Resolution</span>
              <span className={styles.infoBox__item__value}>1920x1080</span>
            </div>
            <div className={styles.infoBox__item}>
              <span className={styles.infoBox__item__label}>Resolution</span>
              <span className={styles.infoBox__item__value}>1920x1080</span>
            </div>
            <div className={styles.infoBox__item}>
              <span className={styles.infoBox__item__label}>Resolution</span>
              <span className={styles.infoBox__item__value}>1920x1080</span>
            </div>
          </div>
          <div className={styles.tagBox}>
            <div className={styles.tagBox__tag}>TagData</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailDialog;
