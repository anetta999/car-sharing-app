import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  min-width: 136px;
  padding: 14px 44px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.buttonTextColor};
  font-size: 14px;
  font-weight: 600;
  line-height: 20px; /* 142.857% */
  transition: background-color ${({ theme }) => theme.transition.main};

  &:is(:hover, :focus, :active) {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

export const NavLinkWrap = styled.nav`
  display: flex;
  gap: 18px;
`;
