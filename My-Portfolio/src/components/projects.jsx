import React from 'react';

function Project({ title, image, description, linkRepo, linkApp }) {
    return (
        <div className="project">
            <div className="project-content">
                <h2 style={{textAlign:"center"}}>{title}</h2>
              <a href={linkApp} ><img  src={image} alt={`${title} still photo`} className="project-image" style={{ width: '600px', height: '400px' }}/></a>
                <div className="project-description">
                    <p>{description}</p>
                    <a style={{textAlign:"center"}} href={linkRepo} target="_blank" rel="noopener noreferrer">View Project Repository</a>
                </div>
            </div>
        </div>
    );
}

export default Project;