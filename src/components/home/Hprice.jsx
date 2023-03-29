import React from 'react'
import Title from '../common/title/Title'
import PriceCard from "../princing/PriceCard"
const Hprice = () => {
  return (
    <>
            <section className="hprice padding">
            <Title subtitle="our princing" title='princing & packeges'/>

            <div className="price container grid">
                <PriceCard/>
            </div>
            </section>
    </>
  )
}
export default Hprice