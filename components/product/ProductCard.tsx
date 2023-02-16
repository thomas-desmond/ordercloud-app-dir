'use client'
import { Product } from '@/interface/Product';
import Image from 'next/image'
import styles from './ProductCard.module.css'

type ProductCardProps = {
    product: Product,
    color: string,
    size: string
    children: any
}

export default function ProductCard({ product, color, size, children }: ProductCardProps) {
    if (!color) { color = 'white' }

    return (
        <div className={styles.imageContainer}
            style={{ backgroundColor: color }}>
            {children}
            <Image
                src={product.xp.Images[0].url}
                alt="Picture of the author"
                fill
                className={`${size == 'small' ? styles.imageSmall : styles.image}`}
            />
        </div>
    );
}