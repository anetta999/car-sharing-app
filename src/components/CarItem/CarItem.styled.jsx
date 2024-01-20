import styled from '@emotion/styled';

export const CarImg = styled.img`
  border-radius: 14px;
  margin-bottom: 14px;
`;

export const CarTitle = styled.h2`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  width: 274px;
  color: ${({ theme }) => theme.colors.headingTextColor};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px; /* 150% */
`;

export const CarModel = styled.span`
  color: ${({ theme }) => theme.colors.blue};
`;

export const CarDetails = styled.p`
  color: ${({ theme }) => theme.colors.primaryTextColor};
  font-size: 12px;
  font-weight: 400;
  line-height: 18px; /* 150% */

  &::after {
    content: '';
    width: 0px;
    height: 16px;
    border-left: 1px solid rgba(18, 20, 23, 0.1);
    margin-left: 6px;
    margin-right: 6px;
  }

  &:last-child::after {
    content: none;
  }
`;

export const CarDetailsList = styled.ul`
  width: 274px;
  margin-bottom: 28px;
  li {
    display: flex;

    &:not(:last-child) {
      margin-bottom: 4px;
    }
  }
`;
