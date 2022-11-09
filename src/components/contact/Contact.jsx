import styles from "../styles/contact.module.scss";

const Contact = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <article className={`${styles.article} ${styles.article_one}`}>
          <div>Phone</div>
          <div>Email</div>
        </article>
      </div>
    </section>
  );
};

export default Contact;
