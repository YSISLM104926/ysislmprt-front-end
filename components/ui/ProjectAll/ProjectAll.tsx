import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectAllCard";
import { BentoGrid } from "../bento-grid";
interface skType {
    _id: string;
    title: string;
    tags: string;
    img: string;
    link: string;
}

export const ProjectAll = ({ data }: { data : any }) => {
  console.log(data);
  return (
    <BentoGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {data?.map((sk: skType ) => (
        <ProjectCard sk={sk} key={sk._id} />
      ))}
    </BentoGrid>
  );
};
