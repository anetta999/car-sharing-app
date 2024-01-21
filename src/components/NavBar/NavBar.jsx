import { NavLinkWrap, StyledNavLink } from './NavBar.styled';

export const NavBar = () => {
  return (
    <NavLinkWrap>
      <StyledNavLink to="/catalog">Catalog</StyledNavLink>
      <StyledNavLink to="/favorites">Favorites</StyledNavLink>
    </NavLinkWrap>
  );
};
