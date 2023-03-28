import React from 'react'
import "./about.css"
import Title from '../common/title/Title';
import { homeAbout } from '../../dummydata';
import AWrapper from './AWrapper';
 const AboutCard = () => {
  return (
     <>
     <section className='aboutHome'>
        <div className='container flexSB'>
            <div className="left-row">
                <img src="./images/5.jpg" alt="about"/>
            </div>
            <div className="right row">
              <Title subtitle ="LEARN ANYTHING" title="Benefits About Online Learning Expertise"/>
              <div className="items">
                {homeAbout.map((val)=>(
                  <div className="item flexSB">
                     <div className="img">
                      <img src={val.cover} alt=""/>
                     </div>
                     <div className="text">
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                     </div>
                  </div>
                ))}
              </div>
            </div>

        </div>
     </section>
     <AWrapper/>
     </>
  )
}
export default AboutCard