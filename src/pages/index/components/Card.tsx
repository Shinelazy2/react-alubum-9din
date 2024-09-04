import styles from "./Card.module.scss";
import { CardDTO } from "../types/card.type";

interface Props {
  data: CardDTO;
  handleDialog: (eventValue: boolean) => void;
  handleSetData: (eventValue: CardDTO) => void;
}

function Card({ data, handleDialog, handleSetData }: Props) {
  const openDialog = () => {
    handleDialog(true);
    handleSetData(data);
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
