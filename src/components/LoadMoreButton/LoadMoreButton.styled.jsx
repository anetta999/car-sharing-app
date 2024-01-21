import styled from '@emotion/styled';

export const StyledLoadMoreButton = styled.button`
  display: block;
  margin: 100px auto 0;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.blue};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px; /* 150% */
  text-decoration-line: underline;
  transition: color ${({ theme }) => theme.transition.main};

  &:is(:hover, :focus) {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
