import { BaseButton } from './Button.styled';

export const Button = ({ children, onClick }) => {
  return (
    <BaseButton type="button" onClick={onClick}>
      {children}
    </BaseButton>
  );
};
