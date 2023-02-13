import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Activities.scss'

const Activities = () => {

    return (
        <div className='container activities-page'>
            <div className='activities-text-zone'>
                <h1 className='act'>
                    Activities
                </h1>
            </div>
            <div className='button-center'>
                <button className='calm-button'>
                    <span class="box">
                        Calm <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                </button>
                <button className='focus-button'>
                    <span class="box">
                        Focus <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                </button>
                <button className='PBB-button'>
                    <span class="box">
                        Power By Band <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                </button>
            </div>
        </div>
    )
};

export default Activities

