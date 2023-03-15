import { Product } from '@/interface/Product';
import ProductCard from './ProductCard';
import ProductNameAndPrice from './ProductNameAndPrice';
import styles from './ProductGrid.module.css'

type ProductProps = {
    products: Product[]
    priceSchedule: Product[]
}

export default function ProductGrid({ products, priceSchedule }: ProductProps) {
    return (
        <div className={styles.gridWrapper}>
            <div>
                <ProductCard product={products[0]} size="big" color="purple">
                    {priceSchedule &&
                        <ProductNameAndPrice product={priceSchedule[0]} />
                    }
                </ProductCard>
            </div>
            <div>
                <ProductCard product={products[1]} size="small" color='white'>
                    {priceSchedule &&
                        <ProductNameAndPrice product={priceSchedule[1]} />
                    }
                </ProductCard>

                <ProductCard product={products[2]} size="small" color='pink'>
                    {priceSchedule &&
                        <ProductNameAndPrice product={priceSchedule[2]} />
                    }
                </ProductCard>
            </div>
        </div>
    );
}
