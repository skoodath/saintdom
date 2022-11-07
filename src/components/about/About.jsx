import styles from "../style/about.module.scss";
import { AiFillCaretDown } from "react-icons/ai";

const About = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div>
          <article className={`${styles.article} ${styles.article_one}`}>
            <p className={styles.about_para}>
              Saintdom was founded in February 2016, with the vision to provide
              backend, outsourcing support and lead generation services for B2B
              clients. We provide resources for any skillset that a company may
              need whether to technical or non-technical.
            </p>
            <AiFillCaretDown />
          </article>
          <article className={`${styles.article} ${styles.article_two}`}>
            <p className={styles.about_para}>
              We help companies manage appointments, generate leads,
              follow-up's, organize mailboxes, manage LinkedIn and also create a
              potential customer database for clients through research.
            </p>
            <AiFillCaretDown />
          </article>
          <article className={`${styles.article} ${styles.article_three}`}>
            <p className={styles.about_para}>
              We hold rich experience as an Inside Sales and in Business
              Development across IT and Non – IT industries in the US. Efficient
              hands on with the Offshore search model for the USA, UK & Asia
              Offshore clients.
            </p>
            <AiFillCaretDown />
          </article>
          <article className={`${styles.article} ${styles.article_four}`}>
            <p className={styles.about_para}>
              We help in business sustainability and growth, by tapping
              resources that help and maximize the growth of the company.
              Whether performing admin tasks or building and maintaining
              client's network for prospects, we help businesses reach its goal.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
