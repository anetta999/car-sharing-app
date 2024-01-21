import { Container } from 'components/Container/Container.styled';
import { Logo } from 'components/Logo/Logo';
import { NavBar } from 'components/NavBar/NavBar';
import { HeaderWrap, StyledHeader } from './Header.styled';

export const Header = () => {
  return (
    <>
      <StyledHeader>
        <Container>
          <HeaderWrap>
            <Logo />
            <NavBar />
          </HeaderWrap>
        </Container>
      </StyledHeader>
    </>
  );
};
