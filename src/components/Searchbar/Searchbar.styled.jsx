import styled from '@emotion/styled';
import { BaseButton } from 'components/Button/Button.styled';
import { Field, Form } from 'formik';

export const SubmitButton = styled(BaseButton)`
  min-width: 136px;
  padding: 14px 44px;
`;

export const StyledForm = styled(Form)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  margin-bottom: 50px;
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: ${({ theme }) => theme.colors.selectLabelTextColor};
  font-size: 14px;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
`;

export const Select = styled(Field)`
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: transparent;
    border: none;
    padding: 0 1em 0 0;
    margin: 0;
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    cursor: inherit;
    line-height: inherit;
  }
`;
