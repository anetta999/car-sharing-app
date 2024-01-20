import { Container } from 'components/Container/Container.styled';
import { Logo } from 'components/Logo/Logo';
import { NavBar } from 'components/NavBar/NavBar';

export const Header = () => {
  return (
    <>
      <header>
        <Container>
          <Logo />
          <NavBar />
        </Container>
      </header>
    </>
  );
};
