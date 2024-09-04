import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from "recoil";
import styles from "./CommonFooter.module.scss";
import { imageSelector } from "@store/selectors/imageSelector";
import { pageState } from "@store/atoms/pageState.store";
import { useMemo, useEffect, useState } from "react";

function CommonFooter() {
  const images = useRecoilValueLoadable(imageSelector);
  const [currentPage, setCurrentPage] = useRecoilState(pageState);
  const [currentGroup, setCurrentGroup] = useState(1);

  const totalPages = images.contents.total_pages;
  const pageGroupSize = 10;

  useEffect(() => {
    // 컴포넌트 마운트 후 초기 페이지 설정
    setCurrentPage(1);
    setCurrentGroup(1);
  }, []);

  useEffect(() => {
    // currentPage가 변경될 때마다 currentGroup 업데이트
    setCurrentGroup(Math.ceil(currentPage / pageGroupSize));
  }, [currentPage, pageGroupSize]);

  const pageList = useMemo(() => {
    const start = (currentGroup - 1) * pageGroupSize + 1;
    const end = Math.min(currentGroup * pageGroupSize, totalPages);
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }, [currentGroup, totalPages, pageGroupSize]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handlePrevGroup = () => {
    if (currentGroup > 1) {
      const newPage = (currentGroup - 2) * pageGroupSize + 1;
      setCurrentPage(newPage);
    }
  };

  const handleNextGroup = () => {
    if (currentGroup * pageGroupSize < totalPages) {
      const newPage = currentGroup * pageGroupSize + 1;
      setCurrentPage(newPage);
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.pagination}>
        <button
          className={styles.pagination__button}
          onClick={handlePrevGroup}
          disabled={currentGroup === 1}
        >
          <img src="src/assets/icons/icon-arrowLeft.svg" alt="Previous" />
        </button>
        {pageList.map((pageNum) => (
          <button
            key={pageNum}
            className={`${styles.pagination__button} ${
              currentPage === pageNum ? styles.active : ""
            }`}
            onClick={() => handlePageChange(pageNum)}
          >
            {pageNum}
          </button>
        ))}
        <button
          className={styles.pagination__button}
          onClick={handleNextGroup}
          disabled={currentGroup * pageGroupSize >= totalPages}
        >
          <img src="src/assets/icons/icon-arrowRight.svg" alt="Next" />
        </button>
      </div>
    </footer>
  );
}

export default CommonFooter;
