import styles from "../styles/home.module.scss";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const Home = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.value}>
          Helping businesses <span>grow</span>
        </h1>
        <div className={styles.cta_wrapper}>
          <a
            href="https://www.linkedin.com/in/preeti-punjabi-b4404813/"
            className={styles.cta}
          >
            <FaLinkedinIn />
          </a>
          <a href="mailto:preeti@saintdom.in" className={styles.cta}>
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
