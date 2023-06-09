import React, { useContext } from 'react';
import logImg from '../../assets/Home/login.jpg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { FaGoogle } from 'react-icons/fa';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';


const Login = () => {

    const { signin } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    const handelLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signin(email, password)
            .then(result => {
                const logedUser = result.user;
                console.log(logedUser)
                Swal.fire('Login successfull')
                navigate(from, {replace: true})
            })
    }

    
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">

                <div className="hero-content grid md:grid-cols-2">
                    <div className="text-center lg:text-left">
                        <img src={logImg} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h2 className='text-center text-3xl font-semibold mt-3'>Please Login</h2>
                        <form onSubmit={handelLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                                <p className='text-center'><span>Don't have an Account?</span><Link to="/register" className='text-blue-500 underline'>Register</Link></p>
                            </div>
                            <SocialLogin></SocialLogin>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;