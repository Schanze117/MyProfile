import React from 'react';

function Project({ title, image, description, linkRepo, linkApp }) {
    return (
        <div className="project">
            <div className="project-content">
                <h2>{title}</h2>
                <img src={image} alt={`${title} still photo`} className="project-image" href={linkApp} />
                <div className="project-description">
                    <p>{description}
                        
                        Click on the picture to view the app!
                    </p>
                    <a href={linkRepo} target="_blank" rel="noopener noreferrer">View Project Repository</a>
                </div>
            </div>
        </div>
    );
}

export default Project;