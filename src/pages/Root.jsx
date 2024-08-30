import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function RootLayout() {
    return <div className="bg-base-300 ">
        <Header />
        <Outlet />
        <Footer />
    </div>;
}

export default RootLayout;