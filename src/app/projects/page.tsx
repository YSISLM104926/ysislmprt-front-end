
"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { IconCheckbox, IconFiles, IconBallpen, IconSettings, IconChevronRight, IconChevronLeft } from "@tabler/icons-react";
import { Spotlight } from "../../../components/ui/Spotlight";
import { NavbarTwo } from "../../../components/ui/Navbar/NavbarTwo";
import { Projects } from "../../../components/ui/Projects/Projects";
import Link from "next/link";
import { ProjectAll } from "../../../components/ui/ProjectAll/ProjectAll";
const Home = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetchData(currentPage);
    }, [currentPage]);

    const fetchData = async (page: number) => {
        try {
            const response = await fetch(`http://localhost:5000/api/data?page=${page}`);
            if (response.ok) {
                const result = await response.json();
                setData(result.data);
                setTotalPages(result.totalPages);
            } else {
                console.error('Failed to fetch data');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handlePrevClick = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };


    return (
        <>
            <div className="h-[2200px] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.04] bg-grid-black/[0.04] relative flex  justify-center">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <div className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
                    <NavbarTwo />
                    <div className="">
                        <Spotlight
                            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                            fill="white"
                        />
                        <Spotlight
                            className="top-10 left-full h-[80vh] 
              w-[50vw]"
                            fill="purple"
                        />
                        <Spotlight
                            className="top-28 left-80 h-[80vh] w-[50vw]"
                            fill="blue"
                        />
                        <motion.div id="projects"
                            initial={{ opacity: 0.0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                            className="flex flex-col mx-auto px-4 w-full"
                        >
                            <div className="flex">
                                <IconFiles className="size-10 text-white me-2" />
                                <h1 className="text-4xl font-bold text-white mb-9">projects</h1>
                            </div>
                            <ProjectAll data={data}/>
                        </motion.div>
                        <div
                            className="flex gap-4 mt-10 mb-10 text-center justify-center">

                            <Link href={``} className="btn  hover:cursor-pointer" onClick={handlePrevClick} >
                                <IconChevronLeft />
                            </Link>
                            <button className="btn font-bold" disabled>{currentPage}</button>
                            <Link href={``} className="btn  btn-glass hover:cursor-pointer" onClick={handleNextClick}>
                                <IconChevronRight />
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </>


    );
}

export default Home

