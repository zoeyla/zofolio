import React from "react";
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css'

const LandingPage = () => (
    <div className="content"> 
        <h1> Hi, I am Zoey La</h1>
        <Link to="/home">
            <button className="home">let's get to know me a bit more!</button>
        </Link>
    </div>
);

export default LandingPage;