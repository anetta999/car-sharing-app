import { CarItem } from 'components/CarItem/CarItem';
import {
  StyledCarItem,
  StyledCarList,
} from 'components/CarList/CarList.styled';
import { useSelector } from 'react-redux';
import { selectFavorites } from 'redux/cars/selectors';

export const FavoriteCarsList = () => {
  const { favorites } = useSelector(selectFavorites);

  return (
    <>
      {favorites.length > 0 && (
        <StyledCarList>
          {favorites.map(car => (
            <StyledCarItem key={car.id}>
              <CarItem car={car} />
            </StyledCarItem>
          ))}
        </StyledCarList>
      )}
    </>
  );
};
