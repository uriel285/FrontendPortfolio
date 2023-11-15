import React from 'react';
import '../styles/components/projectItem.css';
import Reveal from "./Reveal.js";

const ProjectItem = (props) => {
    const { titulo, imagen, enlace, cuerpo, body } = props;
    return (
        <section className='projectsection'>
            <Reveal>
        <div className='projects'>
            <h1>{titulo}</h1>
            <img src={imagen} alt='' />
            <h2> <a href={enlace}> {enlace} </a> </h2> <br></br>
            <p>{cuerpo}</p>
            
            <div dangerouslySetInnerHTML={{ __html: body }} />
        </div> <hr></hr>
        </Reveal>
        </section>
    );
}

export default ProjectItem;