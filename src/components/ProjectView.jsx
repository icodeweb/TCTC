import React from 'react'

const ProjectView = ({ project }) => {
    return (
        <div id='ProjectView'>
            {project.images.map((image) => (
                <img src={image} key={image} />
            ))}
        </div>
    )
}

export default ProjectView
