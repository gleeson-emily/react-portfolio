import React from 'react';
import images from '../project-images/project-images';

export default function Project(props) {
    return (
<div class="card">
  <div class="card-image">
      <img alt={props.pictureAltText} src={props.picture} />
  </div>
  <div class="card-content">
    <h4>{`${props.projectTitle}`}</h4>
    <h5>{`${props.projectTech}`}</h5>
    <p>
    {`${props.projectDescription}`}
    </p>
   <a href={props.githubLink} target="_blank">Github</a>

    <a href={props.deployedLink} target="_blank">Deployed</a>
   </div>
    </div>
    )
}