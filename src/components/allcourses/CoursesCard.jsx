import React from 'react'
import { coursesCard } from '../../dummydata';
import "./courses.css";
const CoursesCard = () => {
  return (
    <>
     
        <section className="courseCard">
             
            <div className="container grid2">
                {coursesCard.map((val)=>{
                    return(
                      <div className="items">
                         <div className="content flex">
                            <div className="left">
                                <div className="img">
                                    <img src={val.cover} alt=''/>
                                </div>
                            </div>
                            <div className="text">
                                    <h1>{val.coursesName}</h1>
                                    <div className="rate">
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <label htmlFOR=''>(5.0)</label>
                                    </div>
                                    <div className="details">
                                        {/* this because we are fetch nested api
                                        val come from courTeacher is which dat au want to fetch */}
                                        {val.courTeacher.map((details)=>(
                                            <>
                                            <div className="box">
                                                <div className="dimg">
                                                    <img src={details.dcover} alt=''/>
                                                </div>
                                                <div className="para">
                                                    <h4>{details.name}</h4>
                                                </div>
                                            </div>
                                            <span>
                                                {details.totalTime.Time}
                                            </span>
                                            </>
                                        ))}
                                    </div>
                            </div>
                         </div>
                      </div>
                    )
                })}
            </div>
        </section>
    </>
  )
}
export default CoursesCard;