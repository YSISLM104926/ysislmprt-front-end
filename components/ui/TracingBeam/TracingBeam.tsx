"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../../ui/tracing-beam";

export function Beams() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <h1 className={twMerge("text-4xl mb-4")}>
              {item.title}
            </h1>

            <div className="text-xl  prose prose-sm dark:prose-invert">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: (
        <>
        <div className="text-white">Daffodil International Univerity</div>
        </>
    ),
    description: (
      <>
        <h1 className="text-white">
            Name: Md. Likhon Mia <br />
            ID: 203-15-3916 <br />
            Section: 57_D <br />
            Department: Computer Science and Engineering <br />
            CGPA: 3.63 <br />
            Time: 2020 - 2024 
        </h1>
        
      </>
    ),
    badge: "Bsc in CSE",
  },
  {
    title: (
        <>
        <div className="text-white">Savar Model College</div>
        </>
    ),
    description: (
      <>
        <h1 className="text-white">
            Name: Md. Likhon Mia <br />
            Section: B <br />
            Subject: Science <br />
            GPA: 3.67 <br />
            Time: 2017 - 2019 
        </h1>
      </>
    ),
    badge: "HSC",
  },
  {
    title: (
        <>
        <div className="text-white">Bengunbari High School</div>
        </>
    ),
    description: (
      <>
        <h1 className="text-white">
            Name: Md. Likhon Mia <br />
            Subject: Science<br />
            GPA: 4.67 <br />
            Time: 2015 - 2017 
        </h1>
      </>
    ),
    badge: "SSC",
  },
  {
    title: (
        <>
        <div className="text-white">Begunbari High School</div>
        </>
    ),
    description: (
      <>
        <h1 className="text-white">
            Name: Md. Likhon Mia <br />
            General subjects  <br />
            GPA: 4.68 <br />
            Time: 2014 - 2015 
        </h1>
      </>
    ),
    badge: "JSC",
  },
  {
    title: (
        <>
        <div className="text-white">New Model Pre-Cadet and High School</div>
        </>
    ),
    description: (
      <>
        <h1 className="text-white">
            Name: Md. Likhon Mia <br />
            General Subjects <br />
            GPA: 3.57 <br />
            Time: 2011 - 2012 
        </h1>
      </>
    ),
    badge: "PSC",
  }
];
