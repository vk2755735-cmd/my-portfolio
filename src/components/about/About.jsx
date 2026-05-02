import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from "react-icons/fa"
import { FiUsers} from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>



    <div className="container about__container">
      <div className="about__me">
            <div className="about__me-image">
            <img src={ME} alt="About Image"/>

            </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small> 1+ Years Learning</small>
          </article>

          <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>Internships</h5>
             <small>2 Completed (InternNexus & HummingByte)</small>
          </article>

          <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small> 6+ Completed</small>
          </article>
        </div>

        <p>
          I’m Vishal Kumar, a BCA student at Guru Kashi University and an aspiring MERN Stack Developer with a strong interest in building modern and scalable web applications. I have completed internships at InternNexus and HummingByte Technologies, where I gained practical experience in full-stack development and worked with real-world projects. I specialize in MongoDB, Express.js, React.js, and Node.js, and I enjoy creating responsive, user-friendly interfaces. I’m continuously learning new technologies and improving my skills to become a better developer.


        </p>

        <a href="#contact" className='btn btn-primary'>Let's Work Together</a>
      </div>
    </div>
      
    </section>
  )
}

export default About