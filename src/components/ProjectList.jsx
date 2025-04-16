import React, { useState } from 'react';
import { projects } from '../data/projects';
import YearProjects from './YearProjects';

const ProjectList = ({ setSelectedProject }) => {
    const [hoveredThumbnail, setHoveredThumbnail] = useState(null);

    // Group projects by year and sort each year's projects by id (descending)
    const grouped = projects.reduce((acc, project) => {
        const year = project.year;
        if (!acc[year]) acc[year] = [];
        acc[year].push(project);
        return acc;
    }, {});

    // Sort projects in each year by id DESC
    Object.keys(grouped).forEach((year) => {
        grouped[year].sort((a, b) => b.id - a.id);
    });

    // Sort years DESC
    const sortedYears = Object.entries(grouped).sort((a, b) => Number(b[0]) - Number(a[0]));

    return (
        <>
            <div id='ProjectList'>
                {sortedYears.map(([year, yearProjects]) => (
                    <YearProjects
                        key={year}
                        year={year}
                        projects={yearProjects}
                        setHoveredThumbnail={setHoveredThumbnail}
                        setSelectedProject={setSelectedProject}
                    />
                ))}
            </div>
            {hoveredThumbnail && <img id='thumbnail' src={hoveredThumbnail} alt="project thumbnail" />}
        </>
    );
};

export default ProjectList;