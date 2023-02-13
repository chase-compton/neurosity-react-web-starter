import React, { useEffect, useState } from 'react';
import './About.scss'

const About = () => {

    return  (
        <div className='container-about-page'>
            <div className='about-text-zone'>
                <h1 className='about-title'>
                   About HTIL
                </h1>
                <p className='about-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porta nibh venenatis cras sed felis eget. Adipiscing elit ut aliquam purus sit amet luctus venenatis.</p>
                <p className='about-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porta nibh venenatis cras sed felis eget. Adipiscing elit ut aliquam purus sit amet luctus venenatis.</p>
                <p className='about-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</p>
            </div>
        </div>
    )
};

export default About