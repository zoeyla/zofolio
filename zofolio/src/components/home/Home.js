import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import '../styles/Home.css'


const Home = () => {
    const [currentText, setCurrentText] = useState("");
    const [index, setIndex] = useState(0);
    const texts = ["average fortnite player", "vietnamese first-gen student", "aspiring software developer", "modern family lover", "avid playlist maker"];
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % texts.length);
        }, 2000); // Change text every 2 seconds

    return () => clearInterval(intervalId); // Clean up interval on unmount
    }, []);

    useEffect(() => {
        setCurrentText(texts[index]);
    }, [index]);


  return (
    <div className="content"> 
        <Link to="/about">
            <button className="about">about me</button>
        </Link>
        <Link to="/resume">
            <button className="resume">resume</button>
        </Link>
        <Link to="/projects">
            <button className="projects">coding genius in the making</button>
        </Link>
        <Link to="/fortnite">
            <button className="fornite">insane fortnite gameplay</button>
        </Link>
        <Link to="/misc">
            <button className="misc">miscellaneous</button>
        </Link>     
        <h2>she's (probably gonna be) your favorite:</h2>
        <br>{currentText}</br>
    </div>
  );
};

export default Home;
