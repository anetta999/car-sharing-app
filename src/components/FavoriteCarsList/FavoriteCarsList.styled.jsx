import styled from '@emotion/styled';

export const EmptyMessage = styled.p`
  color: ${({ theme }) => theme.colors.headingTextColor};
  text-align: center;
  margin-top: 30px;
  margin-bottom: 50px;
  font-size: 22px;
  font-weight: 600;
  line-height: 100%; /* 22px */
  letter-spacing: 0.11px;
  text-transform: uppercase;
`;

export const EmptyImg = styled.img`
  margin: 0 auto;
  border-radius: 14px;
  width: 360px;
  height: 360px;
`;
