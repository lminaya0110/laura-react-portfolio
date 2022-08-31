import React from 'react'
import './footer.css'
import {BsGithub} from 'react-icons/bs'
import {GrLinkedin} from 'react-icons/gr'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>Laura</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href='https://github.com/lminaya0110' target='_blank'><BsGithub /></a>
        <a href='https://www.linkedin.com/in/laura-minaya-b1a853223/' target='_blank'><GrLinkedin /></a>
      </div>

      <div className="footer_copy">
        <small>
          &copy; Laura Minaya. All rights reserved.
        </small>
      </div>

    </footer>
  )
}

export default Footer