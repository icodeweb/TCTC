import React, { useState } from 'react';
import { projects } from '../data/projects';
import YearProjects from './YearProjects';

const ProjectList = () => {
    const [hoveredThumbnail, setHoveredThumbnail] = useState(null);

    // Group projects by year
    const grouped = projects.reduce((acc, project) => {
        const year = project.year;
        if (!acc[year]) {
            acc[year] = [];
        }
        acc[year].push(project);
        return acc;
    }, {});

    // Convert grouped object to sorted array of [year, projects[]]
    const sortedYears = Object.entries(grouped).sort((a, b) => b[0] - a[0]);
    return (
        <>
            <div id='ProjectList'>
                {sortedYears.map(([year, yearProjects]) => (
                    <YearProjects
                        key={year}
                        year={year}
                        projects={yearProjects}
                        setHoveredThumbnail={setHoveredThumbnail}
                    />
                ))}
            </div>
            {hoveredThumbnail && <img src={hoveredThumbnail} alt="project thumbnail" />}
        </>
    );
};

export default ProjectList;