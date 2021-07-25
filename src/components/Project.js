import React from 'react';
import projects from '../utils/projects.js';



console.log(projects)

export default function Project({ projects }) {

  console.log({projects})
  console.log(projects[0].githubLink)
    return (
      projects.map((project) => (
          <div className="projectContainer" key={project.id}>
          <a href={project.githubLink} target="_blank">
        <img
        className="margins"
        src={project.picture}
        alt={project.pictureAltText}
        />
    </a>
    <h4>{`${project.projectTitle}`}</h4>
    <h5>{`${project.projectTech}`}</h5>
    <p>
    {`${project.projectDescription}`}
    </p>
    </div>
      ))
      );
    }