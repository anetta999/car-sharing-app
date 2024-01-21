import {
  CarDetails,
  CarModel,
  CarTitle,
} from 'components/CarItem/CarItem.styled';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  AccessoriesList,
  Backdrop,
  CarDescriptionText,
  CarFeaturesList,
  CarImg,
  CloseButton,
  FunctionalitiesList,
  Modal,
  ModalSubHeading,
  RentalButton,
  RentalConditionsList,
  RentalConditionsText,
} from './LearnMoreModal.styled';
import sprite from 'images/sprite.svg';

const modalRoot = document.querySelector('#modal-root');

export const LearnMoreModal = ({ car, onClose, isModalOpen }) => {
  const {
    img,
    make,
    id,
    address,
    type,
    model,
    year,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    functionalities,
    rentalConditions,
    mileage,
    rentalPrice,
  } = car;

  useEffect(() => {
    const handleModalCloseByEsc = evt => {
      if (evt.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleModalCloseByEsc);

    if (isModalOpen || modalRoot.children.length) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleModalCloseByEsc);
    };
  }, [onClose, isModalOpen]);

  const handleModalCloseByClickOnBackdrop = evt => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <>
      <div>
        <Backdrop onClick={handleModalCloseByClickOnBackdrop}>
          <Modal>
            <CloseButton type="button" onClick={onClose}>
              <svg>
                <use href={`${sprite}#icon-close`}></use>
              </svg>
            </CloseButton>
            <CarImg src={img} alt={make} />
            <CarTitle>
              <span>
                <span>{make}</span> <CarModel>{`${model},`}</CarModel>
                <span> {year}</span>
              </span>
            </CarTitle>
            <CarFeaturesList>
              <li>
                <CarDetails>{address.split(',').splice(-2, 2)[0]}</CarDetails>
                <CarDetails>{address.split(',').splice(-2, 2)[1]}</CarDetails>
                <CarDetails>id: {id}</CarDetails>
                <CarDetails>Year: {year}</CarDetails>
                <CarDetails>Type: {type}</CarDetails>
              </li>
              <li>
                <CarDetails>Fuel Consumption: {fuelConsumption}</CarDetails>
                <CarDetails>Engine Size: {engineSize}</CarDetails>
              </li>
            </CarFeaturesList>
            <CarDescriptionText>{description}</CarDescriptionText>
            <ModalSubHeading>Accessories and functionalities:</ModalSubHeading>
            <AccessoriesList>
              {accessories.map(item => (
                <li key={item}>
                  <CarDetails>{item}</CarDetails>
                </li>
              ))}
            </AccessoriesList>
            <FunctionalitiesList>
              {functionalities.map(item => (
                <li key={item}>
                  <CarDetails>{item}</CarDetails>
                </li>
              ))}
            </FunctionalitiesList>
            <ModalSubHeading>Rental Conditions:</ModalSubHeading>
            <RentalConditionsList>
              <li>
                <RentalConditionsText>
                  {rentalConditions.split('\n')[0].split(':')[0]}:{' '}
                  <span>{rentalConditions.split('\n')[0].split(':')[1]}</span>
                </RentalConditionsText>
                <RentalConditionsText>
                  {rentalConditions.split('\n')[1]}
                </RentalConditionsText>
              </li>
              <li>
                <RentalConditionsText>
                  {rentalConditions.split('\n')[2]}
                </RentalConditionsText>
                <RentalConditionsText>
                  Mileage: <span>{mileage}</span>
                </RentalConditionsText>
                <RentalConditionsText>
                  Price: <span>{rentalPrice}</span>
                </RentalConditionsText>
              </li>
            </RentalConditionsList>
            <RentalButton href="tel:+380730000000">Rental car</RentalButton>
          </Modal>
        </Backdrop>
      </div>
    </>,
    modalRoot
  );
};
