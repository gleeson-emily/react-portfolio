import React from 'react'

//this will be the component with my headshot/about me section
//conditionally render when About tab is clicked

export default function About(){
    return (
    <div className="about">
        <h3>About Me</h3>
        <img src='../images/headshot.JPG' />
        <p>Hi there! I'm Emily, and I'm an aspiring web developer currently based in Toronto, Ontario. After being laid off from an unfulfilling position in Public Relations, I decided to make a career change into web development.</p>
        <p>I'm proficient in many technologies, but I prefer working on back-end code. Working with databases is one of my favourite parts of coding!</p>
        <p>Check out the Portfolio tab for some examples of my work, and my details are on the Contact tab if you want to get in touch.</p>
    </div>
    )
}

