import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiGeeksforgeeks} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href = "https://linkedin.com" target = "_blank"><BsLinkedin /></a>
        <a href = "https://github.com" target = "_blank"><BsGithub /></a>
        <a href = "https://www.geeksforgeeks.org" target = "_blank"><SiGeeksforgeeks /></a>
    </div>
  )
}

export default HeaderSocials