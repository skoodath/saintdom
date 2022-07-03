import React from 'react'
import SectionTitle from '../../utils/SectionTitle'
import "../style/about.style.scss"

const About = () => {
  return (
    <section className='about__container'>
      <SectionTitle>about us</SectionTitle>
      <article className="about__article">
        <p className="about__para">
          Saintdom was founded in February 2016, with the vision to provide backend, outsourcing support and lead generation services for B2B and BPO Services. 
          A versatile company, we provide resources for any skillset that a company may need catering to IT and Non IT sector. 
        </p>
        <p className="about__para">We provided online photo enhancement services with a team of photoshop experts.</p>
        <p className="about__para">
          We also cater to US Pharma Based Companies, by helping them to set appointments, generate leads, follow-up's, organize mailboxes, manage LinkedIn on their behalf and also create a potential customer database for clients by way of manual research and building database. 
        </p>
        <p className="about__para">
          Hold rich experience as an Inside Sales and in Business Development across IT and Non – IT industries in the US. Efficient hands on with the Offshore search model for the USA, UK & Asia Offshore clients.
        </p>
        <p className="about__para">
          Generate of strong and sustainable revenue growth in highly competitive pharma markets.
        </p>
        <p className="about__para">
          Efficient team that helps in building your brand, help it grow, initiate partnerships and optimize business development process.
        </p>
        <p className="about__para">
          Alongside Lead Generation, we also help in business sustainability and growth, by tapping resources that help and maximize the growth of the company. Whether performing admin tasks or building and maintaining client's network for prospects, we help businesses reach its goal.
        </p>
      </article>
    </section>
  )
}

export default About