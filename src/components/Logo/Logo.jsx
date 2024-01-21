import { Link } from 'react-router-dom';
import logo from 'images/logo.png';

export const Logo = () => {
  return (
    <>
      <Link to="/">
        <img src={logo} alt="logo" width={70} height={70} />
      </Link>
    </>
  );
};
