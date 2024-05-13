import React from 'react'
import "./Cards.css"
import CardsItem from '../CardsItem/CardsItem'

const Cards = ({items}) => {

    const SortingFunc=()=>{
        if (option.value="lh") {
            
        }
    }
    
  return (
    <div className='cards__section__cont d-flex  flex-column'>
        <div className='d-flex gap-3'><input  type="text" className='searchInp p-1' placeholder="Search to something" />
        <select onChange={LowToHigh()} name="sorting" id="sorting">
            <option value="Default">Default</option>
            <option value="lh">Low to High</option>
            <option value="hl">High to Low</option>
        </select></div>
        <div className='cards__section__cont__crds d-flex justify-content-between mt-5'>
       {
        items.map((item,index)=>(
            <CardsItem key={index} item={item} />
        ))
       }
       </div>
    </div>
  )
}

export default Cards
