import React from 'react'
import otherImgs from '../other-images/other-images.js'

//this will be the component with my headshot/about me section
//conditionally render when About tab is clicked

export default function About(){
    return (
    <div className="about">
        <div className="block">
        <h3>About Me</h3>
        </div>
        <img className="headshot" src={otherImgs.headshot}/>
        <div className="card aboutCard">
        <div className="block">
        <p>Hi there! I'm Emily, and I'm an aspiring web developer currently based in Toronto, Ontario. After being laid off from an unfulfilling position in Public Relations, I decided to make a career change into web development.</p>
        </div>
        <div className="block">
        <p>I'm proficient in many technologies, but I prefer working on back-end code. Working with databases is one of my favourite parts of coding!</p>
        </div>
        <div className="block">
        <p>Check out the Portfolio tab for some examples of my work, and my details are on the Contact tab if you want to get in touch.</p>
        </div>
        </div>
        </div>
    )
}

