import { NavLink } from "react-router-dom";
import styles from "../styles/header.module.scss";
import { getMenu } from "../../data/menu";

interface Props {
  showMenu: boolean;
  handleMenu: () => void;
}

const Menu = ({ showMenu, handleMenu }: Props) => {
  let menus = getMenu();
  return (
    <nav
      className={showMenu ? `${styles.navbar} ${styles.show}` : styles.navbar}
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
          onClick={handleMenu}
        >
          {menu.title}
        </NavLink>
      ))}
    </nav>
  );
};

export default Menu;
