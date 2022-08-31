import React from 'react'
import './about.css'
import me from '../../assets/about.jpeg'
import { GiBrain } from 'react-icons/gi'
import { IoIosBuild } from 'react-icons/io'
import { BiCodeAlt } from 'react-icons/bi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>

        <div className="about_me">
          <figure>
            <div className="about_me-image">
              <img src={me} alt='Illustration of dude holding sign by Mo Eid' />
              <figcaption className='caption'>
                <a href='https://www.pexels.com/photo/dude-with-sign-11798029/' target="_blank">Photo by Mo Eid from Pexels</a>
              </figcaption>
            </div>
          </figure>
        </div>

        <div className="about_content">
          <div className="about_cards">


            <article className='about_card'>
              <GiBrain className='about_icon' />
              <h5>Experience</h5>
              <small>Coding Bootcamp Graduate</small>
            </article>

            <article className='about_card'>
              <IoIosBuild className='about_icon' />
              <h5>Projects</h5>
              <small>5 Completed Projects</small>
            </article>

            <article className='about_card'>
              <BiCodeAlt className='about_icon' />
              <h5>Tech</h5>
              <small>JavaScript MERN Tech Stack</small>
            </article>
          </div>
          <p>
            Laura Minaya (she/her) is a software developer that is awesome at many different things. Like naming household items after Greek mythological figures, finishing an entire series on Netflix in record time, and building things with JavaScript. When she's not coding she loves reading fantasy books, listening to musical soundtracks, and spending time with family & friends. Click the button to send her a message about working together. 
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>


        </div>

      </div>
    </section>
  )
}

export default About