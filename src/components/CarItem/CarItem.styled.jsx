import styled from '@emotion/styled';

export const CarImg = styled.img`
  border-radius: 14px;
  height: 268px;
  width: 100%;
`;

export const CarTitle = styled.h2`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.headingTextColor};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px; /* 150% */
  height: 24px;
  overflow: hidden;
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
  margin-bottom: 28px;
  li {
    display: flex;
    width: 100%;
    height: 18px;
    overflow: hidden;

    &:not(:last-child) {
      margin-bottom: 4px;
    }
  }
`;

export const FavoriteButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  background-color: transparent;
  transition: fill, stroke ${({ theme }) => theme.transition.main};

  &:is(:hover, :focus) svg {
    fill: ${({ theme }) => theme.colors.blue};
    stroke: ${({ theme }) => theme.colors.blue};
  }

  svg {
    width: 18px;
    height: 18px;
    fill: ${({ theme, isFavorited }) =>
      isFavorited ? theme.colors.blue : 'transparent'};
    stroke: ${({ theme, isFavorited }) =>
      isFavorited ? 'transparent' : theme.colors.favoriteButtonColor};
    stroke-width: 1.5;
    stroke-opacity: 0.8;
  }

  svg[data-is-favorited='true'] {
    fill: ${({ theme }) => theme.colors.blue};
    stroke: transparent;
  }
`;

export const CarImgWrap = styled.div`
  position: relative;
  margin-bottom: 14px;
`;

export const LearnMoreButton = styled.button`
  width: 100%;
  padding: 12px 99px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.buttonTextColor};
  font-size: 14px;
  font-weight: 600;
  line-height: 20px; /* 142.857% */
  transition: background-color ${({ theme }) => theme.transition.main};

  &:is(:hover, :focus) {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;
