import {
  HomeSection,
  HomeWrap,
  StartButton,
  StyledImg,
  Text,
  Title,
} from './HomePageContent.styled';
import png from 'images/car.jpg';
import { Container } from 'components/Container/Container.styled';

export const HomePageContent = () => {
  return (
    <>
      <HomeSection>
        <Container>
          <HomeWrap>
            <div>
              <Title>Elevate your ride</Title>
              <Text>Find and rent cars in easy steps</Text>
              <StartButton to="/catalog">Vehicles</StartButton>
            </div>
            <div>
              <StyledImg src={png} alt="car" />
            </div>
          </HomeWrap>
        </Container>
      </HomeSection>
    </>
  );
};
