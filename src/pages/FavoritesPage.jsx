import { FavoriteCarsList } from 'components/FavoriteCarsList/FavoriteCarsList';
import { Loader } from 'components/Loader/Loader';
import { Section } from 'components/Section/Section';
import { useSelector } from 'react-redux';
import { selectError, selectLoading } from 'redux/cars/selectors';

const FavoritesPage = () => {
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <Section>
      <FavoriteCarsList />
      {isLoading && !error && <Loader />}
    </Section>
  );
};

export default FavoritesPage;
