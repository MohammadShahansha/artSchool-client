import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { Zoom } from 'react-awesome-reveal';

const AddClass = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        const { email, image, instructorName, name, price, seats, status } = data;
        if (user && user.email) {
            // console.log(classe)
            const savedClass = { email, image, instructorName, name, price, seats, status}
            fetch('http://localhost:5000/addedclass', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(savedClass)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire('Successfully Added')
                    }
                })
        }
    };
    console.log(errors);
    return (
        <div className='w-full ms-10 rounded-md'>
            <Zoom delay={1000} duration={1000}>
            <div className=" bg-base-200 px-10 rounded-md my-10">
                <h2 className='text-5xl font-semibold text-center mb-5'>Add Class</h2>
                <form onSubmit={handleSubmit(onSubmit)} className='mb-5'>
                    <div className="flex gap-5">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Class Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} placeholder="Class Name" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Class Image</span>
                            </label>
                            {/* <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " /> */}

                            <input type="text" {...register("image", { required: true })} placeholder="image" className="input input-bordered w-full" />

                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Instructor Name</span>
                            </label>
                            <input type="text" defaultValue={user?.displayName} {...register("instructorName", { required: true })} placeholder="Instructor Name" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Instructor Email</span>
                            </label>
                            <input type="email" defaultValue={user?.email} {...register("email", { required: true })} placeholder="Instructor email" className="input input-bordered w-full" />

                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Available Seats</span>
                            </label>
                            <input type="number" {...register("seats", { required: true })} placeholder="Available Seats" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" {...register("price", { required: true })} placeholder="Price" className="input input-bordered w-full" />

                        </div>

                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Status</span>
                        </label>
                        <input type="text"{...register("status", { required: true })} placeholder="Status feild value is pending" className="input input-bordered w-full" />

                    </div>
                    <div className='text-center my-5 pb-5'>
                        <input className='btn btn-primary text-center' type="submit" value="Add Class" />
                    </div>
                </form>
            </div>
            </Zoom>
        </div>

    );
};

export default AddClass;