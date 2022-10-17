import React from 'react'
import Header from '../components/Header'
import HeaderImage from '.././images/img7.jpg'
import Card from  '.././UI/Card'
import {plans} from '../data'
import './plans.css'

const Plans = () => {
  return (
    <>
    <Header title="MemberShip Plans" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum accusantium sint optio
      facilis nesciunt aspernatur voluptate repudiandae impedit, laboriosam sequi.

      </Header>
      <section className='plans'>
        <div className='conatiner plans_container'>
          {
            plans.map(({id,name,desc,price,features})=>{
              return <Card className='plan' key={id}>
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`$${price}`}<h2>/month</h2></h1>
                <h4>Features</h4>
                {
                  features.map(({feature,available},index)=>{
                    return <p key={index} className={!available ? 'disabled' : ''}>{feature}</p>
                  })
                }
                <button className='btn lg'> Choose Plans</button>
              </Card>
            })
          }
        </div>
      </section>
      </>
   
  )
}

export default Plans