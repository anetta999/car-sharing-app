import styled from '@emotion/styled';

export const BaseButton = styled.button`
  min-width: 274px;
  padding: 12px 99px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.buttonTextColor};
  font-size: 14px;
  font-weight: 600;
  line-height: 20px; /* 142.857% */
  transition: ${({ theme }) => theme.transition.main};

  &:is(:hover, :focus) {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;
