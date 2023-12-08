import React from 'react';
import '../styles/components/loading.css';
import Reveal from "./Reveal.js";

const Loading = (props) => {
    return (
        <Reveal>
        <section className='loadingBg'>
        <Reveal>
        <h1>LOADING</h1>
        <div className='spinner'></div>
        <p>This may take a few seconds, I use free host for the entire application</p>

        </Reveal>
        </section>
        </Reveal>
    );
}

export default Loading;