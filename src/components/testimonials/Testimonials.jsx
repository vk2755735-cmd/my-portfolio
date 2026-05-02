import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, EffectFade } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
const data = [
  {
    avatar: AVTR1,
    name: 'Sandhya Yadav',
    review: 'I had a great experience working with him on my project. He understood my requirements clearly and delivered a modern, responsive website that matched my expectations. His communication was smooth throughout the process, and he handled every change professionally. His attention to detail and dedication to quality were impressive. I highly recommend him for web development work.'
  },
  {
    avatar: AVTR2,
    name: 'Aman Yadav',
    review: 'It was a pleasure collaborating with him on my website project. He quickly understood my ideas and created a clean, user-friendly, and responsive design. Communication stayed consistent, and he managed all revisions with professionalism. His focus on quality and timely delivery really stood out. He ensured everything was completed properly and met all my expectations. I would definitely recommend him for any web development projects.'
  },
  {
    avatar: AVTR3,
    name: 'Nirbhay Kumar',
    review: 'Working with him was a smooth and professional experience. He understood my vision and delivered a modern, responsive website that met all my expectations. His problem-solving skills and dedication were clearly visible. He maintained clear communication and ensured everything was completed on time. I strongly recommend him for anyone looking for quality web development.'
  },
  {
    avatar: AVTR4,
    name: 'Rinkee Kumari',
    review: 'I really enjoyed working with him on my project. He delivered a well-designed and responsive website that perfectly matched my needs. Communication was easy, and he was always open to feedback and improvements. His professionalism and reliability made the entire process smooth. He paid attention to every detail and ensured a high-quality result. I would highly recommend him for any kind of web development work.'
  }
];

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        grabCursor={true}
        loop={true}

        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}

        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={800}

        className="testimonials__container"
      >
        {
          data.map(({avatar, name, review}, index) => (
            <SwiperSlide key={index}>
              <article className="testimonial"> 
                <div className="client__avatar">
                  <img src={avatar} alt="avatar"/>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </article>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </section>
  )
}

export default Testimonials