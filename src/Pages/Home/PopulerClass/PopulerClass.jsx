import React, { useEffect, useState } from 'react';

const PopulerClass = () => {
    const [populerclass, setPopulerClass] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:5000/classes')
        .then(res => res.json())
        .then(data => {
            setPopulerClass(data);
            setLoading(false)
        })
    },[])
    console.log(populerclass)
    return (
        <div className='grid grid-cols-3 gap-3'>
            {
                populerclass.map(classe => <div
                    key={classe._id}
                >
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
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
    );
};

export default PopulerClass;