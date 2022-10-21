import { Routes, Route } from 'react-router';
import Home from './components/home/Home';
import SosialApps from './components/Footer/sosialapps/SosialApps';
import Links from './components/Footer/links/Links';
import Favourites from './components/favourites/Favourites';

const App = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path='/' element={<SosialApps />} />
            <Route path='/' element={<Links />} />
        </Routes>
    );
};

export default App;
