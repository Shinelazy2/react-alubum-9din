import { CardDTO } from "@pages/index/types/card.type";
import styles from "./Card.module.scss";

interface Props {
  data: CardDTO;
  onClick: () => void;
}

function Card({ data, onClick }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.card__imageBox}>
        <img
          src={data.urls.small}
          alt=""
          className={styles.card__imageBox__image}
        />
      </div>
      <div className={styles.card__infoBox}>
        <div className={styles.card__infoBox__row}>
          <span className={styles.label}>작성자</span>
          <span className={styles.value}>{data.user.name}</span>
        </div>
        <div className={styles.card__infoBox__row}>
          <span className={styles.label}>이미지 크기</span>
          <span className={styles.value}>
            {data.width} X {data.height}
          </span>
        </div>
        <div className={styles.card__infoBox__row}>
          <span className={styles.label}>업로드 날짜</span>
          <span className={styles.value}>{data.created_at.split("T")[0]}</span>
        </div>
        <div className={styles.card__infoBox__row}>
          <span className={styles.label}>마지막 업데이트</span>
          <span className={styles.value}>{data.updated_at.split("T")[0]}</span>
        </div>
        <div className={styles.card__infoBox__row}>
          <span className={styles.label}>다운로드 수</span>
          <span className={styles.value}>{data.likes}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
