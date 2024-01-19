import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from 'redux/cars/operations';
import { setCurrentPage } from 'redux/cars/paginationSlice';
import { selectPagination } from 'redux/cars/selectors';

export const LoadMoreButton = () => {
  const { currentPage } = useSelector(selectPagination);
  const dispatch = useDispatch();

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;

    dispatch(setCurrentPage(nextPage));

    dispatch(fetchCars({ page: nextPage }));
  };

  return (
    <>
      <button type="button" onClick={handleLoadMore}>
        Load more
      </button>
    </>
  );
};
