import { CarItem } from 'components/CarItem/CarItem';
import { useSelector } from 'react-redux';
import { selectCars } from 'redux/cars/selectors';
import { StyledCarItem, StyledCarList } from './CarList.styled';

export const CarList = () => {
  const cars = useSelector(selectCars);

  return (
    <>
      {cars.length > 0 && (
        <StyledCarList>
          {cars.map(car => (
            <StyledCarItem key={car.id}>
              <CarItem car={car} />
            </StyledCarItem>
          ))}
        </StyledCarList>
      )}
    </>
  );
};
