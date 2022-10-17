import React from 'react'

import {Link} from 'react-router-dom'

import {FaLinkedin} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'


const Footer = () => {
  return (
    <footer >
        <div className='container footer_container'>
            <article>
                <Link to='/' className='logo'>
                </Link>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas minus voluptatum 
                    nostrum ad! Quod quo voluptas sequi reprehenderit, ea rerum.
                </p>
                <div className='footer_socials'>
                    <a href='/' traget="_blank" rel='noreferrer noopener'><FaLinkedin/></a>
                    <a href='/' traget="_blank" rel='noreferrer noopener'><AiOutlineTwitter/></a>
                    <a href='/' traget="_blank" rel='noreferrer noopener'><AiFillInstagram/></a>
                </div>
            </article>
            <article>
                <h4>PermaLink</h4>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/plans'>Plans</Link>
                <Link to='/gallery'>Gallery</Link>
                <Link to='/trainers'>Trainers</Link>
            </article>
            <article>
                <h4>PermaLink</h4>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/plans'>Plans</Link>
                <Link to='/gallery'>Gallery</Link>
                <Link to='/trainers'>Trainers</Link>
            </article>
            <article>
                <h4>PermaLink</h4>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/plans'>Plans</Link>
                <Link to='/gallery'>Gallery</Link>
                <Link to='/trainers'>Trainers</Link>
            </article>
        </div>
        <div className='footer_copywrite'>
            <small>2022 fitness web &copy; All right Reserverd</small>
        </div>

    </footer>
  )
}

export default Footer