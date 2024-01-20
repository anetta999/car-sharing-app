import carMarks from 'data/makes.json';
import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { fetchCars } from 'redux/cars/operations';
import { SubmitButton } from './Searchbar.styled';

export const Searchbar = () => {
  const dispatch = useDispatch();

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
          <Form>
            <label>
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
            </label>
            <SubmitButton type="submit">Search</SubmitButton>
          </Form>
        )}
      </Formik>
    </>
  );
};
