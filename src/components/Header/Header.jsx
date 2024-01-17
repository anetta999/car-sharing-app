import { Logo } from 'components/Logo/Logo';
import { NavBar } from 'components/NavBar/NavBar';
import { Section } from 'components/Section/Section';

export const Header = () => {
  return (
    <>
      <Section>
        <Logo />
        <NavBar />
      </Section>
    </>
  );
};
