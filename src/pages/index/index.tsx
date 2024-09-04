import CommonHader from "@components/common/header/CommonHader";
import styles from "./index.module.scss";
import CommonSearchBar from "@components/common/searchBar/CommonSearchBar";
import CommonNav from "@components/common/navigation/CommonNav";
import CommonFooter from "@components/common/footer/CommonFooter";
import Card from "./components/Card";
import { useState } from "react";
import { CardDTO } from "./types/card.type";
import { useRecoilValue } from "recoil";
import { imageSelector } from "@store/selectors/imageSelector";
import DetailDialog from "@components/common/dialog/DetailDialog";
function Index() {
  const imgSelector = useRecoilValue(imageSelector);
  const [open, setOpen] = useState<boolean>(false); // detail dialog open state
  const [imageData, setImageData] = useState<CardDTO[]>([]);

  const cardList = imgSelector.data.results.map((card: CardDTO) => {
    return <Card data={card} key={card.id} handleDialog={setOpen} />;
  });

  return (
    <div className={styles.page}>
      <CommonHader />
      <CommonNav />
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
        <div className={styles.page__contents__imageBox}>{cardList}</div>
      </div>
      <CommonFooter />
      {open && <DetailDialog />}
    </div>
  );
}

export default Index;
