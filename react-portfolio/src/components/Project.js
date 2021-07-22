import React from 'React';
import projects from '../projects';
//import 'bulma/css/bulma.min.css'

//component with my project - will be called multiple times
//refer to react activity 5 for a possible way to do this (separate .js file with projects array)

export default function Project({projects}) {
    return (
        <div className="projectContainer">
<a href={githubLink} target="_blank">
  <img
    className="margins"
    src={projects.picture}
    alt={projects.pictureAltText}
  />
</a>
<h4>{projects.projectTitle}</h4>
<h5>{projects.projectTech}</h5>
<p>
  {projects.projectDescription}
</p>
</div>
    )
}