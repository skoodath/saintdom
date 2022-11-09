import styles from "../styles/footer.module.scss";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.container}>
      <div className={styles.wrapper}>
        <section className={styles.brand}>
          <h2>Saintdom</h2>
        </section>
        <section className={styles.copyright}>
          &copy; {year} | all rights reserved
        </section>
      </div>
    </footer>
  );
};

export default Footer;
