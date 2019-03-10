import React from 'react';
import PROJECTS from '../data/projects';
// import Project from './Project';

const Project = (props) => {
    const { title, image, description, link } = props.project;

    return (
        <div style={{ display: 'inline-block', width: 300, marign: 10 }}>
            <h3>{title}</h3>
            <a href={link}>
                <img src={image} alt={title} style={{ width: 200, height: 120 }} />
            </a>
            <p>{description}</p>
        </div>
    );
}

const Projects = () => (
    <div>
        <h2>Highlited Projects</h2>
        <div>
            {
                PROJECTS.map(PRPOJECT => (
                    <Project key={PRPOJECT.id} project={PRPOJECT} />
                ))
            }
        </div>
    </div>
)


export default Projects;