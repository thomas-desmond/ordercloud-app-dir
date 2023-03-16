import { Product } from '@/interface/Product';
import ProductCard from './ProductCard';
import ProductNameAndPrice from './ProductNameAndPrice';
import styles from './ProductGrid.module.css'
import { cookies } from 'next/headers';
import { Tokens, Me } from 'ordercloud-javascript-sdk';
import { Configuration } from 'ordercloud-javascript-sdk';

export const revalidate = 0;

type ProductProps = {
    products: Product[]
    priceSchedule: Product[]
}

async function getProductPrices(buyerToken: any): Promise<any> {
    Configuration.Set({
        baseApiUrl: 'https://sandboxapi.ordercloud.io',
    })

    let products = null;
    try {
        Tokens.SetAccessToken(buyerToken as string);
        products = await Me.ListProducts();
    }
    catch (e) {
        console.log(e)
    }

    return products;
}

export default async function ProductGrid({ products }: ProductProps) {
    const cookieStore = cookies();
    const buyerToken = cookieStore.get('buyerToken')?.value;

    let productsWithPrices = await getProductPrices(buyerToken);

    return (
        <div className={styles.gridWrapper}>
            <div>
                <ProductCard product={products[0]} size="big" color="purple">
                    {productsWithPrices &&
                        <ProductNameAndPrice product={productsWithPrices.Items[0]} />
                    }
                </ProductCard>
            </div>
            <div>
                <ProductCard product={products[1]} size="small" color='white'>
                    {productsWithPrices &&
                        <ProductNameAndPrice product={productsWithPrices.Items[1]} />
                    }
                </ProductCard>

                <ProductCard product={products[2]} size="small" color='pink'>
                    {productsWithPrices &&
                        <ProductNameAndPrice product={productsWithPrices.Items[2]} />
                    }
                </ProductCard>
            </div>
        </div>
    );
}
