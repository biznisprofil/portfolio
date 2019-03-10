import React from 'react';

const Project = (props) => {
    console.log('props', props);
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

export default Project;