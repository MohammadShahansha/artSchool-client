import React from 'react';
import useClass from '../../../Hooks/useClass';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MyClass = () => {
    const [selectedClass, refetch] = useClass();
    console.log(selectedClass)
    const totalPrice = selectedClass.reduce((sum, eachItem) => eachItem.price + sum, 0)

    const handelDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/selectedclass/${item._id}`,{
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0){
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            'Your data has been deleted.',
                            'success'
                          )
                    }
                    
                })
              
            }
          })
    }
    return (
        <div className='w-full'>
            <h2>my classes</h2>
            <div className='flex justify-evenly w-full text-2xl font-semibold mb-5'>
                <h2>Total Class: {selectedClass.length}</h2>
                <h2>Total Price: {totalPrice}</h2>
                <button className="btn btn-primary btn-sm"><Link to='/dashboard/payment'>Pay</Link></button>
              
            </div>
            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                selectedClass.map((item, index) => <tr
                                    key={item._id}
                                >
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </td>
                                    <td>{item.name}</td>
                                    <td>${item.price}</td>
                                    <th>
                                        <button onClick={()=> handelDelete(item)} className="btn bg-red-600 btn-sm text-white">Delete</button>
                                    </th>
                                </tr>)
                            }


                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyClass;