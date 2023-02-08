'use client'
import { Product } from '@/interface/Product';
import Image from 'next/image'
import styles from './ProductCard.module.css'
import ProductNameAndPrice from './ProductNameAndPrice';

type ProductCardProps = {
    product: Product,
    color: string
}

export default function ProductCard({ product, color }: ProductCardProps) {
    if (!color) { color = 'white' }
    console.log(product);

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