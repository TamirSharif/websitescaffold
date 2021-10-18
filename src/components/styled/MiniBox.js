/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import React from 'react'

export default function MiniBox(props) {
    return (
        <div tw="bg-purple-300 h-screen flex items-center justify-center">
            <div tw="bg-white border border-gray-400 shadow-lg flex flex-col items-center p-10 rounded-md">
                {props.children}
            </div>
        </div>
    )
}
