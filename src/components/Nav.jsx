import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import css from '../css/nav.css'
export const Nav = () => {
  return (
    <div className='nav'>
        <div className='left'>
            <img  src="../images/logo.png" alt="" />
            <h1>Food</h1>
        </div>
        <div className='right'>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Services</a></li>
            </ul>
              <a href="">
              <FontAwesomeIcon icon={faCartShopping} size="2x"/>
              </a>
            <img src="../images/avatar.png" alt="" />
        </div>
    </div>
  )
}
