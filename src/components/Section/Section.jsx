import { Container } from 'components/Container/Container.styled';
import { BaseSection } from './Section.styled';

export const Section = ({ children }) => {
  return (
    <BaseSection>
      <Container>{children}</Container>
    </BaseSection>
  );
};
