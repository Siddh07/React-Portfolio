import Loader from 'react-loaders';
import React, { useState, useEffect } from 'react'; // Combined import
import AnimatedLetters from '../AnimatedLetters';
import emailjs from '@emailjs/browser';
import './index.scss'

const EmailForm = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        // Set a timeout to change the letterClass state after 4 seconds
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);

        // Return a cleanup function that clears the timeout
        return () => clearTimeout(timer);
    }, []); // Empty dependency array means this effect runs once on mount


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Your EmailJS service ID, template ID, and Public Key
        const serviceId = 'service_4xt6f0h';
        const templateId = 'template_e3lf4xs';
        const publicKey = '-rpDVOGKJcnyG1g-K';

        // Create a new object that contains dynamic template params
        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'Web Wizard',
            message: message,
        };

        // Send the email using EmailJS
        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully!', response);
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            });
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        Lorem Lipsum dolor sit amet, consect
                    </p>
                    <div className='contact-form'>
                    <form onSubmit={handleSubmit} className='emailForm'>                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input type='text' name='Subject' placeholder='Subject' required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='SEND' />
                                </li>
                            </ul>
                        </form>
                    </div>
                    <Loader type="pacman" />
                </div>
            </div >
        </>
    );
}

export default EmailForm;
