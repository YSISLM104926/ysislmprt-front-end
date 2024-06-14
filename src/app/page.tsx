"use client";
import { Spotlight } from "../../components/ui/Spotlight";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { CpProblem } from '../../components/ui/Skills/CpProblem'
import { TypewriterEffectSmooth } from "../../components/ui/typewriter-effect";
import { ButtonOne } from "../../components/ui/Button/ButtonOne";
import { ButtonTwo } from "../../components/ui/Button/ButtonTwo";
import { IconCheckbox, IconFiles, IconBallpen, IconSettings } from "@tabler/icons-react";
import { Projects } from "../../components/ui/Projects/Projects";
import { ViewMoreBtn } from "../../components/ui/ViewMoreBtn/ViewMoreBtn";
import { Beams } from "../../components/ui/TracingBeam/TracingBeam";
import { ButtonThree } from "../../components/ui/Button/ButtonThree";
import { NavbarOne } from "../../components/ui/Navbar/NavbarOne";
import Image from "next/image";
import { HoverBorderGradient } from "../../components/ui/hover-border-gradient";
import { ResumeButton } from "../../components/ui/Button/ResumeButton";
import { useSuperUserQuery } from "@/redux/features/SuperUser";
import { ProgressBar } from 'primereact/progressbar';
import profile from '../../assets/pictures/profile_two.jpg';
import Link from "next/link";
const Home = () => {

  const words = [
    {
      text: "A junior ",
      className: "font-normal "
    },
    {
      text: "NextJS /",
      className: "font-normal font-bold"
    },
    {
      text: "ReactJS",
      className: "font-normal font-bold"
    },
    {
      text: " developer",
      className: "font-normal"
    }
  ];
  const { data : skillData, isLoading } = useSuperUserQuery(null);
  if (isLoading) {
    return <ProgressBar mode="indeterminate" style={{ height: '6px' }}></ProgressBar>
  }
  console.log(skillData);
  return (
    <>

      <div className=" dark:bg-black bg-white  dark:bg-grid-white/[0.04] bg-grid-black/[0.04] border-b border-transparent relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="[mask-image:linear-gradient(to_bottom,white_5%,transparent_20%)] pointer-events-none select-none"></div>
        <div className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          <span className="relative flex h-3 w-1/2 items-center">
            <span className="animate-ping absolute z-10 text-white inline-flex h-full w-3 
            rounded-full bg-sky-400 opacity-75">

            </span>
            <span className="relative text-sm text-white inline-flex rounded-full h-3 w-3 bg-sky-500">
            </span>
            <h1 className="text-sm text-white"> &nbsp;development mode: <span className="text-sm text-green-300">active</span></h1>
          </span>

          <NavbarOne />
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
            <motion.div id="home"
              initial={{ opacity: 0.0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="flex flex-col mx-auto px-4 mt-20"
            >
              <div className="avatar mb-4 ">
                <div className="w-[270px] mx-auto rounded-full ">
                  <Image src={profile} height={1200} width={1400} alt="" />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="block">
                  <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
                    Hi, Im Md. Likhon Mia <br />

                  </div>
                  <div className="font-extralight text-center text-base md:text-4xl dark:text-neutral-200
                   flex justify-center
                  ">
                    <TypewriterEffectSmooth words={words} />
                  </div>
                </div>
              </div>

            </motion.div>
            <motion.div id="resume"
              initial={{ opacity: 0.0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="flex flex-col mx-auto mt-[-30px] mb-10 justify-center"
            >

              <div className="flex justify-center text-center mt-6">
                <HoverBorderGradient>
                  <ResumeButton />
                </HoverBorderGradient>
              </div>

            </motion.div>
            <motion.div id="skills"
              initial={{ opacity: 0.0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="flex flex-col mx-auto px-4 mb-15"
            >
              <div className="flex ">

                <IconCheckbox className="size-10 text-white me-2" />
                <h1 className="text-4xl font-bold text-white mb-9">skills</h1>

              </div>
              <ButtonOne />
              <ButtonTwo />
              <ButtonThree />
            </motion.div>

            <motion.div id="projects"
              initial={{ opacity: 0.0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="flex flex-col mx-auto px-4"
            >
              <div className="flex">
                <IconFiles className="size-10 text-white me-2" />
                <h1 className="text-4xl font-bold text-white mb-9">projects</h1>
              </div>
              <Projects data={skillData} />
              <Link href={``}><ViewMoreBtn /></Link>
            </motion.div>
            <motion.div id="education"
              initial={{ opacity: 0.0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="flex mx-auto flex-col px-4"
            >
              <div className="flex mt-20">
                <IconBallpen className="size-10 text-white me-2" />
                <h1 className="text-4xl font-bold text-white mb-9">education</h1>
              </div>
              <Beams />
            </motion.div>
            <motion.div id="cp"
              initial={{ opacity: 0.0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="flex mx-auto flex-col px-4"
            >
              <div className="flex mt-20">
                <IconSettings className="size-10 text-white me-2" />
                <h1 className="text-4xl font-bold text-white mb-9">cp site list w/ problem solving stats</h1>
              </div>
              <CpProblem />
            </motion.div>
            <motion.div id="socials"
              initial={{ opacity: 0.0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="flex mx-auto flex-col px-4"
            >
              <footer className="mt-20 footer items-center bg-neutral text-neutral-content row-span-1  rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:backdrop-blur-sm bg-white/5 dark:border-white/[0.2]  border border-transparent justify-between flex flex-col">
                <aside className="items-center grid-flow-col">
                  <p>Copyright ©Md. Likhon Mia 2024 - All right reserved</p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                  <a href="https://x.com/likhon_15"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                  </a>
                  <a href="https://www.youtube.com/channel/UCsC6abIc7dNHL63CHsa4YTw"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                  <a href="https://www.facebook.com/profile.php?id=61558526511758"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                </nav>
              </footer>
            </motion.div>
          </div>
        </div>
      </div>
    </>


  );
}

export default Home
