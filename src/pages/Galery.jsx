import React from 'react'
import Header from '../components/Header'
import HeaderImage from '.././images/img7.jpg'
import './galery.css'

const Galery = () => {
  const galleryLength = 9;
  const images = [];
  for (let i = 1; i <= galleryLength; i++) {
    images.push(require(`../images/gallery${i}.jpg`))
  }
  console.log(images)
  return (
    <>
      <Header title='Our Gallery' image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Aliquam pariatur molestiae qui sed quas quae sit est vero laborum eius!

      </Header>
      <section className='gallery'>
        <div className='conatiner gallery_container'>
          {
            images.map((images, index) => {
              return <article key={index}>
                <img src={images} alt={`Gallery img ${index + 1}`} />
              </article>
            })

          }
        </div>
      </section>
    </>

  )
}

export default Galery