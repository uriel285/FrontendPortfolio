import React from 'react';
import '../styles/pages/home.css';
import Atropos from "atropos/react";
import "atropos/atropos.css";
import {AiOutlineDownload} from 'react-icons/ai';
import curriculumPDF from "../assets/Curriculum-UrielHerrera(english).pdf";
import Reveal from "../components/Reveal.js";

const HomePage = (props) => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = curriculumPDF;
        link.download = 'curriculum.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
    return (
        <div>

            <div className='portada'>
                <Atropos className='atropos-banner' highlight={false} shadow={true}>
                    <section className='portadaAtro atropos-banner-spacer' data-atropos-offset="-5" >
                        <h1 data-atropos-offset="8">Full Stack</h1>
                        <h2 data-atropos-offset="3">Uriel Herrera</h2>
                        <h1 data-atropos-offset="8">Developer</h1>
                    </section>

                </Atropos>
            </div>
            <Reveal>
            <div className='card'>
                <h1>About Me</h1>
                <p className='aboutP'>
                    Hello, my name is Uriel, and I'm Full Stack developer. I'm currently studying for a higher degree in software development at IFTS No. 4, and I've also earned multiple certifications, including a diploma in Java programming and an expert university course in full-stack web development at UTN.
                    <br></br>
                    I'm passionate about learning, challenging my skills, working as part of a team, and, most importantly, providing solutions through my efforts.
                    <br></br>
                    I'm proficient in several programming languages, including Python, PHP, JavaScript, and Java, and I have knowledge with popular libraries and frameworks such as Django, Laravel, Spring, Node, React, and more.
                    <br></br>
                    If you'd like to learn more about me, I invite you to download my resume and get in touch!
                </p>
            </div>
            </Reveal>
            <Reveal>
            <div className='card'>
                <h1>Download my Resume</h1>
                <button onClick={handleDownload}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <AiOutlineDownload/>
                </button>
                <p>Click the button!</p>
            </div>
            </Reveal>

        </div>
    )
}

export default HomePage;