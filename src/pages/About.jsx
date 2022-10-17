import React from 'react'
import './about.css'
import Header from '../components/Header'
import HeaderImage from '.././images/img7.jpg'
import StoryImage from '../images/img6.jpg'
import VisionImage from '.././images/img2.jpg'
import MissionImage from '.././images/img1.jpg'

const about = () => {
  return (
    <>
      <Header title='About us' image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptatem commodi
        consequuntur hic dolores, possimus ab aut illum fugit adipisci?
      </Header>
      <section className='about_story'>
        <div className='container about_container'>
          <div className='about_image'>
            <img src={StoryImage} alt="story" />
          </div>
          <div className='about_content'>
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat ipsum ad
              itaque excepturi, animi molestias illum impedit beatae, dicta asperiores
              debitis voluptatum, aspernatur corrupti quibusdam consectetur earum ipsa saepe molestiae.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat ipsum ad
              itaque excepturi, animi molestias illum impedit beatae, dicta asperiores
              debitis voluptatum, aspernatur corrupti quibusdam consectetur earum ipsa saepe molestiae.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat ipsum ad
              itaque excepturi, animi molestias illum impedit beatae, dicta asperiores.

            </p>
          </div>
        </div>
      </section>
      <section className='about_vision'>
        <div className='container vision_container'>

          <div className='about_content'>
            <h1>Our Vision</h1>
            <p>
            There is a moment when you get older when your metabolism slows down and you don't feel like working out any more, so you don't want to keep yourself fit any more, but that's your decision. Why should you be judged for it?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat ipsum ad
              itaque excepturi, animi molestias illum impedit beatae, dicta asperiores
              debitis voluptatum, aspernatur corrupti quibusdam consectetur earum ipsa saepe molestiae.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat ipsum ad
              itaque excepturi, animi molestias illum impedit beatae, dicta asperiores.

            </p>
          </div>
          <div className='about_image'>
            <img src={VisionImage} alt="vision" />
          </div>
        </div>
      </section>

      <section className='our_mission'>
        <div className='container mission_container'>
          <div className='about_image'>
            <img src={MissionImage} alt="mission" />
          </div>
          <div className='about_content'>
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat ipsum ad
              itaque excepturi, animi molestias illum impedit beatae, dicta asperiores
              debitis voluptatum, aspernatur corrupti quibusdam consectetur earum ipsa saepe molestiae.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat ipsum ad
              itaque excepturi, animi molestias illum impedit beatae, dicta asperiores
              debitis voluptatum, aspernatur corrupti quibusdam consectetur earum ipsa saepe molestiae.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat ipsum ad
              itaque excepturi, animi molestias illum impedit beatae, dicta asperiores.

            </p>
          </div>
        </div>
      </section>
    </>

  )
}

export default about