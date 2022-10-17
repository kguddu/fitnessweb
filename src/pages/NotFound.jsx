import React from 'react'
import "./notfound.css"
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <section>
      <div className='conatiner notfound_container'>
        <h2>Page Not Found</h2>
        <Link to='/' className='btn'>Go Back</Link>

      </div>
    </section>
  )
}

export default NotFound