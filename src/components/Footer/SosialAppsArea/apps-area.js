import { ReactComponent as FaceBook } from '../assets/Facebook.svg';
import { ReactComponent as Tweeter } from '../assets/tweeter.svg';
import { ReactComponent as Instagram } from '../assets/instagram.svg';
import { ReactComponent as Linkedin } from '../assets/linkedin.svg';
import { ReactComponent as Youtube } from '../assets/youtube.svg';
import './apps-area.css';

const AppsArea = () => {
    return (
        <div className='apps-container'>
            <div className='apps'>
                <div div className='apps-between-space'>
                    <FaceBook />
                </div>
                <div className='apps-between-space'>
                    <Tweeter />
                </div>
                <div className='apps-between-space'>
                    <Instagram />
                </div>
                <div className='apps-between-space'>
                    <Linkedin />
                </div>
                <div className='apps-between-space'>
                    <Youtube />
                </div>
            </div>
        </div>
    );
};

export default AppsArea;
