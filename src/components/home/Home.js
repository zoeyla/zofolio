import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'


const Home = () => {
    const [currentText, setCurrentText] = useState("");
    const [index, setIndex] = useState(0);
    const texts = useMemo(() => [
        "aspiring software developer",
        "average fortnite player",
        "avid spotify playlist maker",
        "'modern family' lover",
        "vietnamese first-gen student",
    ], []);
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % texts.length);
        }, 750); // Change text every 2 seconds

        return () => clearInterval(intervalId); // Clean up interval on unmount
    }, [texts.length]);

    useEffect(() => {
        setCurrentText(texts[index]);
    }, [index, texts]);

    return (
        <div className="content"> 
            <div className="nav-buttons">
                <Link to="/about">
                    <button className="about">about zoey</button>
                </Link>
                <Link to="/resume">
                    <button className="resume">my resume</button>
                </Link>
                <Link to="/projects">
                    <button className="projects">coding genius in the making</button>
                </Link>
                <Link to="/fortnite">
                    <button className="fornite">insane fortnite gameplay</button>
                </Link>
            </div>     
            <h2>she's (probably gonna be) your favorite:</h2>
            <span className="dynamic-text">{currentText}</span>
            <div className="footer-text">
                <footer className="footer">designed and built by zoey la</footer>
                <span>x</span>
            </div>
        </div>
    );
    
};

export default Home;
