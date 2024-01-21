import { LearnMoreModal } from 'components/LearnMoreModal/LearnMoreModal';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromFavorites, setFavorites } from 'redux/cars/favoritesSlice';
import { selectFavorites } from 'redux/cars/selectors';
import {
  CarDetails,
  CarDetailsList,
  CarImg,
  CarImgWrap,
  CarModel,
  CarTitle,
  FavoriteButton,
  LearnMoreButton,
} from './CarItem.styled';
import sprite from 'images/sprite.svg';
import { motion, AnimatePresence } from 'framer-motion';

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
      <CarImgWrap>
        <FavoriteButton
          onClick={isFavorited ? handleRemoveFavorites : handleSetFavorites}
          type="button"
        >
          <svg data-is-favorited={isFavorited}>
            <use href={`${sprite}#icon-normal-heart`}></use>
          </svg>
        </FavoriteButton>
        <CarImg src={img} alt={make} />
      </CarImgWrap>
      <CarTitle>
        <span>
          <span>{make}</span> <CarModel>{`${model},`}</CarModel>
          <span> {year}</span>
        </span>
        <span>{rentalPrice}</span>
      </CarTitle>
      <CarDetailsList>
        <li>
          <CarDetails>{address.split(',').splice(-2, 2)[0]}</CarDetails>
          <CarDetails>{address.split(',').splice(-2, 2)[1]}</CarDetails>
          <CarDetails>{rentalCompany}</CarDetails>
        </li>
        <li>
          <CarDetails>{type}</CarDetails>
          <CarDetails>{model}</CarDetails>
          <CarDetails>{mileage}</CarDetails>
          <CarDetails>{functionalities[0]}</CarDetails>
        </li>
      </CarDetailsList>
      <LearnMoreButton onClick={toggleModal}>Learn more</LearnMoreButton>
      {isModalOpen && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, transform: 'scale(0.5)' }}
            animate={{ opacity: 1, transform: 'scale(1)' }}
            exit={{ opacity: 0, transform: 'scale(0.5)' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <LearnMoreModal
              onClose={toggleModal}
              car={car}
              isModalOpen={isModalOpen}
            />
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};
