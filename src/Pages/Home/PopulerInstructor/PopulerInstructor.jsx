import React, { useEffect, useState } from 'react';

const PopulerInstructor = () => {
    const [populerInstructor, setPopulerInstructor] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:5000/allinstructor')
        .then(res => res.json())
        .then(data => {
            setPopulerInstructor(data);
            setLoading(false)
        })
    },[])
    // console.log(populerInstructor)
    return (
        <div>
            <h2 className='text-5xl text-center font-semibold my-5'>Populer Instructor</h2>
            <div className='grid grid-cols-3 gap-3'>
            {
                populerInstructor.map(pi => <div
                    key={pi._id}
                >
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={pi.classImage} alt="Art Image" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{pi.name}</h2>
                            <p>Instructo: {pi.instructor}</p>
                            <p>Student: {pi.students}</p>
                            <p>Email: {pi.email}</p>
                           
                        </div>
                    </div>

                </div>)
            }
        </div>
        </div>
    );
};

export default PopulerInstructor;