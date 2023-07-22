import { Outlet } from 'react-router-dom';
import NavBar from '../page/Share/NavBar/NavBar';
import Footer from '../page/Share/Footer/Footer';

const Mani = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Mani;