import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
  <div className='service_head'>
    <h3>UI/UX Design</h3>
  </div>

  <ul className='service__list'>
    <li>
      <BiCheck className='service__list-icon'/> 
      <p>User-friendly and intuitive interface design</p>
    </li>

    <li>
      <BiCheck className='service__list-icon'/> 
      <p>Clean, modern and visually appealing layouts</p>
    </li>

    <li>
      <BiCheck className='service__list-icon'/> 
      <p>Strong visual hierarchy for better user flow</p>
    </li>

    <li>
      <BiCheck className='service__list-icon'/> 
      <p>Responsive design for all screen sizes</p>
    </li>

    <li>
      <BiCheck className='service__list-icon'/> 
      <p>Consistent colors, fonts and design system</p>
    </li>

    <li>
      <BiCheck className='service__list-icon'/> 
      <p>Smooth interactions with proper user feedback</p>
    </li>
  </ul>
</article>


<article className='service'>
  <div className='service_head'>
    <h3>Web Development</h3>
  </div>

  <ul className='service__list'>
    <li>
      <BiCheck className='service__list-icon'/> 
      <p>High performance and fast-loading websites</p>
    </li>

    <li>
      <BiCheck className='service__list-icon'/> 
      <p>Responsive and mobile-first development</p>
    </li>

    <li>
      <BiCheck className='service__list-icon'/> 
      <p>Clean and maintainable code structure</p>
    </li>

    <li>
      <BiCheck className='service__list-icon'/> 
      <p>SEO-friendly website structure</p>
    </li>

    <li>
      <BiCheck className='service__list-icon'/> 
      <p>Cross-browser compatibility support</p>
    </li>

    <li>
      <BiCheck className='service__list-icon'/> 
      <p>Secure web application practices</p>
    </li>

    <li>
      <BiCheck className='service__list-icon'/> 
      <p>API integration and dynamic features</p>
    </li>

    <li>
      <BiCheck className='service__list-icon'/> 
      <p>  Building scalable and high-performance web applications</p>
    </li>
  </ul>
</article>


<article className='service'>
  <div className='service_head'>
    <h3>Database Management</h3>
  </div>

  <ul className='service__list'>
    <li>
      <BiCheck className='service__list-icon'/> 
      <p>Efficient and structured data storage systems</p>
    </li>

    <li>
      <BiCheck className='service__list-icon'/> 
      <p>Secure data handling and access control</p>
    </li>

    <li>
      <BiCheck className='service__list-icon'/> 
      <p>Optimized queries for faster performance</p>
    </li>

    <li>
      <BiCheck className='service__list-icon'/> 
      <p>Reliable backup and recovery solutions</p>
    </li>

    <li>
      <BiCheck className='service__list-icon'/> 
      <p>Maintaining data integrity and consistency</p>
    </li>

    <li>
      <BiCheck className='service__list-icon'/> 
      <p>Scalable database architecture for growth</p>
    </li>
  </ul>
</article>
        {/* END OF DATBASE CREATION */}

      </div>
    </section>
  )
}

export default Services