import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

const AddClass = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className='w-full ms-10 rounded-md'>
            <div className=" bg-base-200 px-10 rounded-md my-10">
                <h2 className='text-5xl font-semibold text-center mb-5'>Add Class</h2>
                <form className='mb-5'>
                    <div className="flex gap-5">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Class Name</span>
                            </label>
                            <input type="text" placeholder="Class Name" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Class Image</span>
                            </label>
                            <input type="file" className="file-input file-input-bordered w-full " />
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Instructor Name</span>
                            </label>
                            <input type="text" placeholder="Instructor Name" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Instructor Email</span>
                            </label>
                            <input type="email" placeholder="Instructor email" className="input input-bordered w-full" />

                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Available Seats</span>
                            </label>
                            <input type="number" placeholder="Available Seats" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" placeholder="Price" className="input input-bordered w-full" />

                        </div>

                    </div>
                    <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Status</span>
                            </label>
                            <input type="text" placeholder="Status" className="input input-bordered w-full" />

                      </div>
                    <div className='text-center my-5 pb-5'>
                    <input className='btn btn-primary text-center' type="submit" value="Add Class" />
                    </div>
                </form>
            </div>
        </div>

    );
};

export default AddClass;