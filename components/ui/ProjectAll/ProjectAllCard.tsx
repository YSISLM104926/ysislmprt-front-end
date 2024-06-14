"use client"
import { IconLink } from '@tabler/icons-react';
import Image from 'next/image'
import React from 'react'

interface skType {
    _id: string;
    title: string;
    tags: string;
    img: string;
    link: string;
}

const ProjectCard = ({ sk }: { sk: skType }) => {
    console.log(sk);
    const handleClick = (link : any) => {
        window.open(link, '_blank');
    }
    return (
        <div key={sk._id}>
            <div style={{
                height: "250px"
            }} className=" rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:backdrop-blur-sm bg-white/5 dark:border-white/[0.2] 
             border border-transparent justify-between flex flex-col space-y-4">

                <div className="overflow-hidden rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
                    <Image
                        src={sk.img}
                        alt=""
                        style={{width: "500px", height: "220px"}}
                        height={1200}
                        width={700}
                    />
                </div>
                <div onClick={() => handleClick(sk._id)} className="group-hover/bento:translate-x-2 transition duration-200">
                    <div className="font-sans flex items-center gap-1 text-sm font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
                        {sk.title} <IconLink onClick={()=>handleClick(sk?.link)} className='size-4 hover:cursor-pointer'/>
                    </div>
                    <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
                        {sk.tags.substring(0,20) + '.......'}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard