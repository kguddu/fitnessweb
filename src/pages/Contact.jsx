import React from 'react'
import Header from '../components/Header'

import HeaderImage from '.././images/img7.jpg'
import { MdEmail } from 'react-icons/md'
import { BsMessenger } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'
import './contact.css'

const contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis eligendi magni
        cupiditate minima labore voluptates assumenda accusantium temporibus molestias vel.

      </Header>
      <section className='contact'>
        <div className='container contact_container'>
          <div className='contact_wrapper'>
            <a href='mailto:kguddu@gmail.com' target='blank' rel='norefferrer noopener'>{<MdEmail />}</a>
            <a href='http:/m.me/guddu_kumar' target='blank' rel='norefferrer noopener'>{<BsMessenger />}</a>
            <a href='https://wa.me/+919113769108' target='blank' rel='norefferrer noopener'>{<IoLogoWhatsapp />}</a>
          </div>
        </div>
      </section>
    </>



  )
}

export default contact