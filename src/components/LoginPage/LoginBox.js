/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import React from 'react'
import MiniBox from "../styled/MiniBox";

export default function LoginBox(props) {
    const {signin} = props
    return (

            <MiniBox>
                <h1 tw="mb-10 text-2xl">Website Scaffold</h1>
                <button tw="p-2 border border-gray-300 bg-white flex shadow rounded-md" onClick={signin}>
                    <img
                        tw="pr-2"
                        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                    <p tw="text-base">Sign in with Google</p>
                </button>
            </MiniBox>

    )
}
