import React from 'react'
import projects from '../utils/projects'
import Project from './Project'

//component with body of my portfolio site




export default function Navigation() {
    return (
    <div className="mainBody">

        <Project projects={projects} />
    </div>
)
    }