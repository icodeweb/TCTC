import React from 'react';
import { projects } from '../data/projects';

const ProjectList = () => {
    return (
        <div id='ProjectList'>
            {projects.map(project => (
                <div key={project.id}>
                    <span>{String(project.id).padStart(3, '0')}</span>
                    <span>{project.title}</span>
                    <span>{project.category}</span>
                </div>
            ))}
        </div>
    );
};

export default ProjectList;