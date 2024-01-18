import { Button } from 'components/Button/Button';
import carMarks from 'data/makes.json';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/cars/filterSlice';
import { selectFilter } from 'redux/cars/selectors';

export const Searchbar = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch(setFilter);

  return (
    <>
      <label>
        Car brand
        <select
          value={filter}
          onChange={e => {
            dispatch(setFilter(e.target.value));
          }}
        >
          <option value="Enter the text">Enter the text</option>
          {carMarks.map(mark => (
            <option key={mark} value={mark}>
              {mark}
            </option>
          ))}
        </select>
      </label>
      <Button>Search</Button>
    </>
  );
};
