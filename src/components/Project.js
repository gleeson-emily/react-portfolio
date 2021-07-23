import React from 'react';
import projects from '../utils/projects.js';
//import 'bulma/css/bulma.min.css'

//component with my project - will be called multiple times
//refer to react activity 5 for a possible way to do this (separate .js file with projects array)

export default function Project(props) {
  const { projectTitle, projectDescription, projectTech, picture, pictureAltText, githubLink } = projects
    return (
        <div className="projectContainer">
<a href={githubLink} target="_blank">
  <img
    className="margins"
    src={picture}
    alt={pictureAltText}
  />
</a>
<h4>{projectTitle}</h4>
<h5>{projectTech}</h5>
<p>
  {projectDescription}
</p>
</div>
    )
}
