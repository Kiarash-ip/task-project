import styles from "./Pagination.module.css";
import ArrowIcon from "@/icons/arrow-icon";
import { usePagination, DOTS } from "./usePagination";

interface PaginationProps {
  onPageChange: (pageNumber: number) => void;
  totalCount: number;
  siblingCount: number;
  currentPage: number;
  pageSize: number;
}

const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
}: PaginationProps) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
    return null;
  }

  const onNext = () => onPageChange(currentPage + 1);
  const onPrevious = () => onPageChange(currentPage - 1);
  let lastPage = paginationRange![paginationRange!.length - 1];

  return (
    <ul className={styles.pagination}>
      <button
        className={styles.arrowButton}
        disabled={currentPage === 1}
        onClick={onPrevious}
        style={{
          rotate: "180deg",
        }}
      >
        <ArrowIcon />
      </button>

      {paginationRange?.map((pageNumber) =>
        pageNumber === DOTS ? (
          <li key={pageNumber} className={styles.dots}>
            &#8230;
          </li>
        ) : (
          <div
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            className={`${styles.pageItem} ${
              pageNumber === currentPage ? styles.active : ""
            }`}
          >
            {pageNumber}
          </div>
        )
      )}

      <button
        className={styles.arrowButton}
        disabled={currentPage === lastPage}
        onClick={onNext}
      >
        <ArrowIcon />
      </button>
    </ul>
  );
};

export default Pagination;
