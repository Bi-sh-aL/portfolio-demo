import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

function HeaderSocial() {
  return (
    <div className="header-socials">
        <a href="https://www.linkedin.com/in/bishal-shrestha-69386a24a/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/Bi-sh-aL" target="_blank"><FaGithub /></a>
        <a href="https://www.facebook.com/bsal.stha.7" target="_blank"><BsFacebook /></a>
        <a href="https://www.instagram.com/bshal_srestha/" target="_blank"><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocial