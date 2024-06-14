"use client";

import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSuperUserLoginMutation } from '@/redux/features/SuperUserLogin';
import { toast } from 'sonner';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';

type Inputs = {
  username: string;
  password: string;
};

const SuperUserDashboard = () => {
  const [superUserLogin, { isLoading }] = useSuperUserLoginMutation();
  const router = useRouter();
  const { setTheme } = useTheme();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = await superUserLogin(data).unwrap();
      if (response.success) {
        toast.success('Login successful!');
        localStorage.setItem('accessToken', response.token);
        setTheme("dark");
        router.push('/auth/dashboard');
      } else {
        toast.error(response.message);
      }
    } catch (err) {
      toast.error('Failed to login');
      console.error(err);
    }
  };

  return (
    <div className="h-full w-full dark:bg-black bg-white dark:bg-grid-white/[0.04] bg-grid-black/[0.04] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        <div id="projects" className="flex flex-col mx-auto w-full">
          <div className='flex items-center justify-center h-screen flex-col'>
            <h1 className='text-3xl text-white mb-4'>Super User</h1>
            <div className='flex justify-center items-center'>
              {
                isLoading ?
                <span className="loading loading-dots loading-lg"></span>
                :
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="input input-bordered flex items-center gap-2 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70 text-black">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                      </svg>
                      <input
                        type="text"
                        {...register("username", { required: 'Username is required' })}
                        className="grow text-black"
                        placeholder="Username"
                      />
                    </label>
                    {errors.username && <span className='text-red-500 text-sm'>{errors.username.message}</span>}
                    <label className="input input-bordered flex items-center gap-2 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70 text-black">
                        <path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" />
                      </svg>
                      <input
                        type="password"
                        {...register('password', {
                          required: 'Password is required',
                          minLength: {
                            value: 8,
                            message: 'Password must be at least 8 characters long'
                          }
                        })}
                        className="grow text-black"
                        placeholder='Password'
                      />
                    </label>
                    {errors.password && <span className='text-red-500 text-sm'>{errors.password.message}</span>}
                    <input className='btn btn-primary w-full glass' type="submit" value="Login" />
                  </form>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperUserDashboard;
