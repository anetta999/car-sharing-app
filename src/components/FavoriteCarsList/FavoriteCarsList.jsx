import { CarItem } from 'components/CarItem/CarItem';
import {
  StyledCarItem,
  StyledCarList,
} from 'components/CarList/CarList.styled';
import { useSelector } from 'react-redux';
import { selectFavorites } from 'redux/cars/selectors';
import emptyPage from 'images/empty-page.png';
import { EmptyImg, EmptyMessage } from './FavoriteCarsList.styled';

export const FavoriteCarsList = () => {
  const { favorites } = useSelector(selectFavorites);

  return (
    <>
      {favorites.length > 0 ? (
        <StyledCarList>
          {favorites.map(car => (
            <StyledCarItem key={car.id}>
              <CarItem car={car} />
            </StyledCarItem>
          ))}
        </StyledCarList>
      ) : (
        <>
          <EmptyMessage>Favorites list is empty now</EmptyMessage>
          <EmptyImg src={emptyPage} alt="empty list" />
        </>
      )}
    </>
  );
};
