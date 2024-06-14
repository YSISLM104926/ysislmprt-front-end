"use client";
import React from "react";
import reactElementToJSXString from "react-element-to-jsx-string";
import { ButtonsCard } from "../tailwindcss-buttons";

export function ButtonOne() {
    return (
        <div className="mb-2">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 lg:grid-cols-12">
                {buttons.map((button, idx) => (
                    <ButtonsCard key={idx} className="">
                        {button.component}
                    </ButtonsCard>
                ))}
            </div>
        </div>
    );
}
export const buttons = [
    {
        component: (
            <button className="text-white flex text-sm rounded-md font-semibold">
                Html
            </button>
        ),
    }
    ,
    {
        component: (
            <button className="text-white flex text-sm rounded-md font-semibold py-5 px-5">
                VanillaCss
            </button>
        ),
    },
    {
        component: (
            <button className="text-white flex text-sm rounded-md font-semibold py-5 px-5">
                JavaScript
            </button>
        ),
    },
    {
        component: (
            <button className="text-white flex text-sm rounded-md font-semibold py-5 px-5">
                TypeScript
            </button>
        ),
    },
    {
        component: (
            <button className="text-white flex text-sm rounded-md font-semibold py-5 px-5">
                Bootstrap
            </button>
        ),
    },
    {
        component: (
            <button className="text-white flex text-sm rounded-md font-semibold py-5 px-5">
                TailwindCSS
            </button>
        ),
    },
    {
        component: (
            <button className="text-white flex text-sm rounded-md font-semibold py-5 px-5">
                AntDeign
            </button>
        ),
    },
    {
        component: (
            <button className=" text-white flex text-sm rounded-md font-semibold py-5 px-5">
                ReactJS
            </button>
        ),
    },
    {
        component: (
            <button className=" text-white flex text-sm rounded-md font-semibold py-5 px-5">
                NextJS
            </button>
        ),
    },
    {
        component: (
            <button className=" text-white flex text-sm rounded-md font-semibold py-5 px-5">
                JWT
            </button>
        ),
    },
    {
        component: (
            <button className=" text-white flex text-sm rounded-md font-semibold py-5 px-5">
                DaisyUI
            </button>
        ),
    },
    {
        component: (
            <button className=" text-white flex text-sm rounded-md font-semibold py-5 px-5">
                Shadcn
            </button>
        ),
    }
];
