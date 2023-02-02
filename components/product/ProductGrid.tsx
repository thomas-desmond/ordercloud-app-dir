'use client'
import { Grid, Stack, Text, createStyles } from '@mantine/core';
import Image from 'next/image'
import styles from './ProductGrid.module.css'
import Marquee from "react-fast-marquee";




export default function ProductGrid({ products }: any) {
    const { classes } = useStyles();

    console.log("Product", products);
    return (
        <>
            <Grid gutter={0}>
                <Grid.Col md={8}>
                    <div className={styles.imageContainer}
                        style={{ backgroundColor: 'purple' }}>
                        <div className={classes.productName}>
                            <Stack>
                                <Text className={classes.productNameSpan} fz="xl">Bomber Jacket <br></br> 99.99 USB</Text>
                            </Stack>
                        </div>
                        <Image
                            src="/black_hat_1.png"
                            alt="Picture of the author"
                            fill
                            className={styles.image}
                        />
                    </div>
                </Grid.Col>
                <Grid.Col md={4}>
                    <div>
                        <div className={styles.imageContainer}
                            style={{ backgroundColor: 'white' }}>
                            <Image
                                src="/bomber_jacket_1.png"
                                alt="Picture of the author"
                                fill
                                className={styles.image}
                            />
                        </div>
                        <div className={styles.imageContainer}
                            style={{ backgroundColor: 'pink' }}>
                            <Image
                                src="/champion_jacket_1.png"
                                alt="Picture of the author"
                                fill
                                className={styles.image}
                            />
                        </div>
                    </div>
                </Grid.Col>
            </Grid>
            <Marquee gradient={false}>
                <Image
                    src="/black_hat_1.png"
                    alt="Picture of the author"
                    width={350}
                    height={350}
                />
                <Image
                    src="/bomber_jacket_1.png"
                    alt="Picture of the author"
                    width={350}
                    height={350}
                />
                <Image
                    src="/champion_jacket_1.png"
                    alt="Picture of the author"
                    width={350}
                    height={350}
                />
                <Image
                    src="/black_hat_1.png"
                    alt="Picture of the author"
                    width={350}
                    height={350}
                />
                <Image
                    src="/bomber_jacket_1.png"
                    alt="Picture of the author"
                    width={350}
                    height={350}
                />
                <Image
                    src="/champion_jacket_1.png"
                    alt="Picture of the author"
                    width={350}
                    height={350}
                />
            </Marquee>
        </>
    );
}


const useStyles = createStyles((theme) => ({
    image1: {
        backgroundColor: "purple",
    },

    image2: {
        backgroundColor: "white"
    },
    image3: {
        backgroundColor: "pink"
    },
    productCard: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },
    gridColumn: {

    },
    stackProducts: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    productName: {
        position: "absolute",
        display: "flex",
        justifyContent: 'start',
    },
    productNameSpan: {
        position: "absolute",
        backgroundColor: 'black',
        padding: '1rem',
    }
}));