import './style.css';
import {VscFolderOpened} from 'react-icons/vsc';


function Nav () {

    return (
        <nav className='nav__container'>
            <img className='nav-logo' src={require('../../assets/logos/logo-header.png')} alt="nav-logo-image" />
            <div className='nav-info__container'>
                <VscFolderOpened className='nav-icon'></VscFolderOpened>
                <h2 className='nav-version__info'>Version 1.0</h2>
            </div>
        </nav>
    )
}


export default Nav;