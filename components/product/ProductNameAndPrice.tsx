'use client'
import { Stack, Text, createStyles } from '@mantine/core';
import { getCookie } from 'cookies-next';
import { useEffect, useState } from 'react';

export default function ProductNameAndPrice({ product }: any) {
    const [price, setPrice] = useState("");

    useEffect(() => {
        const token = getCookie('token');
        console.log("Token", token)
        const headerOptions = {
            Authorization: `Bearer ${token}`,
            ContentType: 'application/json'
        }
        const archiveRes = async () => {

            const fetched = await fetch(`https://sandboxapi.ordercloud.io/v1/me/products/${product.ID}`, { method: 'GET', headers: headerOptions })
            const data = await fetched.json();
            setPrice(data?.PriceSchedule?.PriceBreaks[0]?.Price);
        };
        archiveRes();
    }, []);

    const { classes } = useStyles();

    return (
        <div className={classes.productName}>
            <Stack>
                <Text className={classes.productNameText} fz="xl">{product.Name} <br></br> {price}</Text>
            </Stack>
        </div>
    );
}


const useStyles = createStyles(() => ({
    productName: {
        position: "absolute",
        display: "flex",
        justifyContent: 'start',
    },

    productNameText: {
        position: "absolute",
        backgroundColor: 'black',
        padding: '1rem',
    }
}));