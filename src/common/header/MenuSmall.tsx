import styles from "../styles/header.module.scss";

interface Props {
  showMenu: boolean;
  handleMenu: () => void;
}

const MenuSmall = ({ showMenu, handleMenu }: Props) => {
  return (
    <nav className={styles.navbar_small} onClick={handleMenu}>
      <div
        className={
          showMenu ? `${styles.lines} ${styles.lines_clicked}` : styles.lines
        }
      ></div>
      <div
        className={
          showMenu ? `${styles.lines} ${styles.lines_clicked}` : styles.lines
        }
      ></div>
    </nav>
  );
};

export default MenuSmall;
