import React, { useState } from 'react'
import SectionHead from './SectionHead'
import { ImQuotesLeft } from 'react-icons/im'
import Card from '../UI/Card'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io'
import { testimonials } from '../data'
// import img1 from '../images/img1.jpeg'

const Testimonials = () => {
    const [index, setIndex] = useState(0);
    const { name, quote, avatar } = testimonials[index];

    const prevTestimonials = () => {
        setIndex(prev => prev - 1);
        if (index <= 0) {
            setIndex(testimonials.length - 1);
        }

    }

    const nextTestimonials = () => {
        setIndex(prev => prev + 1);
        if (index >= testimonials.length - 1) {
            setIndex(0);
        }

    }
    return (
        <section className='testimonials'>
            <div className='container test_container'>
                <SectionHead icon={<ImQuotesLeft />} title='testimonials' className="testimonials_head" />
                <Card className='testimonial'>
                    <div className='test_avatar'>
                        <img src={avatar} alt={name} />
                    </div>
                    <p className='test_quote'>{` "${quote}"`}</p>
                    <h5>{name}</h5>
                    {/* <small className='test_title'>{job}</small> */}
                </Card>
                <div className='test_btn-container'>
                    <button className='test_btn' onClick={prevTestimonials}><IoIosArrowDropleftCircle /></button>
                    <button className='test_btn' onClick={nextTestimonials}><IoIosArrowDroprightCircle /></button>


                </div>
            </div>
        </section>
    )
}

export default Testimonials