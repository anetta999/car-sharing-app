import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Title = styled.h1`
  color: rgb(255, 255, 255);
  margin-bottom: 41px;
  font-size: 140px;
  width: 659px;
  line-height: 100%; /* 140px */
  letter-spacing: -5px;
  text-transform: uppercase;
`;

export const Text = styled.p`
  color: rgb(255, 255, 255);
  margin-bottom: 41px;
  font-size: 22px;
  font-weight: 400;
  line-height: 100%; /* 22px */
  letter-spacing: 0.11px;
  text-transform: uppercase;
`;

export const StartButton = styled(Link)`
  display: inline-block;
  min-width: 274px;
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

export const StyledImg = styled.img`
  width: 356px;
  height: 356px;
  border-radius: 14px;
`;

export const HomeWrap = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const HomeSection = styled.section`
  background-color: #000000;
  padding-top: 50px;
  padding-bottom: 50px;
`;
