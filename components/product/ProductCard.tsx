'use client'
import { Stack, Text, createStyles } from '@mantine/core';
import Image from 'next/image'
import styles from './ProductCard.module.css'
import useSWR from 'swr'
import ProductNameAndPrice from './ProductNameAndPrice';

const fetcher = (url: any) => fetch(url).then((res) => res.json());

export default function ProductCard({ product, color }: any) {
    const { classes } = useStyles();
    if (!color) { color = 'white' }

    const { data, error, isLoading } = useSWR('https://dog.ceo/api/breeds/image/random', fetcher)
    if (isLoading) return "Loading...";
    if (error) return "ERROR";


    return (
        <div className={styles.imageContainer}
            style={{ backgroundColor: color }}>
            <ProductNameAndPrice product={product} />
            <Image
                src={product.xp.Images[0].url}
                alt="Picture of the author"
                fill
                className={styles.image}
            />
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