import { Button } from 'components/Button/Button';
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
  FunctionalitiesList,
  Modal,
  ModalSubHeading,
} from './LearnMoreModal.styled';

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

  isModalOpen
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = 'auto');

  useEffect(() => {
    const handleModalCloseByEsc = evt => {
      if (evt.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleModalCloseByEsc);

    return () => {
      window.removeEventListener('keydown', handleModalCloseByEsc);
    };
  }, [onClose]);

  const handleModalCloseByClickOnBackdrop = evt => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <>
      <Backdrop onClick={handleModalCloseByClickOnBackdrop}>
        <Modal>
          <button type="button" onClick={onClose}>
            Close
          </button>
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
          <ul>
            <li>
              <p>{rentalConditions.split('\n')[0]}</p>
              <p>{rentalConditions.split('\n')[1]}</p>
            </li>
            <li>
              <p>{rentalConditions.split('\n')[2]}</p>
              <p>Mileage: {mileage}</p>
              <p>Price: {rentalPrice}</p>
            </li>
          </ul>
          <Button>Rental car</Button>
        </Modal>
      </Backdrop>
    </>,
    modalRoot
  );
};
