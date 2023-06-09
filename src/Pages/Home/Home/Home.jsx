import React from 'react';
import Slider from '../Slider/Slider';
import PopulerClass from '../PopulerClass/PopulerClass';
import PopulerInstructor from '../PopulerInstructor/PopulerInstructor';

const Home = () => {
    return (
        <div>
            <h2>this is my home component</h2>
            <Slider></Slider>
            <PopulerClass></PopulerClass>
            <PopulerInstructor></PopulerInstructor>
        </div>
    );
};

export default Home;