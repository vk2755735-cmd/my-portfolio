import React from 'react'
import './footer.css'
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>CodeWithVishal</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://facebook.com' target="_blank" rel="noreferrer">
          <FaFacebookSquare />
        </a>
        <a href='https://instagram.com' target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href='https://twitter.com' target="_blank" rel="noreferrer">
          <IoLogoTwitter />
        </a>
      </div>


      <div className='footer__copyright'>
  <small>
    © {new Date().getFullYear()} Vishal Yadav — Building modern web experiences.
  </small>
</div>
    </footer>
  )
}

export default Footer