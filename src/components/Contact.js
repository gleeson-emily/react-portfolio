import React from 'react'

//this will be my contact info page with github/linkedin/resume info
//plus contact form (that apparently doesn't need to actually send an email)
//conditionally render when Contact tab in navbar clicked

export default function Contact() {
    return (
    <div className = "contact">
        
    <ul>
    <li>
      <a href="https://github.com/gleeson-emily" target="_blank">
        GitHub
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/emily-gleeson24" target="_blank">
        LinkedIn
      </a>
    </li>
    <li>
      <a
        href="https://drive.google.com/file/d/1GSTJWOTUc4nwybM1r9bnrPMPTJ5y4iHA/view?usp=sharing"
        target="_blank"
      >
        Resume
      </a>
    </li>
  </ul>
    
   <h3>Contact Me: </h3> 
  <div className="field">
  <label className="label">Name</label>
  <div className="control">
    <input className="input" type="text" placeholder="Your name here!" />
  </div>
</div>

<div className="field">
  <label className="label">Email Address</label>
  <div className="control">
    <input className="input" type="email" placeholder="Your email here!" />
  </div>
</div>

<div className="field">
  <label className="label">Message</label>
  <div className="control">
    <textarea className="textarea" placeholder="Message"></textarea>
  </div>
</div>

<div className="field is-grouped">
  <div className="control">
    <button className="button is-link">Submit</button>
  </div>
  <div className="control">
    <button className="button is-link is-light">Cancel</button>
  </div>
</div>

</div>

    )
}