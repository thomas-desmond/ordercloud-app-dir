'use client'
import { Stack, Text, createStyles } from '@mantine/core';
import Image from 'next/image'
import styles from './ProductCard.module.css'

export default function ProductCard({product, color} : any) {
    const { classes } = useStyles();
    if(!color) { color = 'white'}

    return (
        <div className={styles.imageContainer}
            style={{ backgroundColor: color }}>
            <div className={classes.productName}>
                <Stack>
                    <Text className={classes.productNameText} fz="xl">{product.Name} <br></br> $Fake Data$</Text>
                </Stack>
            </div>
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