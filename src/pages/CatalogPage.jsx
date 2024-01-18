import { CarList } from 'components/CarList/CarList';
import { LoadMoreButton } from 'components/LoadMoreButton/LoadMoreButton';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { Section } from 'components/Section/Section';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCars } from 'redux/cars/operations';
import { selectError, selectLoading } from 'redux/cars/selectors';

export const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <>
      <Section>
        {isLoading && !error && <p>Loading...</p>}
        <Searchbar />
        <CarList />
        <LoadMoreButton />
      </Section>
    </>
  );
};

export default CatalogPage;
