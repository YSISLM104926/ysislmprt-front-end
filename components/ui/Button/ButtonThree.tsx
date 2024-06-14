"use client";
import React from "react";
import reactElementToJSXString from "react-element-to-jsx-string";
import { ButtonsCard } from "../tailwindcss-buttons";

export function ButtonThree() {
    return (
        <div className="mb-10">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 lg:grid-cols-12">
                {buttons.map((button, idx) => (
                    <ButtonsCard key={idx}>
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
            <button className="text-white flex text-sm rounded-md font-semibold py-5 px-5">
                AndroidSt.
            </button>
        ),
    }
    ,
    {
        component: (
            <button className="text-white flex text-sm rounded-md font-semibold py-5 px-5">
                ReactNative
            </button>
        ),
    },
    {
        component: (
            <button className="text-white flex text-sm rounded-md font-semibold py-5 px-5">
                Axios
            </button>
        ),
    },
    {
        component: (
            <button className="text-white flex text-sm rounded-md font-semibold py-5 px-5">
                Figma
            </button>
        ),
    },
    {
        component: (
            <button className="text-white flex text-sm rounded-md font-semibold py-5 px-5">
                Netlify
            </button>
        ),
    },
    {
        component: (
            <button className="text-white flex text-sm rounded-md font-semibold py-5 px-5">
                Ubuntu
            </button>
        ),
    },
    {
        component: (
            <button className="text-white flex text-sm rounded-md font-semibold py-5 px-5">
                Vscode
            </button>
        ),
    },
    {
        component: (
            <button className=" text-white flex text-sm rounded-md font-semibold py-5 px-5">
                Postman
            </button>
        ),
    },
    {
        component: (
            <button className=" text-white flex text-sm rounded-md font-semibold py-5 px-5">
                Github
            </button>
        ),
    },
    {
        component: (
            <button className=" text-white flex text-sm rounded-md font-semibold py-5 px-5">
                php
            </button>
        ),
    },
    {
        component: (
            <button className=" text-white flex text-sm rounded-md font-semibold py-5 px-5">
                Python
            </button>
        ),
    },
    {
        component: (
            <button className=" text-white flex text-sm rounded-md font-semibold py-5 px-5">
                C++
            </button>
        ),
    }
];
