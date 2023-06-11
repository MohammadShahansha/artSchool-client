import React from 'react';
import img from '../../../assets/Home/zainul.jpg'

const ExtraSection = () => {
    return (
        <div className='mt-20'>
            <h2 className='text-5xl text-center font-semibold my-10'>Master of Art in Bangladesh</h2>
            <div className="card lg:card-side bg-base-100 shadow-xl p-3">
                <figure><img className='rounded-md' src={img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className='text-3xl text-center font-semibold'>Zinul Abedin</h2>
                    <h2 className='text-xl text-center font-semibold'>(29 December 1914 - 28 May 1976)</h2>
                    <p>Zainul Abedin also known as Shilpacharya (Master of Art) was a prominent Bangladeshi painter.</p>
                    <p>He is often referred to as the "Father of Bangladeshi Art" due to his significant contributions to the development and promotion of art in the country. Abedin played a crucial role in shaping the art scene in Bangladesh and was a prominent figure in the movement to establish the Faculty of Fine Arts at the University of Dhaka.</p>
                    <p>Zainul Abedin's legacy continues to inspire and influence artists in Bangladesh and beyond. His artistic vision, commitment to social issues, and dedication to the development of art education have had a profound impact on the art community in Bangladesh, cementing his place as a legendary figure in Bangladeshi art history.</p>
                </div>
            </div>

        </div>
    );
};

export default ExtraSection;