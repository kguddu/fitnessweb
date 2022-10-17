import React from 'react'
import Header from '../components/Header'
import HeaderImage from '.././images/img7.jpg'
import { trainers } from '../data'
import { BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import Trainer from '../components/Trainer'

import './trainer.css'

const Trainers = () => {
  return (
    <>
      <Header title='Our Trainers' image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptatem doloremque autem minima similique
        fugit deserunt doloribus? Sunt, suscipit possimus.
      </Header>
      <section className='trainers'>
        <div className='container trainers_container'>
          {
            trainers.map(({ id, image, name, job, socials }) => {
              return <Trainer key={id} image={image} name={name} job={job} socials={
                [
                  { icon: <BsInstagram />, link: socials[0] },
                  { icon: <AiOutlineTwitter />, link: socials[1] },
                  { icon: <FaFacebookF />, link: socials[2] },
                  { icon: <FaLinkedinIn />, link: socials[3] }
                ]
              } />


            })
          }
        </div>
      </section>
    </>
  )
}

export default Trainers