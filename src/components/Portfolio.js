import React from 'react';
import Project from './Project';
import projects from '../utils/projects.js';

import 'bulma/css/bulma.min.css';


export default function Portfolio() {
return (
        <div className="column is-four-fifths projectContainer">
            {projects.map((project)=> (
                 <Project key={project.id} picture={project.picture} pictureAltText={project.pictureAltText} projectTitle={project.projectTitle} projectTech={project.projectTech} projectDescription={project.projectDescription} githubLink={project.githubLink} deployedLink={project.deployedLink}/>
                 ))}
        </div>
    )
}