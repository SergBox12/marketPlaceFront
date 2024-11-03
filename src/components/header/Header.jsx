import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { useLinksStore } from '../../store/header-store';


function Header() {

    const links = useLinksStore((state) => state.links)

    return (
        <header className={styles.header}>
            <Link className="btn btn-outline-primary me-2" to={links.main.link}>{links.main.name}</Link>
            <Link className="btn btn-outline-primary me-2" to={links.login.link}>{links.login.name}</Link>
            <Link className="btn btn-primary" to={links.reg.link}>{links.reg.name}</Link>
        </header>
    );
  }
  
  export default Header;