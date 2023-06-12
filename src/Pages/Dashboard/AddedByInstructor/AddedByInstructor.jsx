import React, { useEffect, useState } from 'react';
import { Fade, Zoom } from 'react-awesome-reveal';

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
    // console.log(getClass)d
    return (
        <div>
            <h2 className='text-5xl text-center font-semibold my-5'>My Class</h2>
            <div className='grid md:grid-cols-2 gap-5'>
                {
                    getClass.map(item => <div key={item._id}>
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><Zoom delay={1000} duration={1000} direction='up'><img src={item.image} alt="Art image" /></Zoom></figure>
                            <div className="card-body">
                                <h2 className="card-title">{item.name}</h2>
                              <Fade cascade damping={0.1}> <p>Instructor: {item.instructorName}</p>
                                <p>Price:${item.price}</p>
                                <p>Status:{item.status}</p>
                                <p>Feedbace: Too more need to Learn</p>
                                <div className='text-end'>
                                    <button className='btn btn-primary btn-md'>Update</button>
                                </div>
                                </Fade> 
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default AddedByInstructor;