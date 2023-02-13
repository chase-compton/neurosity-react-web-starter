import '../Home/Home.scss';
import React, { useEffect, useState } from 'react';
import { navigate } from "@reach/router";



const Home = () => {

    function goToAbout() {
        navigate("/about");
    }

    return (
        <div className="container-home-page">
            <div className="text-zone">
                <h1 className='title'>
                    Brain Drone Race 2023
                </h1>
                <h2 className='lab'>
                    Human Technology Interaction Lab
                </h2>
                <h3 className='university'>
                    University of Alabama
                </h3>
                <button onClick={goToAbout} className="flat-button">
                    Learn More
                </button>
            </div>
        </div>
    )
};

export default Home