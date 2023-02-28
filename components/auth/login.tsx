'use client'
import { setCookie } from 'cookies-next';
import { Button } from '@mantine/core';
import { showNotification } from '@mantine/notifications';


export default function Login() {

    async function loginBuyerA() {
        const data = await fetch("/api/buyerAToken");
        const token = await data.json();
        setCookie('buyerToken', token.result)
        showNotification({
            title: 'Success',
            message: 'Logged in Buyer Gold Tier',
        })
    }

    async function loginBuyerB() {
        const data = await fetch("/api/buyerBToken");
        const token = await data.json();
        setCookie('buyerToken', token.result)
        showNotification({
            title: 'Success',
            message: 'Logged in Buyer Silver Tier',
        })
    }

    return (
        <>
            <Button style={{ margin: '1rem' }} onClick={loginBuyerA}>Login Buyer Gold Tier</Button>
            <Button onClick={loginBuyerB}>Login Buyer Silver Tier</Button>
        </>
    )
}