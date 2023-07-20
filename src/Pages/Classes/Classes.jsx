import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';


const Classes = () => {
    const {user} = useContext(AuthContext);
    // console.log(user.role)
    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        fetch('https://assignment-twelve-server-zeta.vercel.app/allclasses')
            .then(res => res.json())
            .then(data => {
                setClasses(data);
                setLoading(false)
            })
    }, [])

    // console.log(classes)
    const handelSelectedItem = classe => {
        const {email, image, instructor, name, price, seatsAvailable, students, _id} = classe
        if(user && user.email){
            // console.log(classe)
            const selectedItem = {selectedItemId: _id, image, instructor, name, price, seatsAvailable, students, email: user.email}
            fetch('https://assignment-twelve-server-zeta.vercel.app/selectedclass', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedItem)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    Swal.fire('Successfully Selected')
                }
            })
        }
        else{
            Swal.fire('Please Login to select!!')
            navigate('/login', {state: {from: location}})
        }
    }
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
            {
                classes.map(classe => <div
                    key={classe._id}
                >
                    <div className="card card-compact bg-base-100 shadow-xl">
                        <figure><img className='md:h-[300px]' src={classe.image} alt="Art Image" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{classe.name}</h2>
                            <p>Instructo: {classe.instructor}</p>
                            <p>Available seats: {classe.seatsAvailable}</p>
                            <p>Price: ${classe.price}</p>
                            <div className="flex justify-end">
                                <button disabled={ user?.role==='instructor' || user?.role === 'admin'} onClick={() => handelSelectedItem(classe)} className="btn btn-primary">Select</button>
                            </div>
                        </div>
                    </div>

                </div>)
            }
        </div>
    );
};

export default Classes;