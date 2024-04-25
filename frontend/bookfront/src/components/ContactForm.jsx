import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

const ContactForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)
    // Function to check if any of the fields are empty
    const isAnyFieldEmpty = () => {
        return Object.keys(errors).some(field => errors[field])
    }


    return (
        <div><div className='flex h-screen items-center justify-center'>

            <div className="w-[600px] ">
                <div className="modal-box  dark:bg-slate-900 dark:text-white">
                    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                        {/* if there is a button in form, it will close the modal */}
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>



                        <h3 className="font-bold text-lg">
                            Contact Us
                            
                         
                            </h3>

                                {/* Display single error message if any field is empty */}
                        {isAnyFieldEmpty() && (
                            <span className="text-red-500 ml-40 text-sm top-0 right-0  ">
                                All fields are required *
                            </span>
                        )}

                       

                        {/* Name */}
                        <div className='mt-4 space-y-2'>
                            <span className='px-4'>Name</span>



                            <br />
                            <input
                                type="text"
                                placeholder='Enter your name'
                                className='w-80 px-3 py-1 border rounded-md outline-none'
                                {...register("name", { required: true })}
                            />
                            <br />
                            {/* {errors.name && (
                                <span className='text-sm text-red-500'>
                                    All fields are required</span>)} */}

                        </div>
                        {/* email */}
                        <div className='mt-4 space-y-2'>
                            <span>Email</span>
                            <br />
                            <input
                                type="email"
                                placeholder='Enter your email'
                                className=' w-80 px-3 py-1 border rounded-md outline-none'
                                {...register("email", { required: true })}
                            />
                            <br />
                            {/* {errors.email && (
                                <span className='text-sm text-red-500'>
                                </span>)} */}
                        </div>
                        {/*  password*/}

                        <div className='mt-4 space-y-2'>
                            <span>Message</span>
                            <br />
                            <textarea
                                rows="4"
                                type="text"
                                placeholder='Enter message'
                                className='w-80 px-3 py-1 border rounded-md outline-none'
                                {...register("text", { required: true })}
                            />
                            <br />
                            {/* {errors.email && (
                                <span className='text-sm text-red-500'>
                                </span>)} */}
                        </div>

                        {/* button */}
                        <div className='flex justify-between mt-4'>
                            <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Submit</button>

                        </div>


                    </form>
                </div>
            </div>

        </div>
        </div>
    )
}

export default ContactForm