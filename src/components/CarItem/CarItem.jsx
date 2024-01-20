import { Button } from 'components/Button/Button';
import { LearnMoreModal } from 'components/LearnMoreModal/LearnMoreModal';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromFavorites, setFavorites } from 'redux/cars/favoritesSlice';
import { selectFavorites } from 'redux/cars/selectors';
import {
  CarDetails,
  CarDetailsList,
  CarImg,
  CarModel,
  CarTitle,
} from './CarItem.styled';

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(prevIsModalOpen => !prevIsModalOpen);
  };

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
      <CarImg src={img} alt={make} width="274px" />
      <CarTitle>
        <span>
          <span>{make}</span> <CarModel>{`${model},`}</CarModel>
          <span>{year}</span>
        </span>
        <span>{rentalPrice}</span>
      </CarTitle>
      <CarDetailsList>
        <li>
          <CarDetails>{address.split(',').splice(-2, 2).join(' ')}</CarDetails>
          <CarDetails>{rentalCompany}</CarDetails>
        </li>
        <li>
          <CarDetails>{type}</CarDetails>
          <CarDetails>{model}</CarDetails>
          <CarDetails>{mileage}</CarDetails>
          <CarDetails>{functionalities[0]}</CarDetails>
        </li>
      </CarDetailsList>
      <Button onClick={toggleModal}>Learn more</Button>
      {isModalOpen && (
        <LearnMoreModal
          onClose={toggleModal}
          car={car}
          isModalOpen={isModalOpen}
        />
      )}
    </>
  );
};
