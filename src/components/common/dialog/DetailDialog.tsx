import { CardDTO, Tag } from "@pages/index/types/card.type";
import styles from "./DetailDialog.module.scss";
import { useEffect, useState } from "react";
import toast, { toastConfig } from "react-simple-toasts";
import "react-simple-toasts/dist/theme/dark.css";
toastConfig({ theme: "dark" });

interface Props {
  data: CardDTO;
  handleDialog: (eventValue: boolean) => void;
}

function DetailDialog({ data, handleDialog }: Props) {
  const [bookmark, setBookmark] = useState(false);

  const closeDialog = () => {
    handleDialog(false);
  };

  // 북마크 추가
  const addBookmark = (selected: CardDTO) => {
    setBookmark(true);
    const getLocalStorage = JSON.parse(
      localStorage.getItem("bookmark") || "[]"
    );
    if (!getLocalStorage || getLocalStorage === null) {
      localStorage.setItem("bookmark", JSON.stringify([selected]));
      toast("북마크에 추가되었습니다.");
    } else {
      if (
        getLocalStorage.findIndex((item: CardDTO) => item.id === selected.id) >
        -1
      ) {
        toast("이미 북마크에 추가되었습니다.");
      } else {
        const res = [...getLocalStorage];
        res.push(selected);
        localStorage.setItem("bookmark", JSON.stringify(res));
        toast("북마크에 추가되었습니다.");
      }
    }
  };

  useEffect(() => {
    const getLocalStorage = JSON.parse(
      localStorage.getItem("bookmark") || "[]"
    );
    if (
      getLocalStorage.findIndex((item: CardDTO) => item.id === data.id) > -1
    ) {
      setBookmark(true);
    }

    const escKeyDownCloseDialog = (e: any) => {
      if (e.key === "Escape") {
        closeDialog();
      }
    };

    document.addEventListener("keydown", escKeyDownCloseDialog);

    return () => {
      document.removeEventListener("keydown", escKeyDownCloseDialog);
    };
  }, [data]);

  return (
    <div className={styles.container}>
      <div className={styles.container__dialog}>
        <div className={styles.container__dialog__header}>
          <div className={styles.close}>
            <button className={styles.close__button} onClick={closeDialog}>
              <span
                className="material-symbols-outlined"
                style={{ fontSize: 28 + "px" }}
              >
                Close
              </span>
            </button>
            <img
              className={styles.close__autorImage}
              src={data.user.profile_image.small}
              alt="사진작가 프로필 사진"
            />
            <span className={styles.close__autorName}>{data.user.name}</span>
          </div>
          <div className={styles.bookmark}>
            <button
              className={styles.bookmark__button}
              onClick={() => addBookmark(data)}
            >
              {bookmark === false ? (
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: 16 + "px" }}
                >
                  북마크
                </span>
              ) : (
                <span
                  className="material-symbols-outlined added"
                  style={{ fontSize: 16 + "px", color: "red" }}
                >
                  북마크
                </span>
              )}
            </button>
            <button className={styles.bookmark__button}>Download</button>
          </div>
        </div>
        <div className={styles.container__dialog__body}>
          <img src={data.urls.small} alt="Details" className={styles.image} />
        </div>
        <div className={styles.container__dialog__footer}>
          <div className={styles.infoBox}>
            <div className={styles.infoBox__item}>
              <span className={styles.infoBox__item__label}>이미지 크기</span>
              <span className={styles.infoBox__item__value}>
                {data.width} X {data.height}
              </span>
            </div>
            <div className={styles.infoBox__item}>
              <span className={styles.infoBox__item__label}>업로드</span>
              <span className={styles.infoBox__item__value}>
                {data.created_at.split("T")[0]}
              </span>
            </div>
            <div className={styles.infoBox__item}>
              <span className={styles.infoBox__item__label}>
                마지막 업데이트
              </span>
              <span className={styles.infoBox__item__value}>
                {data.updated_at.split("T")[0]}
              </span>
            </div>
            <div className={styles.infoBox__item}>
              <span className={styles.infoBox__item__label}>다운로드</span>
              <span className={styles.infoBox__item__value}>{data.likes}</span>
            </div>
          </div>
          <div className={styles.tagBox}>
            {data.tags.map((tag: Tag) => {
              return (
                <div className={styles.tagBox__tag} key={tag.title}>
                  {tag.title}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailDialog;
