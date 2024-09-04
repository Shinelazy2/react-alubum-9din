import CommonHader from "@components/common/header/CommonHader";
import styles from "./index.module.scss";
import CommonSearchBar from "@components/common/searchBar/CommonSearchBar";
import CommonNav from "@components/common/navigation/CommonNav";
import CommonFooter from "@components/common/footer/CommonFooter";
import Card from "./components/Card";
import { useMemo, useState } from "react";
import { CardDTO } from "./types/card.type";
import { useRecoilValueLoadable } from "recoil";
import { imageSelector } from "@store/selectors/imageSelector";
import DetailDialog from "@components/common/dialog/DetailDialog";
function Index() {
  // const imgSelector = useRecoilValue(imageSelector);
  const imgSelector = useRecoilValueLoadable(imageSelector);
  const [open, setOpen] = useState<boolean>(false); // detail dialog open state
  const [imageData, setImageData] = useState<CardDTO>();

  // useEfeect - Watch ???
  // computed
  // 반복되는 경우에 사용하고, Caching 한다.
  const CARD_LIST = useMemo(() => {
    if (imgSelector.state === "hasValue") {
      return imgSelector.contents.map((card: CardDTO) => {
        return (
          <Card
            data={card}
            key={card.id}
            handleDialog={setOpen}
            handleSetData={setImageData}
          />
        );
      });
    } else {
      <div>Loading</div>;
    }
  }, [imgSelector]);

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
        <div className={styles.page__contents__imageBox}>{CARD_LIST}</div>
      </div>
      <CommonFooter />
      {open && imageData && (
        <DetailDialog data={imageData} handleDialog={setOpen} />
      )}
    </div>
  );
}

export default Index;
