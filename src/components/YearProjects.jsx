import React from 'react'

const YearProjects = ({ year, projects, setHoveredThumbnail }) => {
    return (
        <div className="year-section" id={year}>
            <span>{year}</span>
            <ul>
                {projects.map((project) => (
                    <li
                        key={project.id}
                        onMouseEnter={() => setHoveredThumbnail(project.thumbnail)}
                        onMouseLeave={() => setHoveredThumbnail(null)}
                    >
                        <span>{project.id}.{project.title}</span>
                        <span>{project.category}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default YearProjects
