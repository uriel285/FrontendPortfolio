import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectItem from '../components/ProjectItem';

const ProjectsPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const cargarProjects = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/projects');
            setProjects(response.data);
            setLoading(false);
        };
        cargarProjects();
    },
        [])

        
    return(
        <section className="holder">
            <h1>Projects</h1>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                projects.map(item => <ProjectItem key={item.id} titulo={item.titulo} imagen={item.imagen} enlace={item.enlace} cuerpo={item.cuerpo}/>)

            )}
        </section>
    )
}

export default ProjectsPage;