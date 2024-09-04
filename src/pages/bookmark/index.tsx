import CommonHader from "@components/common/header/CommonHader";
import styles from "./bookmark.module.scss";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import { CardDTO } from "@pages/index/types/card.type";
import DetailDialog from "@components/common/dialog/DetailDialog";

function Index() {
  const [data, setData] = useState<CardDTO[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<CardDTO | null>(null);

  const getData = () => {
    const bookmarks = JSON.parse(localStorage.getItem("bookmark") || "[]");
    setData(bookmarks);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleCardClick = (image: CardDTO) => {
    setSelectedImage(image);
    setOpen(true);
  };

  return (
    <div className={styles.page}>
      <CommonHader />
      <main className={styles.page__contents}>
        {data.length === 0 ? (
          <div className={styles.page__contents_noData}>
            조회 가능한 데이터가 없습니다.
          </div>
        ) : (
          data.map((image) => (
            <Card
              key={image.id}
              data={image}
              onClick={() => handleCardClick(image)}
            />
          ))
        )}
      </main>
      {open && selectedImage && (
        <DetailDialog data={selectedImage} handleDialog={setOpen} />
      )}
    </div>
  );
}

export default Index;
