"use client";

import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import {toast} from 'sonner';

type Inputs = {
    _id : number;
    title: string;
    file: string;
    tags: string;
};

const AddBlogs = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const formData = new FormData();
        formData.append('image', data?.file[0]);
        try {
            const response = await axios.post(`https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMG_BB_API_KEY}`, formData);
            console.log(response);
            const url = response?.data?.data?.url;
            console.log(url);
            const AddBlogData = {
                blog_title: data?.title,
                blog_tags: data?.tags,
                blog_img: url,
            }
            await fetch('https://ysbackend.vercel.app/superuser/add-blogs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(AddBlogData)
            })
            .then(response => {
                if (response.ok) {
                    // Assuming you have a function to display a success toast
                    toast.success("Blog added successfully");
                } else {
                    // Assuming you have a function to display an error toast
                    toast.error("Failed to add blog");
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
           
        } catch (err) {
            toast.error('Failed to login');
            console.error(err);
        }
       
    };

    return (
        <div className="h-full w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
                <div id="projects" className="flex flex-col mx-auto w-full">
                    <div className='flex items-center justify-center h-screen flex-col'>
                        <h1 className='text-3xl text-white mb-4'>Add Skills</h1>
                        <div className='flex justify-center items-center'>
                            {


                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <label className="">

                                        <input
                                            type="text"
                                            {...register("title", { required: 'Username is required' })}
                                            className="grow text-black input input-bordered w-full mb-3"
                                            placeholder="Title"
                                        />
                                    </label>
                                    {errors.title && <span className='text-red-500 text-sm'>{errors.title.message}</span>}


                                    <label className="">
                                        <input type="file" {...register("file", { required: 'file is required' })} className="file-input file-input-bordered text-black w-full mb-3" />
                                    </label>
                                    {errors.file && <span className='text-red-500 text-sm'>{errors.file.message}</span>}

                                    <br />

                                    <label className="">
                                        <textarea {...register("tags", { required: 'tags is required' })} 
                                        className="text-black textarea textarea-bordered w-full mb-2" placeholder="description"></textarea>
                                    </label>
                                    {errors.tags && <span className='text-red-500 text-sm'>{errors.tags.message}</span>}
                                    
                                    <input className='btn btn-primary w-full glass' type="submit" value="Submit" />
                                </form>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBlogs;
