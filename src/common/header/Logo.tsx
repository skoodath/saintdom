import { Link } from "react-router-dom";
import styles from "../styles/header.module.scss";

const Logo = () => {
  return (
    <>
      <nav className={styles.logo}>
        <Link to="/" className="logo__item">
          Saintdom
        </Link>
      </nav>
    </>
  );
};

export default Logo;
