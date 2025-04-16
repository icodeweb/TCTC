import React from 'react';
import Header from './Header';
import ProjectList from './ProjectList';
const SidePanel = ({ projects, selectedProject, setSelectedProject }) => {
    return (
        <div id='SidePanel'>
            <Header />
            <ProjectList
                setSelectedProject={setSelectedProject}
            />
            <p id='COPYRIGHT'>COPYRIGHT 2020-2024 TCTC ALL RIGHTS RESERVED.</p>
        </div>
    );
};

export default SidePanel;