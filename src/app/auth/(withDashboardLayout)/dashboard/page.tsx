"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
interface skTypes {
    _id: string;
    title: string;
    tags: string;
    img: string;
    link: string;
}
const ShowSkills = () => {
    const router = useRouter();
    const fetchSkills = async () => {
        const res = await fetch('https://ysbackend.vercel.app/superuser/admin/skills', {
            next: {
                revalidate: 5
            }
        });
        return res.json();
    }


    const [skills, setSkills] = useState<skTypes[]>([]);

    useEffect(() => {
        const getSkills = async () => {
            const skillsData = await fetchSkills();
            setSkills(skillsData);
        };

        getSkills();
    }, []);
    const handleSkillDelete = async(id : string) => {
         const res = await fetch(`https://ysbackend.vercel.app/superuser/delete-skills/${id}`,{
            method : 'DELETE'
         })
         router.push('/auth/superuser/chichinga/dashboard');
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-white'>
                            <th>Name</th>
                            <th>Tags</th>
                            <th>Update</th>
                            <th>Delete</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            skills.map((sk: any) => (
                                <tr key={sk._id}>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <Image height={200} width={200} src={sk.img} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold dark:text-white">{sk.title}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='dark:text-white'>
                                        {sk.tags}
                                    </td>
                                    <td>
                                        <button className='btn btn-success  text-white'>update</button>
                                    </td>
                                    <th>
                                        <button onClick={()=>handleSkillDelete(sk._id)} className="btn btn-error  text-white">delete</button>
                                    </th>
                                </tr>
                            ))
                        }

                    </tbody>
                    {/* foot */}
                </table>
            </div>
        </div>
    )
}

export default ShowSkills