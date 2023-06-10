import React, { useEffect, useState } from 'react';

const AddedByInstructor = () => {
    const [getClass, setGetClass] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:5000/addedclass')
            .then(res => res.json())
            .then(data => {
                setGetClass(data);
                setLoading(false)
            })
    }, [])
    console.log(getClass)
    return (
        <div>
            <h2 className='text-5xl text-center font-semibold my-5'>My Class</h2>
            <div className='grid md:grid-cols-2 gap-5'>
                {
                    getClass.map(item => <div key={item._id}>
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src={item.image} alt="Art image" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{item.name}</h2>
                                <p>Instructor: {item.instructorName}</p>
                                <p>Price:${item.price}</p>
                                <p>Status:{item.status}</p>
                                <p>Feedbace: Too more need to Learn</p>
                                
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default AddedByInstructor;