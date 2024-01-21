import { HomePageContent } from 'components/HomePageContent/HomePageContent';
import { Loader } from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
import { selectError, selectLoading } from 'redux/cars/selectors';

const HomePage = () => {
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <>
      <HomePageContent />
      {isLoading && !error && <Loader />}
    </>
  );
};

export default HomePage;
