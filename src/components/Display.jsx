import React from 'react';
import ProjectData from './ProjectData';
import ProjectView from './ProjectView';

const Display = ({ selectedProject }) => {
    if (!selectedProject) {
        return <div id="display">No project selected.</div>;
    }

    return (
        <div id="display">
            <ProjectData project={selectedProject} />
            <ProjectView project={selectedProject} />
        </div>
    );
};

export default Display;