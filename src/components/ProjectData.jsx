import React from 'react'

const ProjectData = (project) => {
    return (
        <div id='ProjectData'>
            <h3>{project.title}</h3>
            <div>
                <span>USAGE : {project.usage}</span>
                <span>AREA : {project.area}</span>
                <span>LOCATE : {project.locate}</span>
                <span>DESIGN : {project.design}</span>
                <span>BRANDING : {project.branding}</span>
                <span>CLIENT : {project.client}</span>
            </div>
        </div>
    )
}

export default ProjectData
