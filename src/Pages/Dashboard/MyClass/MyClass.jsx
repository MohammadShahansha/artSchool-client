import React, { useState } from 'react';
import useClass from '../../../Hooks/useClass';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { Zoom } from 'react-awesome-reveal';
import axios from 'axios';

const MyClass = () => {
    const [selectedClass, refetch] = useClass();
    console.log(selectedClass)
    const totalPrice = selectedClass.reduce((sum, eachItem) => parseInt(eachItem.price) + sum, 0);
    const [clientSecret, setClientSecret] = useState('')

    const handlePrice=async(price)=>{
        localStorage.setItem('price',price);
       const data=await axios.post('https://assignment-twelve-server-zeta.vercel.app/create-payment-intent',{price:price});
       localStorage.setItem('client',data.data.clientSecret)
   
    }

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
                fetch(`https://assignment-twelve-server-zeta.vercel.app/selectedclass/${item._id}`,{
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
              
            </div>
            <div>
                <div className="overflow-x-auto w-full">
                <Zoom delay={1000} duration={1000}>  <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>name</th>
                                <th>Price</th>
                                <th>Action</th>
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
                                            <Zoom delay={1000} duration={1000}> <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div></Zoom>
                                            </div>
                                            
                                        </div>
                                    </td>
                                     <td>{item.name}</td>
                                     <td>${item.price}</td>
                                    <td>
                                        <button onClick={()=> handelDelete(item)} className="btn bg-red-600 btn-sm text-white">Delete</button>
                                    </td>
                                    <td>
                                    <button onClick={()=>handlePrice(item.price)} className="btn btn-primary btn-sm"><Link to='/dashboard/payment'>Pay</Link></button>
                                    </td>
                                </tr>)
                            }


                        </tbody>


                    </table></Zoom>
                </div>
            </div>
        </div>
    );
};

export default MyClass;