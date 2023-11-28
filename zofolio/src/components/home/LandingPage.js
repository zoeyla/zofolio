import React from "react";
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css'

const LandingPage = () => (
    <div className="content"> 
        <h1> <span className="greeting">Hi,</span> <span className="name">I am Zoey La. </span></h1>
        <Link to="/home">
            <button className="home">let's get to know me a bit more!</button>
        </Link>
    </div>
);

export default LandingPage;