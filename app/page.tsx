import Login from '@/components/auth/login';
import Marquee from '@/components/marquee/Marquee';
import ProductGrid from '@/components/product/ProductGrid';
import { getToken } from '@/lib/GetToken';


async function getProducts(token: string) {
  const headerOptions = {
    Authorization: `Bearer ${token}`,
    ContentType: 'application/json'
  }

  const response = await fetch(`https://sandboxapi.ordercloud.io/v1/me/products`, { method: 'GET', headers: headerOptions });
  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return await response.json();
}

export default async function Home() {
  const token = await getToken();
  const productData = await getProducts(token);

  return (
    <>
      <Login />
      <ProductGrid products={productData} />
      <Marquee products={productData}/>
    </>
  )
}
