import { Product } from '@/interface/Product';
import styles from './ProductNameAndPrice.module.css'

type PriceScheduleProps = {
    product: Product
}


export default function ProductNameAndPrice({ product }: PriceScheduleProps) {

    let productPrice = 0;
    if (product.PriceSchedule?.PriceBreaks[0]?.Price) {
        productPrice = product.PriceSchedule.PriceBreaks[0]?.Price;
    }

    return (
        <div className={styles.productName}>
            <div>
                <p className={styles.productNameText}>{product.Name} <br></br> {productPrice}</p>
            </div>
        </div>
    );
}

