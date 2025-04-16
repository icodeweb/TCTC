import React from 'react';
import { projects } from '../data/projects';

const Display = ({ selectedProject }) => {
    if (!selectedProject) {
        return <div id="display">No project selected.</div>;
    }

    const {
        headline,
        year,
        title,
        category,
        usage,
        area,
        locate,
        design,
        branding,
        client
    } = selectedProject;

    return (
        <div id="display">
            <h2>{headline}</h2>
            <p><strong>Year:</strong> {year}</p>
            <p><strong>Title:</strong> {title}</p>
            <p><strong>Category:</strong> {category}</p>
            <p><strong>Usage:</strong> {usage}</p>
            <p><strong>Area:</strong> {area}</p>
            <p><strong>Location:</strong> {locate}</p>
            <p><strong>Design:</strong> {design}</p>
            <p><strong>Branding:</strong> {branding}</p>
            <p><strong>Client:</strong> {client}</p>
            <img src={selectedProject.images[1]} />
        </div>
    );
};

export default Display;