import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/NavBar';
import StyledNavBar from '../components/StyledNavBar';

const SharedLayout = () => {
  return (
    <>
      <StyledNavBar />
      <section className='section'>
        <Outlet />
      </section>
    </>
  );
};
export default SharedLayout;