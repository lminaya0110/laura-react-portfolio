import React from 'react'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/laura-minaya-b1a853223/' target="_blank">
            <AiOutlineLinkedin />
        </a>
        <a href='https://github.com/lminaya0110' target="_blank">
           <AiOutlineGithub />
        </a>
        
    </div>
  )
}

export default HeaderSocials