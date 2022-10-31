import React from 'react'
import './Contact.css'
function Contact() {
  return (
    <div className="contact">
      <span className="contactTitle">Contact Us</span>
      <div className="content">
        <div className="info">
        <div className="infobox">
        <h2>Call Us</h2>
          <p>+91-234567890</p>
        </div>
        <div className="infobox">
        <h2>Location</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae laboriosam rerum similique maiores, hic repellendus.</p>
        </div>
        <div className="infobox">
        <h2>Business Hour</h2>
          <p>Mon-Fri: 10am-7pm</p>
          <p>Sat-Sun: 10am-2pm</p>
        </div>
        
        </div>
        <div className="form">
          <form action="" className='contactform'>
            <label htmlFor="">Enter your name</label>
         
            <input type="text" className="contactinfo" placeholder='Enter your name' />
            
            <label htmlFor="">Enter your email</label>
         
            <input type="email" className="contactinfo" placeholder='Enter your email' />
            
            <label htmlFor="">Any query you have!</label>
           
            <textarea className='contactinfo' placeholder='Enter your query' name="" id="" cols="30" rows="10"></textarea>
            
            <button className="contactbutton">Submit</button>
          </form>
          
        </div>
      </div>
    </div>
  )
}

export default Contact