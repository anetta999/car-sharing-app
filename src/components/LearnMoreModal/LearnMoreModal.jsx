import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';

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
      <div onClick={handleModalCloseByClickOnBackdrop}>
        <div>
          <button type="button" onClick={onClose}>
            Close
          </button>
          <img src={img} alt={make} />
          <h2>{`${make} ${model}, ${year}`}</h2>
          <p>{address}</p>
          <p>id: {id}</p>
          <p>Year: {year}</p>
          <p>Type: {type}</p>
          <p>Fuel Consumption: {fuelConsumption}</p>
          <p>Engine Size: {engineSize}</p>
          <p>{description}</p>
          <h3>Accessories and functionalities:</h3>
          <ul>
            {accessories.map(item => (
              <li key={item}>
                <p>{item}</p>
              </li>
            ))}
          </ul>
          <ul>
            {functionalities.map(item => (
              <li key={item}>
                <p>{item}</p>
              </li>
            ))}
          </ul>
          <p>{rentalConditions}</p>
          <Link>Rental car</Link>
        </div>
      </div>
    </>,
    modalRoot
  );
};
