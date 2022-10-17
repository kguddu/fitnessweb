import React from 'react'
import SectionHead from './SectionHead'
import { faqs } from '../data'
import { FaQuestion } from 'react-icons/fa'
import FAQ from './FAQ'

const Faqs = () => {
  return (
    <section className='faqs'>
      <div className='conatiner faqs_container'>
        <SectionHead icon={<FaQuestion />} title='FAQs' />
        <div className='faq_wrapper'>
          {
            faqs.map(({ id, question, answer }) => {
              return <FAQ key={id} question={question} answer={answer} />
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Faqs