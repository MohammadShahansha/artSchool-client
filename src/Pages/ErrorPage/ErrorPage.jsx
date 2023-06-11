import React from 'react';
import errorImg from '../../assets/Home/error.jpg'
import { Link } from 'react-router-dom';
import { FaArrowCircleLeft } from 'react-icons/fa';

const ErrorPage = () => {
    return (
        <div className='text-center mt-10'>
            <button className='btn'><Link to="/"><FaArrowCircleLeft></FaArrowCircleLeft> Go Home</Link></button>
            <div className='flex justify-center'>
                <img className=' w-[700px] h-[700px]' src={errorImg} alt="" />
            </div>

        </div>
    );
};

export default ErrorPage;