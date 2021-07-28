import React from 'react';
import Project from './Project';
import projects from '../utils/projects.json';
import 'bulma/css/bulma.min.css';


export default function Portfolio() {
return (
        <div class="column is-four-fifths">
            {projects.map((project)=> (
                 <Project key={project.id} picture={project.picture} pictureAltText={project.pictureAltText} projectTitle={project.projectTitle} projectTech={project.projectTech} projectDescription={project.projectDescription} githubLink={project.github} deployedLink={project.deployedLink}/>
                 ))}
        </div>
    )
}