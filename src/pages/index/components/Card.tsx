import styles from "./Card.module.scss";

function Card() {
  const openDialog = () => {
    console.log("clicked");
  };

  return (
    <div className={styles.card} onClick={openDialog}>
      <img className={styles.card__image} src="" alt="" />
    </div>
  );
}

export default Card;
