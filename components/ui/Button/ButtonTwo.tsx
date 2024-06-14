"use client";
import React from "react";
import reactElementToJSXString from "react-element-to-jsx-string";
import { ButtonsCard } from "../tailwindcss-buttons";

export function ButtonTwo() {
    return (
        <div className="mb-2">
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
            <button className=" text-white flex text-sm rounded-md font-semibold py-5 px-5">
                Java
            </button>
        ),
    },
    {
        component: (
            <button className="text-white flex text-sm rounded-md font-semibold py-5 px-5">
                ReactRouter
            </button>
        ),
    },
    {
        component: (
            <button className="text-white flex text-sm rounded-md font-semibold py-5 px-5">
                ReactQuery
            </button>
        ),
    },
    {
        component: (
            <button className="text-white flex text-sm rounded-md font-semibold py-5 px-5">
                NodeJS
            </button>
        ),
    },
    {
        component: (
            <button className="text-white flex text-sm rounded-md font-semibold py-5 px-5">
                MongoDB
            </button>
        ),
    },
    {
        component: (
            <button className="text-white flex text-sm rounded-md font-semibold py-5 px-5">
                ExpressJS
            </button>
        ),
    },
    {
        component: (
            <button className="text-white flex text-sm rounded-md font-semibold py-5 px-5">
                RestAPI
            </button>
        ),
    },
    {
        component: (
            <button className=" text-white flex text-sm rounded-md font-semibold py-5 px-5">
                Mui
            </button>
        ),
    },
    {
        component: (
            <button className=" text-white flex text-sm rounded-md font-semibold py-5 px-5">
                Redux
            </button>
        ),
    },
    {
        component: (
            <button className=" text-white flex text-sm rounded-md font-semibold py-5 px-5">
                Firebase
            </button>
        ),
    },{
        component: (
            <button className=" text-white flex text-sm rounded-md font-semibold py-5 px-5">
                Git
            </button>
        ),
    },{
        component: (
            <button className=" text-white flex text-sm rounded-md font-semibold py-5 px-5">
                MySql
            </button>
        ),
    }
];
