import styles from "./Card.module.scss";
import { CardDTO } from "../types/card.type";

interface Props {
  data: CardDTO;
}

function Card({ data }: Props) {
  const openDialog = () => {
    console.log("clicked");
  };

  return (
    <div className={styles.card} onClick={openDialog}>
      <img
        className={styles.card__image}
        src={data.urls.small}
        alt={data.alt_description}
      />
    </div>
  );
}

export default Card;
