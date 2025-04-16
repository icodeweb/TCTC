import React from 'react'

const ProjectData = ({ project }) => {
    return (
        <div id='ProjectData'>
            <span>{project.title}</span>
            <div>
                <span>USAGE : {project.usage}</span>
                <span>DESIGN : {project.design}</span>
                <span>AREA : {project.area}</span>
                <span>BRANDING : {project.branding}</span>
                <span>LOCATE : {project.locate}</span>
                {project.client && <span>CLIENT : {project.client}</span>}
            </div>
        </div>
    )
}

export default ProjectData
