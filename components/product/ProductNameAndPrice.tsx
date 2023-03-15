import { Product } from '@/interface/Product';
import styles from './ProductNameAndPrice.module.css'
import { cookies } from 'next/headers';

type PriceScheduleProps = {
    product: Product
}

async function getProductPrices(buyerToken: any): Promise<any> {
    const headerOptions = buildHeader(buyerToken)

    const response = await fetch(`https://sandboxapi.ordercloud.io/v1/me/products`,
        { cache: 'no-store', method: 'GET', headers: headerOptions });

    if (!response.ok) {
        console.log("Unable to fetch prices, likely invalid token");
        return;
    }
    return await response.json();
}

function buildHeader(token: string) {
    return {
        Authorization: `Bearer ${token}`,
        ContentType: 'application/json',
    }
}



export default function ProductNameAndPrice({ product }: PriceScheduleProps) {
    const cookieStore = cookies();
    const buyerToken = cookieStore.get('buyerToken');

    let temp = getProductPrices(buyerToken);
    console.log("Temp ", temp);

    let productPrice = 0;
    if (product.PriceSchedule?.PriceBreaks[0]?.Price) {
        productPrice = product.PriceSchedule?.PriceBreaks[0]?.Price;
    }

    return (
        <div className={styles.productName}>
            <div>
                <p className={styles.productNameText}>{product.Name} <br></br> {productPrice}</p>
            </div>
        </div>
    );
}

