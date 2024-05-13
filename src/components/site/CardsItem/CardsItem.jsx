import React from 'react'
import "./CardsItem.css"
import Detail from '../../../pages/site/Detail/Detail'

const CardsItem = ({item}) => {
    console.log(item)
  return (
    <div className='cards__section__cont__crd'>
      <img width={"255px"} height={"271px"} src={item.image} alt="" />
      <h5 className='my-3'>{item.title}</h5>
      <h3>{item.price}$</h3>
     
     <div style={{marginTop:"16px"}} className='d-flex gap-4 '> <button  className='btn btn-primary'>Detail</button>
      <button  className='btn btn-danger'>Add to Cart</button></div>
    </div>
  )
}

export default CardsItem
