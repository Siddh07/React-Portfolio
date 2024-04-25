import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import React, { useEffect, useState } from 'react'; // Import useState from React
import Logo from './Logo'
import Loader from 'react-loaders'


const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const newArray = Array.from(['i', 'd', 'd', 'h', 'a', 'n', 't']);
    const jobArray = Array.from(['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']);

    useEffect(() => {
        // Set a timeout to change the letterClass state after 4 seconds
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);

        // Return a cleanup function that clears the timeout
        return () => clearTimeout(timer);
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I,</span>
                        <span className={`${letterClass} _14`}>'m',</span>

                        <img src={LogoTitle} alt="JavaScript Developer Name, Web Developer Name" />
                        <AnimatedLetters letterClass={letterClass} strArray={newArray} idx={15} />
                        <br />
                        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} />
                    </h1>
                    <h2>Frontend Developer / Wordpress Developer</h2>
                    <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                </div>

                <Logo />
            </div>

            <Loader type="pacman" />

        </>
    );

}

export default Home