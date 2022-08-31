import React from 'react'
import './experience.css'
import {AiOutlineHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {SiJavascript} from 'react-icons/si'
import {GrReactjs} from 'react-icons/gr'
import {FaBootstrap} from 'react-icons/fa'
import {IoLogoNodejs} from 'react-icons/io'
import {SiExpress} from 'react-icons/si'
import {SiMongodb} from 'react-icons/si'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
{/* FrontEnd */}
        <div className="experience_frontend">
        <h3>Frontend Development</h3>
        <div className="experience_content">

          <article className='experience_details'>
            <AiOutlineHtml5 className='ed-icon' />
            <h4>HTML</h4>
          </article>

          <article className='experience_details'>
            <DiCss3 className='ed-icon' />
            <h4>CSS</h4>
          </article>

          <article className='experience_details'>
            <SiJavascript className='ed-icon' />
            <h4>JavaScript</h4>
          </article>

          <article className='experience_details'>
            <GrReactjs className='ed-icon' />
            <h4>React</h4>
          </article>

          <article className='experience_details'>
            <FaBootstrap className='ed-icon' />
            <h4>Bootstrap</h4>
          </article>

        </div>
        </div>

{/* Backend */}
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className='experience_content'>


            <article className='experience_details'>
            <IoLogoNodejs className='ed-icon' />
            <h4>Node.js</h4>
          </article>

          <article className='experience_details'>
            <SiExpress className='ed-icon' />
            <h4>Express.js</h4>
          </article>

          <article className='experience_details'>
            <SiMongodb className='ed-icon' />
            <h4>MongoDB</h4>
          </article>
            </div>
          </div>
        

      </div>
    </section>
  )
}

export default Experience