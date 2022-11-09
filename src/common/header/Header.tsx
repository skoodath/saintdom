import { useState } from "react";
import styles from "../styles/header.module.scss";
import Logo from "./Logo";
import Menu from "./Menu";
import MenuSmall from "./MenuSmall";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <Logo />
        <Menu showMenu={showMenu} handleMenu={handleMenu} />
        <MenuSmall showMenu={showMenu} handleMenu={handleMenu} />
      </div>
    </header>
  );
};

export default Header;
