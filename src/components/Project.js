import React from 'react';

export default function Project(props) {
    return (
<div className="card">
  <div className="card-image">
      <img alt={props.pictureAltText} src={props.picture} />
  </div>
  <div className="card-content">
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