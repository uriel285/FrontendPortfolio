import React, {useState} from 'react';
import '../styles/pages/contacto.css';
import axios from 'axios';
import Reveal from "../components/Reveal.js";
import {AiFillGithub, AiFillLinkedin, AiOutlineMail} from "react-icons/ai";
import {BsWhatsapp, BsInstagram, BsFillSendFill} from "react-icons/bs";

const ContactoPage = (props) => {
    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await
axios.post('https://backend-uriel-portafolio.onrender.com/api/contacto', formData)
    setSending(false);
    setMsg(response.data.message);
    if (response.data.error === false){
        setFormData(initialForm)
    }
    }

  return (
   <main>
    <section className='formulario'>
        <Reveal>
    <div className='formulario card'>
            <h1>Contact Me</h1>
            <form onSubmit={handleSubmit}>
            <label htmlFor="nombre" >Name</label> 
            <br/>
            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
            <br/>
            <label htmlFor="email">Mail</label>
            <br />
            <input type="email" name="email" value={formData.email} onChange={handleChange}/>
            <br/>
            <label htmlFor="telefono">Phone</label>
            <br />
            <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} />
            <br/>
            <label htmlFor="mensaje">Message</label>
            <br />
            <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
            <br/>
            <br/>
            <div className="divbtn">
            {sending ? <p>Enviando...</p> : null}
            {msg ? <p>{msg}</p> : null}
            <button type="submit" value="Enviar">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <BsFillSendFill className='iconSend'/>
            </button>
            </div>
            </form>
        </div>
        </Reveal>
    </section>
    <section className='contact'>
        <Reveal>
        <div className='card'>
            <h2>You can also chat me on:</h2>
            <br></br>
            <div className='icons'>
            <a href='https://www.linkedin.com/in/urielherrera-it/'><AiFillLinkedin className='i linke'/></a>
            <a href='mailto:contactoherrerauriel@gmail.com'><AiOutlineMail className='i mail'/></a>
            <a href='https://wa.me/5493413517570'><BsWhatsapp className='i whats'/></a>
            <a href='https://www.instagram.com/herrerauriel.itf/'><BsInstagram className='i ig'/></a>
            </div>
            <p>Click the icons!</p>
        </div>
        </Reveal>
    </section>
    <section className='git'>
    <Reveal>
        <div className='card'>
            <h2>I invite you to see my github profile</h2> 
            <a href='https://github.com/uriel285'><AiFillGithub className='i github'/></a>
            <p>Click the icon!</p>
        </div>
    </Reveal>
    </section>
   </main>
  );
}

export default ContactoPage;
