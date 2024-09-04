import CommonHader from "@components/common/header/CommonHader";
import styles from "./index.module.scss";
import CommonSearchBar from "@components/common/searchBar/CommonSearchBar";
import CommonNav from "@components/common/navigation/CommonNav";
import CommonFooter from "@components/common/footer/CommonFooter";
import Card from "./components/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { CardDTO } from "./types/card.type";

function Index() {
  const [imgUrls, setImgUrls] = useState<CardDTO[]>([]);

  const getData = async () => {
    const API_URL = "https://api.unsplash.com/search/photos/";
    const API_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;
    console.log("import.meta.env", import.meta.env);

    // const API_KEY = 'SbD33OO3IBfwShiBLG5fGoROOc1gJoepFKHrDu_IITQ'; // 임시 방편

    console.log("API_KEY:", API_KEY); // 디버깅을 위해 API 키 출력

    if (!API_KEY) {
      console.error("Unsplash API key is not defined");
      return;
    }

    const PER_PAGE = 30;
    const searchValue = "cat";
    const pageValue = 30;
    try {
      const response = await axios.get(
        `${API_URL}?query=${searchValue}&client_id=${API_KEY}&page=${pageValue}&per_page=${PER_PAGE}`
      );
      if (response.status === 200) {
        setImgUrls(response.data.results);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const cardList = imgUrls.map((card: CardDTO) => {
    return <Card data={card} key={card.id} />;
  });

  useEffect(() => {
    getData();
  }, []);
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
    </div>
  );
}

export default Index;
