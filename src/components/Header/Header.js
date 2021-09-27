import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGifts } from '@fortawesome/free-solid-svg-icons'
import Card from 'react-bootstrap/Card';

const Header = () => {
    // icon
    const element = <FontAwesomeIcon icon={faGifts} />
    return (
        <div className='header'>
            <h2>{element} Welcome To the Fitness World</h2>
            <h4>If you want about fitness and want to know how to be fit then visit our conference.</h4>
            <h5>To Represent Our Country in a different method</h5>
            <h5>Here we presenting world best fitness trainer for you.</h5>
            <span><Card.Body></Card.Body></span>
            <h2>Maximum Total Budget is $ 12,000,00 !!</h2>



        </div>
    );
};

export default Header;