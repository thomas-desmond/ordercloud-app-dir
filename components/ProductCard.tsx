'use client'
import { Container, Grid, Stack, createStyles } from '@mantine/core';
import Link from 'next/link'
import Image from 'next/image'




export default function ProductCard({ products }: any) {
    const { classes } = useStyles();

    console.log("Product", products);
    return (
        <Container my="md">
            <Grid gutter={0}>
                <Grid.Col xs={8}>
                    <div className={classes.productCard}>
                        <Image
                            src="/black_hat_1.png"
                            alt="Picture of the author"
                            width={500}
                            height={500}
                            className={classes.image1}
                        />
                    </div>

                </Grid.Col>
                <Grid.Col xs={4}>
                    <Stack>
                        <Image
                            src="/bomber_jacket_1.png"
                            alt="Picture of the author"
                            width={500}
                            height={500}
                            className={classes.image2}

                        />
                        <Image
                            src="/champion_jacket_1.png"
                            alt="Picture of the author"
                            width={500}
                            height={500}
                            className={classes.image3}
                        />
                    </Stack>
                </Grid.Col>

            </Grid>
        </Container>
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
        // display: "flex",
        // alignItems: "center",
        // justifyContent: "center"
    },
    gridColumn: {

    },
}));