import { TailSpin, RotatingLines } from 'react-loader-spinner';
import { MainLoaderWrap } from './Loader.styled';

export const Loader = () => {
  return (
    <MainLoaderWrap>
      <TailSpin
        visible={true}
        height="80"
        width="80"
        color="#9ebbff"
        ariaLabel="tail-spin-loading"
        radius="1"
        timeout={3000}
        wrapperStyle={{}}
        wrapperClass=""
      />
    </MainLoaderWrap>
  );
};

export const ButtonLoader = ({
  width = '14px',
  height = '14px',
  strokeColor = 'white',
}) => {
  return (
    <RotatingLines
      visible={true}
      height={width}
      width={height}
      strokeColor={strokeColor}
      strokeWidth="5"
      animationDuration="0.75"
      ariaLabel="rotating-lines-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};
