import React, { useState } from 'react'

//this will be my contact info page with github/linkedin/resume info
//plus contact form (that apparently doesn't need to actually send an email)
//conditionally render when Contact tab in navbar clicked

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
    
        if (inputType === 'name') {
          setName(inputValue);
        } else if (inputType === 'email') {
          setEmail(inputValue);
        } else {
          setMessage(inputValue);
        }
      };
    


const handleFormSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you for your message! I'll be in touch soon!`);
        setName('');
        setEmail('');
        setMessage('');
      };

//this function clears info from the form when cancel button is pressed
const cancelForm = (e) => {
        e.preventDefault();
        setName('');
        setEmail('');
        setMessage('');

};

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
  <form className="field">
  <label className="label">Name</label>
  <div className="control">
    <input className="input" name="name" type="text" value={name} onChange={handleInputChange} placeholder="Your name here!" />
  </div>
<div className="field">
  <label className="label">Email Address</label>
  <div className="control">
    <input className="input" name="email" type="email" value={email} onChange={handleInputChange} placeholder="Your email here!" />
  </div>
</div>

<div className="field">
  <label className="label">Message</label>
  <div className="control">
    <textarea className="textarea" name="message" value={message} onChange={handleInputChange} placeholder="Message"></textarea>
  </div>
</div>

<div className="field is-grouped">
  <div className="control">
    <button className="button is-link" onClick={handleFormSubmit} >Submit</button>
  </div>
  <div className="control">
    <button className="button is-link is-light" onClick={cancelForm}>Cancel</button>
  </div>
</div>

</form>
</div>

    )
}