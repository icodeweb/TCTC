import React from 'react'

const YearProjects = ({ year, projects, setHoveredThumbnail, setSelectedProject }) => {
    return (
        <div className="year-section" id={year}>
            <span>{year}</span>
            <ul>
                {projects.map((project) => (
                    <li
                        key={project.id}
                        onClick={() => setSelectedProject(project)}
                        onMouseEnter={() => setHoveredThumbnail(project.thumbnail)}
                        onMouseLeave={() => setHoveredThumbnail(null)}
                    >
                        <span>{String(project.id).padStart(3, '0')}.{project.title}</span>
                        <span>{project.category}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default YearProjects