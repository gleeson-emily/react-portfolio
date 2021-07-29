import React from 'react'

//this will be the root/homepage for the portfolio
//conditionally rendered when page accessed at root or when home tab in navbar clicked

export default function Home() {
    return (
    <div className="homePage">
        <h3 className="block">Welcome!</h3>
        <div className="homeCard">
            <div className="block">
            <p>My name is Emily Gleeson and I'm a web developer currently living in Toronto, Ontario.</p>
         </div> 
         <div className="block">
       <p>Click the tabs above to learn more about me, see some of my work, and get in touch if you'd like to learn more.</p>
        </div>
    </div>
   </div> )
}