'use client'

import { setCookie } from 'cookies-next';
import Router from 'next/router';


export default function Login() {

    async function loginBuyerA() {
        const data = await fetch("/api/buyerAToken");
        const token =  await data.json();
        setCookie('token', token.result)
        Router.reload();
    }
    
    async function loginBuyerB() {
        const data = await fetch("/api/buyerBToken");
        const token =  await data.json();
        setCookie('token', token.result)    
    }

    return (
        <>
            <button onClick={loginBuyerA}>Login Buyer A</button>
            <button onClick={loginBuyerB}>Login Buyer B</button>
        </>
    )
}