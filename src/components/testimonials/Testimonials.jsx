import React from 'react'
import './testimonials.scss'
import Data from './TestimonialData'
// import Swiper core and required modules
import {  Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


function Testimonials() {
  return (
    <section id="testimonials" className='testimony'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonial-container"
       // install Swiper modules
       modules={[ Pagination ]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}
       
      >
        {
          Data.map((a)=>(
            <SwiperSlide className="testimonial">
            <div className="client-avatar">
              <img src={a.avatar} alt="" /></div>
            <h5 className='avatar-name'>{a.name}</h5>
              <small className="client-review">{a.review}</small> 
          </SwiperSlide>
          ))
        }
       
      </Swiper>
    </section>
  )
}

export default Testimonials