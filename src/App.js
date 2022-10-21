import { Routes, Route } from 'react-router';
import Home from './components/home/Home';
import SosialApps from './components/Footer/sosialapps/SosialApps';
import Links from './components/Footer/links/Links';
import CartItem from './components/favourites/createcard/CartItem';

const App = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path='/' element={<SosialApps />} />
            <Route path='/' element={<Links />} />
            <Route path='/' element={<CartItem />} />
        </Routes>
    );
};

export default App;
