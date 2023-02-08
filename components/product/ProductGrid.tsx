'use client'
import { Grid, createStyles } from '@mantine/core';
import ProductCard from './ProductCard';

export default function ProductGrid({ products }: any) {
    const { classes } = useStyles();

    return (
        <>
            <Grid gutter={0}>
                <Grid.Col md={8}>
                    <ProductCard product={products.Items[0]} color="purple" />
                </Grid.Col>
                <Grid.Col md={4}>
                    <div>
                        <ProductCard product={products.Items[1]} color='white' />
                        <ProductCard product={products.Items[2]} color='pink' />
                    </div>
                </Grid.Col>
            </Grid>

        </>
    );
}


const useStyles = createStyles((theme) => ({

}));