import { CarList } from 'components/CarList/CarList';
import { LoadMoreButton } from 'components/LoadMoreButton/LoadMoreButton';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { Section } from 'components/Section/Section';

export const CatalogPage = () => {
  return (
    <>
      <Section>
        <Searchbar />
        <CarList />
        <LoadMoreButton />
      </Section>
    </>
  );
};

export default CatalogPage;
