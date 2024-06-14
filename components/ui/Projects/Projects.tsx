import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { BentoGrid } from "../bento-grid";
interface skType {
    _id: string;
    title: string;
    tags: string;
    img: string;
    link: string;
}

export const Projects = ({ data }: { data : any }) => {
  console.log(data);
  return (
    <BentoGrid className="max-w-6xl flex flex-col lg:flex-row">
      {data?.map((sk: skType ) => (
        <ProjectCard sk={sk} key={sk._id} />
      ))}
    </BentoGrid>
  );
};
