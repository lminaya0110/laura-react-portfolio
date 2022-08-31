import React from 'react'
import './nav.css'
import { BiHomeSmile } from 'react-icons/bi'
import { FiUser } from 'react-icons/fi'
import { BsBook } from 'react-icons/bs'
import { RiGalleryFill } from 'react-icons/ri'
import { AiFillMessage } from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>
        <BiHomeSmile />
      </a>

      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
        <FiUser />
      </a>

      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}>
        <RiGalleryFill />
      </a>

      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>
        <BsBook />
      </a>

      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
        <AiFillMessage />
      </a>
    </nav>
  )
}

export default Nav