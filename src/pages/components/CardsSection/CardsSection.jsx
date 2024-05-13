import React, { useContext } from 'react'
import "./CardsSection.css"
import MainContext from '../../../context/Context'
import Cards from '../../../components/site/Cards/Cards'

const CardsSection = () => {
    const {data} = useContext(MainContext)
    
  return (
    <section className='cards__section'>
    <div className='container d-flex flex-column gap-5'>

        <div className='cards__section__heading d-flex justify-content-center flex-column align-items-center'>
        <h2>New realeased Products for Men</h2>
        <p>Who are in extremely love with eco friendly system.</p>
        </div>
     <Cards items={data} />
    </div>
    </section>
  )
}

export default CardsSection
