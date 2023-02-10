'use client'
import { Product } from '@/interface/Product';
import { Grid } from '@mantine/core';
import ProductCard from './ProductCard';
import ProductNameAndPrice from './ProductNameAndPrice';

type ProductProps = {
    products: Product[]
    priceSchedule: Product[]
}

export default function ProductGrid({ products, priceSchedule }: ProductProps) {
    return (
        <>
            <Grid gutter={0}>
                <Grid.Col md={8}>
                    <ProductCard product={products[0]} size="big" color="purple">
                        <ProductNameAndPrice product={priceSchedule[0]} />
                    </ProductCard>
                </Grid.Col>
                <Grid.Col md={4}>
                    <div>
                        <ProductCard product={products[1]} size="small" color='white'>
                            <ProductNameAndPrice product={priceSchedule[1]}/>
                        </ProductCard>
                        <ProductCard product={products[2]} size="small" color='pink'>
                            <ProductNameAndPrice product={priceSchedule[2]} />
                        </ProductCard>
                    </div>
                </Grid.Col>
            </Grid>

        </>
    );
}
