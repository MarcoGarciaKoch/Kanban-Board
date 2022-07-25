import './style.css';
import {BsKanban} from 'react-icons/bs'


function Footer () {

    return (
        <footer className='footer__container'>
            <div className='marco__container'>
                <BsKanban className='footer-logo'></BsKanban>
                <h4 className='footer-info'>&copy; Marco García Koch 2022</h4>
            </div>
            <div className='github-info__container'>
                <div className='github-logo'></div>
                <h1>Check the GitHub repository <a className='github-link' rel="noopener noreferrer" target="_blank" href="https://github.com/MarcoGarciaKoch/kanban-board">here</a></h1>
            </div>
        </footer>
    )
}


export default Footer;