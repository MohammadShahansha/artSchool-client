import React, { useEffect, useState } from 'react';

const PopulerClass = () => {
    const [populerclass, setPopulerClass] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://assignment-twelve-server-zeta.vercel.app/classes')
        .then(res => res.json())
        .then(data => {
            setPopulerClass(data);
            setLoading(false)
        })
    },[])
    // console.log(populerclass)
    return (
        <div className='mb-20'>
            <h2 className='text-5xl text-center font-semibold my-5'>Populer Classes</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
            {
                populerclass.slice(0, 6).map(classe => <div
                    key={classe._id}
                >
                    <div className=" p-2 card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={classe.image} alt="Art Image" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{classe.name}</h2>
                            <p>Instructo: {classe.instructor}</p>
                            <p>Student: {classe.students}</p>
                            <p>Available seats: {classe.seatsAvailable}</p>
                            <p>Price: {classe.price}</p>
                            <div className="flex justify-end">
                                <button className="btn btn-primary">Select</button>
                            </div>
                        </div>
                    </div>

                </div>)
            }
        </div>
        </div>
    );
};

export default PopulerClass;