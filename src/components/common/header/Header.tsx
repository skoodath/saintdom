import { useState } from "react";
import styles from "../../style/header.module.scss";
import { getMenu } from "../../../data/menu";
import { NavLink } from "react-router-dom";

const menus = getMenu();

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <nav className={styles.logo}>Saintdom</nav>
        <nav
          className={
            showMenu ? `${styles.navbar} ${styles.show}` : styles.navbar
          }
        >
          {menus.map((menu) => (
            <NavLink
              key={menu.id}
              to={menu.path}
              className={({ isActive }) =>
                isActive
                  ? `${styles.navbar_items} ${styles.active}`
                  : styles.navbar_items
              }
              onClick={() => setShowMenu(!showMenu)}
            >
              {menu.title}
            </NavLink>
          ))}
        </nav>
        <nav
          className={styles.navbar_small}
          onClick={() => setShowMenu(!showMenu)}
        >
          <div
            className={
              showMenu
                ? `${styles.lines} ${styles.lines_clicked}`
                : styles.lines
            }
          ></div>
          <div
            className={
              showMenu
                ? `${styles.lines} ${styles.lines_clicked}`
                : styles.lines
            }
          ></div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
