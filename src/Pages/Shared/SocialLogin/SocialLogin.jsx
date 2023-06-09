import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handelGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const logByGoogle = result.user;
                console.log(logByGoogle)
                const savedUser = { name: logByGoogle.displayName, email: logByGoogle.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })

            })
    }
    return (
        <div className='mb-3'>
            <div className="divider"></div>
            <div className='text-center'>
                <button onClick={handelGoogleSignIn} className="btn btn-circle btn-outline text-center">
                    <FaGoogle></FaGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;