'use client'
import Image from 'next/image'
import styles from './ProductCard.module.css'
import ProductNameAndPrice from './ProductNameAndPrice';


export default function ProductCard({ product, color }: any) {
    if (!color) { color = 'white' }

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