import React from 'react'
import { Link } from 'react-router-dom'
import "../style/home.style.scss"

const Home = () => {
  return (
    <div className="home__container">
      <article className="home__top_container">
        <section className="hero__image_wrapper">

        </section>
        <section className="hero__text_wrapper">
          <p className="hero__text">
            For all your resource needs...
          </p>
          <Link to="contact_saintdom">Contact Us</Link>
        </section>
      </article>
      <article className="home__bottom_container">
        <p className="intro__text">
        A versatile company, we provide resources for any skillset that a company may need catering to IT and Non IT sector. 
        </p>
        <section className="intro__services">
          <div className="intro__items">
            <span className="intro__title">Brand Building</span>
          </div>
          <div className="intro__items">
          <span className="intro__title">Business Development</span>
          </div>
          <div className="intro__items">
          <span className="intro__title">Lead Generation</span>
          </div>
        </section>
      </article>
    </div>
  )
}

export default Home