import { ButtonLoader } from 'components/Loader/Loader';
import carMarks from 'data/makes.json';
import { Field, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from 'redux/cars/operations';
import { selectError, selectLoading } from 'redux/cars/selectors';
import { StyledForm, StyledLabel, SubmitButton } from './Searchbar.styled';

export const Searchbar = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <>
      <Formik
        initialValues={{ selectedMark: 'Enter some text' }}
        onSubmit={(values, actions) => {
          const { selectedMark } = values;
          if (selectedMark === 'Enter some text') {
            return;
          }
          dispatch(fetchCars({ value: selectedMark }));
          actions.resetForm();
        }}
      >
        {({ values }) => (
          <StyledForm>
            <StyledLabel>
              Car brand
              <Field name="selectedMark" as="select">
                <option value={values.selectedMark === 'Enter some text'}>
                  Enter some text
                </option>
                {carMarks.map(mark => (
                  <option key={mark} value={mark}>
                    {mark}
                  </option>
                ))}
              </Field>
            </StyledLabel>
            <SubmitButton type="submit">
              Search {isLoading && !error && <ButtonLoader />}
            </SubmitButton>
          </StyledForm>
        )}
      </Formik>
    </>
  );
};
