import React from 'react'
import { Link } from 'react-router-dom'
import main from '../images/main.png'

const MainHeader = () => {
    return (
        <header className='main_header'>
            <div className=' container main_header-container'>
                <div className='left'>
                    <h4>#100 days of workOut</h4>
                    <h1>Join the legentd of the fitness world</h1>
                    <p>Do not give up on your dreams, or your dreams will give up on you.</p>

                
                    
                    <Link to='/plans' className='btn lg'> Get Started</Link>

                </div>
                <div className='right'>
                   
                    <div className='header-image'>
                        <img src={main} alt='main' />
                    </div>

                </div>
            </div>

        </header>
    )
}

export default MainHeader