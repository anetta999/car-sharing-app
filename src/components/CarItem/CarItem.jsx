import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromFavorites, setFavorites } from 'redux/cars/favoritesSlice';
import { selectFavorites } from 'redux/cars/selectors';

export const CarItem = ({ car }) => {
  const {
    img,
    make,
    rentalPrice,
    address,
    rentalCompany,
    type,
    model,
    year,
    mileage,
    functionalities,
  } = car;
  const dispatch = useDispatch();
  const { favorites } = useSelector(selectFavorites);
  const [isFavorited, setIsFavorited] = useState(
    favorites.some(favorite => favorite.id === car.id)
  );

  const handleSetFavorites = () => {
    dispatch(setFavorites(car));
    setIsFavorited(true);
  };

  const handleRemoveFavorites = () => {
    dispatch(removeFromFavorites(car));
    setIsFavorited(false);
  };

  return (
    <>
      <button
        onClick={isFavorited ? handleRemoveFavorites : handleSetFavorites}
        type="button"
      >
        {isFavorited ? 'Remove from favorites' : 'Add to favorites'}
      </button>
      <img src={img} alt={make} />
      <div>
        <h2>{`${make} ${model}, ${year}`}</h2>
        <span>{rentalPrice}</span>
        <p>{address}</p>
        <p>{rentalCompany}</p>
        <p>{type}</p>
        <p>{model}</p>
        <p>{mileage}</p>
        <p>{functionalities[0]}</p>
      </div>
    </>
  );
};
