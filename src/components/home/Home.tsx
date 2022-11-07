import { Link } from "react-router-dom";
import styles from "../style/home.module.scss";

const Home = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.value}>
          Helping businesses <span style={{ color: "#7531D9" }}>grow</span>
        </h1>
        <Link to="contact" className={styles.cta}>
          contact us
        </Link>
      </div>
    </section>
  );
};

export default Home;
