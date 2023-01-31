import styles from './page.module.css'
import ProductCard from '@/components/ProductCard';

async function getProducts() {

  const headerOptions = {
    Authorization: `Bearer ${process.env.ORDERCLOUD_TOKEN}`,
    ContentType: 'application/json'
  }

  const response = await fetch(`https://sandboxapi.ordercloud.io/v1/products`, { method: 'GET', headers: headerOptions },);
  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    console.log("resoneseeeeer", response);
    // throw new Error('Failed to fetch data');
  }

  return await response.json();
}

export default async function Home() {
  const productData = await getProducts();
  console.log("resoneseeeeer", productData);

  return (
    <>
      {/* @ts-expect-error Server Component */}
        < ProductCard products={productData} />
    </>
  )
}
