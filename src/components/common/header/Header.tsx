import { useState } from "react";
import styles from "../../style/header.module.scss";
import { getMenu } from "../../../data/menu";
import { Link, NavLink } from "react-router-dom";

const menus = getMenu();

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <nav className={styles.logo}>Saintdom</nav>
        <nav className={styles.navbar}>
          {menus.map((menu) => (
            <div key={menu.id} className={styles.navbar_items}>
              <NavLink
                to={menu.path}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navbar_items} ${styles.active}`
                    : styles.navbar_items
                }
              >
                {menu.title}
              </NavLink>
            </div>
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
