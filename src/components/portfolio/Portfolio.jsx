import React from 'react'
import './portfolio.css'
import trivia from '../../assets/trivia.png'
import weather from '../../assets/weather.png'
import shop from '../../assets/shop.png'
import site from '../../assets/site.png'

const data = [
  {
    id: 1,
    image: trivia,
    title: 'Wizard Trivia Game',
    github: 'https://github.com/lminaya0110/lminaya0110.github.io',
    demo: 'https://lminaya0110.github.io/'
  },
  {
    id: 2,
    image: weather,
    title: 'Weather App',
    github: 'https://github.com/lminaya0110/laura-weather-app',
    demo: 'https://laura-weather-app.herokuapp.com/'
  },
  {
    id: 3,
    image: shop,
    title: 'Ceramic Shop/ Backend Focused',
    github: 'https://github.com/lminaya0110/minayaCeramicCreations',
    demo: 'https://minaya-ceramic-creations.herokuapp.com/'
  },
  {
    id: 4,
    image: site,
    title: 'Portfolio/ This Website!',
    github: '#',
    demo: '#'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio_item'>
                <div className="portfolio_item-image">
                  <img src={image} alt={title}></img>
                </div>
                <h3>{title}</h3>
                <div className='portfolio_item-cta'>
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio