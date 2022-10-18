import InputArea from '../InputArea/Input-area';
import AppsArea from '../SosialAppsArea/apps-area';
import Links from '../Footer-links-area/Links';
import './Footer-container.css'

const Footer = () => {
    return (
        <div className='footer'>
            <InputArea />
            <AppsArea />
            <Links />
        </div>
    );
};

export default Footer;
