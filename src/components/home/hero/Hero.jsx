import React from 'react'
import Title from '../../common/title/Title';
import './hero.css'
const Hero = () => {
  return (
     <>
        <section className='hero'>
            <div className='container'>
               <div className="row">
                  <Title subtitle='WELCOME TO ACADEMIA' title='Best Online Education'/>
                  <p>  “Consider staff who are physically challenged, or who are economically disadvantaged and would struggle to afford travel costs, or a remote worker who would otherwise miss out on classroom training. Online training is really something that potentially helps to level the playing field.” – Valeria Lo Iacono</p>
               <div className="button">
                  <button className='primart-btn'>
                     GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
                  </button>

                  <button>
                     VIEW COURSE<i className='fa fa-long-arrow-alt-right'></i>
                  </button>
               </div>
               </div>

            </div>
        </section>
        <div className="margin"></div>
     </>
  )
}
export default Hero;