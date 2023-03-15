import { Product } from '@/interface/Product';
import ProductCard from './ProductCard';
import ProductNameAndPrice from './ProductNameAndPrice';
import styles from './ProductGrid.module.css'
import { cookies } from 'next/headers';

type ProductProps = {
    products: Product[]
    priceSchedule: Product[]
}

async function getProductPrices(buyerToken: any): Promise<any> {
    const headerOptions = {
        Authorization: `Bearer ${buyerToken}`,
        ContentType: 'application/json',
    }

    const response = await fetch(`https://sandboxapi.ordercloud.io/v1/me/products`,
        { cache: 'no-store', method: 'GET', headers: headerOptions });

    if (!response.ok) {
        console.log("Unable to fetch prices, likely invalid token");
        return;
    }
    return await response.json();
}

export default async function ProductGrid({ products }: ProductProps) {
    const cookieStore = cookies();
    const buyerToken = cookieStore.get('buyerToken')?.value;

    let productsWithPrices = await getProductPrices(buyerToken);

    return (
        <div className={styles.gridWrapper}>
            <div>
                <ProductCard product={products[0]} size="big" color="purple">
                    <ProductNameAndPrice product={productsWithPrices.Items[0]} />
                </ProductCard>
            </div>
            <div>
                <ProductCard product={products[1]} size="small" color='white'>
                    <ProductNameAndPrice product={productsWithPrices.Items[1]} />
                </ProductCard>

                <ProductCard product={products[2]} size="small" color='pink'>
                    <ProductNameAndPrice product={productsWithPrices.Items[2]} />
                </ProductCard>
            </div>
        </div>
    );
}
