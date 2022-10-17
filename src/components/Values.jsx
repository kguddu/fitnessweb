import React from 'react'
import img5 from '../images/img5.jpg'
import SectionHead from './SectionHead'
import { GiCutDiamond } from 'react-icons/gi'
import { values } from '../data'
import Card from '../UI/Card'

const Values = () => {
    return (
        <section className='values'>
            <div className='container values_container'>
                <div className='left'>
                    <div className='val_image'>
                        <img src={img5} alt='val_imagge'></img>
                    </div>
                </div>
                <div className='right'>
                    <SectionHead icon={<GiCutDiamond />} title="Values" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero assumenda consectetur qui,
                        tque alias facilis? Perferendis cupiditate harum et iste!
                    </p>
                    <div className='val_wrapper'>
                        {
                            values.map(({ id, icon, title, desc }) => {
                                return <Card key={id} className='val_value'>
                                    <span>{icon}</span>
                                    <h4>{title}</h4>
                                    <small>{desc}</small>

                                </Card>
                            })
                        }
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Values