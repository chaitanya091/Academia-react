import React from 'react'
import Back from '../common/back/Back';
import "./contact.css"
const Contact = () => {
    // const map=' https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15138.304760610807!2d73.8508336155369!3d18.457542068065035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eac85230ba47%3A0x871eddd0a8a0a108!2sSCTR&#39;S%20Pune%20Institute%20of%20Computer%20Technology!5e0!3m2!1sen!2sin!4v1680078453557!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ' 
  return (
    <>
            <Back title='Contact Us'/>
            <section className='contact padding'>
                 <div className='container shadow flexSB'>
                    <div className='left row'>
                        {/* <iframe src={map}></iframe> */}
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15138.302980469762!2d73.84210028602699!3d18.457562254065632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eac85230ba47%3A0x871eddd0a8a0a108!2sSCTR&#39;S%20Pune%20Institute%20of%20Computer%20Technology!5e0!3m2!1sen!2sin!4v1680076219293!5m2!1sen!2sin"  ></iframe>
                    </div>
                     <div className='right row'>
                        <h1>Contact Us</h1>
                        <p>Pune Institute of Computer Technology</p>
                        <div className='items grid2'>
                            <div className='box'>
                                <h4>Address:</h4>
                                <p>Survey No. 27, Near, Trimurti Chowk, 
                                    Pune Institute of Computer Technology, 
                                    Dhankawadi, Pune, 
                                    Maharashtra 411043</p>
                            </div>
                             <div className='box'>
                                <h4>Email:</h4>
                                <a href="mailto:chaitanyapatil091@gmail.com">chaitanyapatil091@gmail.com</a>
                             </div>
                             <div className='box'>
                                <h4>Phone:</h4>
                                <p>+91 8080745386</p>
                             </div>
                        </div>
                        <form action=''>
                            <div className='flexSB'>
                                <input type="text" placeholder='Name'/>
                                <input type="email" placeholder='Email'/>
                            </div>
                            <input type="email" placeholder='Subject'/>
                            <textarea cols='30' rows='10'>
                                Create a message here ...
                            </textarea>
                            <button className='Primary-btn'>SEND MESSAGE</button>
                        </form>
                        <h3>Follow us here</h3>
                        <span>FACEBOOK TWITTER INSTAGRAM DRIBBLE</span>
                     </div>
        
                 </div>

            </section>


    </>
  )
}
export default Contact