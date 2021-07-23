import React from 'react';

//use state - for my navbar
//grab a css framework for styling


//code for navbar from my first portfolio switched to JSX syntax

export default function Header() {
return ( <header>
  <h1>Emily Gleeson - Web Developer Portfolio</h1>
  <h2>Aspiring Web Developer</h2>
  <nav>
    <ul className="navbar shadow">
      {/* <li>
        <a href="#about-me">About Me</a>
      </li>
      <li>
        <a href="#my-work">My Work</a>
      </li> */}
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
  </nav>
</header>
)
}