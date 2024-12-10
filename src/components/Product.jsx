import React from 'react'
import css from '../css/product.css'
import dl from '../data/data.json'
export const Product = (props) => {
  return (
    dl.map((value,index)=>{
      return(
        <div className='product'>
            <img src={value.anh} alt="" />
            <h1 className='title'>{value.title}</h1>
            <p className='describe'>{value.describe}</p>
            <h2 className='price'>{value.price}<p>đồng</p></h2>
        </div>
      )
    })
  )
}
