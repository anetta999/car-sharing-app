import { CarList } from 'components/CarList/CarList';
import { LoadMoreButton } from 'components/LoadMoreButton/LoadMoreButton';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { Section } from 'components/Section/Section';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCars } from 'redux/cars/operations';
import {
  selectCars,
  selectLoading,
  selectPagination,
} from 'redux/cars/selectors';

export const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectLoading);
  const { currentPage } = useSelector(selectPagination);

  useEffect(() => {
    dispatch(fetchCars({ page: 1 }));
  }, [dispatch]);

  return (
    <>
      <Section>
        <Searchbar />
        <CarList />
        {cars.length > 0 && !isLoading && currentPage < 3 && <LoadMoreButton />}
      </Section>
    </>
  );
};

export default CatalogPage;
