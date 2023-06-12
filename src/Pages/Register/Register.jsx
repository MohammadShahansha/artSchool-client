import React, { useContext } from 'react';
import registerImg from '../../assets/Home/registration.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Register = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, userProfile } = useContext(AuthContext)
    
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const userCreated = result.user;
                console.log(userCreated);
                userProfile(data.name, data.photoURL)
                    .then(() => {
                        const savedUser = {name: data.name, email: data.email, image: data.photoURL}
                        fetch('https://assignment-twelve-server-zeta.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(savedUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset()
                                    Swal.fire('Registration Successfull')
                                    navigate('/')
                                }
                            })

                    })

            })
    };

    
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">

                <div className="hero-content grid md:grid-cols-2">
                    <div className="text-center lg:text-left">
                        <img src={registerImg} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h2 className='text-center text-3xl font-semibold mt-3'>Please Register</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name='name' placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className='text-red-500'>This field is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                                {errors.email && <span className='text-red-500'>This field is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true, minLength: 6, pattern: /(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/ })} name='password' placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'require' && <span className='text-red-500'>Passwored is required</span>}
                                {errors.password?.type === 'minLength' && <span className='text-red-500'>passworde must be 6 cherecter</span>}
                                {errors.password?.type === 'pattern' && <span className='text-red-500'>Must be at least one digit, one uppercase and lowerCase and one Special cherecter</span>}
                            </div>
                            {/* <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            </div> */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photo' {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className='text-red-500'>This field is required</span>}
                            </div>

                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Register" />
                                <p className='text-center'><span>Already have an Account?</span><Link to="/login" className='text-blue-500 underline'>Login</Link></p>
                            </div>
                            
                        </form>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;