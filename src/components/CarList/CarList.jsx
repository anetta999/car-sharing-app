import { CarItem } from 'components/CarItem/CarItem';
import { useSelector } from 'react-redux';
import { selectCars } from 'redux/cars/selectors';

export const CarList = () => {
  const cars = useSelector(selectCars);

  return (
    <>
      {cars.length > 0 && (
        <ul>
          {cars.map(car => (
            <li key={car.id}>
              <CarItem car={car} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
