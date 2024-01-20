import styled from '@emotion/styled';

export const StyledCarList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  row-gap: 50px;
  column-gap: 29px;
`;

export const StyledCarItem = styled.li`
  flex-basis: calc((100% - 29px * 3) / 4);
`;
