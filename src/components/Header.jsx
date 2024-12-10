import React from 'react'
import css from '../css/header.css'
import { Product } from './Product'
export const Header = () => {
  return (
    <div className='header'>
        <div className='left'>
            <div className='left-top'>
                <h1>Bike Delivery   
                </h1>
                <img src="../images/shipper.jpg" alt="" />

            </div>
            <div className='left-middle'>
                <h1>The Fastest</h1>
                <h1>Delivery in <span style={{color:'orangered'}}>Food</span>
                </h1>
            </div>
            <div className='left-bottom'>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque dignissimos asperiores amet eveniet voluptatibus debitis totam ullam nostrum harum sequi in minima eius vitae, assumenda dicta temporibus accusamus odit ex?</p>
            </div>
            <button>Order Now</button>
        </div>
        <div className='right'>
            <div className='right-main'>
                <img src="../images/heroBg.png" alt="" />
                <div className='product-details'>
                    <Product/>
                </div>
            </div>
        </div>
    </div>
  )
}
