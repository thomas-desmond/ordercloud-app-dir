'use client'
import { Product, ProductList } from '@/interface/Product';
import { Grid, createStyles } from '@mantine/core';
import ProductCard from './ProductCard';

type ProductProps = {
    products: Product[]
}

export default function ProductGrid({ products }: ProductProps) {
    const { classes } = useStyles();
    console.log("OSDF", products[0])

    return (
        <>
            <Grid gutter={0}>
                <Grid.Col md={8}>
                    <ProductCard product={products[0]} color="purple" />
                </Grid.Col>
                <Grid.Col md={4}>
                    <div>
                        <ProductCard product={products[1]} color='white' />
                        <ProductCard product={products[2]} color='pink' />
                    </div>
                </Grid.Col>
            </Grid>

        </>
    );
}


const useStyles = createStyles((theme) => ({

}));