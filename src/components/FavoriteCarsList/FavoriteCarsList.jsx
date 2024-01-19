import { CarItem } from 'components/CarItem/CarItem';
import { useSelector } from 'react-redux';
import { selectFavorites } from 'redux/cars/selectors';

export const FavoriteCarsList = () => {
  const { favorites } = useSelector(selectFavorites);

  return (
    <>
      {favorites.length > 0 && (
        <ul>
          {favorites.map(car => (
            <li key={car.id}>
              <CarItem car={car} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
