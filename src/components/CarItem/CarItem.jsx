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

  return (
    <>
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
