import React from 'react'
import projects from '../utils/projects'
import Project from './Project'

//component with body of my portfolio site
//this will conditionally render everything based on which tab is clicked



export default function Navigation() {
    return (
    <div className="mainBody">

        <Project projects={projects} />
    </div>
)
    }