import Logo from '../../assets/images/logo.png';
import './styles.css';

function Header() {
    return(
        <header>
            <div className="container">
                <img src={Logo} alt="Logo Smartfit" />
            </div>
        </header>
    );
}

export default Header;