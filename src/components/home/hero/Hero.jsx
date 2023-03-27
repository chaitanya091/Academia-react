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
                  <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus omnis cupiditate in quasi velit perspiciatis voluptatem dolor autem pariatur. Ipsam ipsa voluptatem animi quas, blanditiis fugiat sed suscipit distinctio sapiente.</p>
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