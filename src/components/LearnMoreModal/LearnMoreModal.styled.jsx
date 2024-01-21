import styled from '@emotion/styled';
import { CarDetailsList } from 'components/CarItem/CarItem.styled';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.modalBcgColor};
  z-index: 1200;
`;

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: 541px;
  width: 100%;
  max-height: 90vh;
  overflow: auto;
  transform: translate(-50%, -50%);
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.primaryBcgColor};
  border-radius: 24px;
`;

export const CarImg = styled.img`
  /* height: 248px; */
  border-radius: 14px;
  margin-bottom: 14px;
`;

export const CarFeaturesList = styled(CarDetailsList)`
  margin-bottom: 14px;
`;

export const CarDescriptionText = styled.p`
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.headingTextColor};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
`;

export const ModalSubHeading = styled.h3`
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.headingTextColor};
  font-size: 14px;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
`;

export const AccessoriesList = styled.ul`
  display: flex;
  margin-bottom: 4px;
  gap: 6px;

  li {
    height: 18px;
    overflow: hidden;
  }
`;

export const FunctionalitiesList = styled(AccessoriesList)`
  margin-bottom: 24px;
`;
