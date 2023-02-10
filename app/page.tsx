import Login from '@/components/auth/login';
import Marquee from '@/components/marquee/Marquee';
import ProductGrid from '@/components/product/ProductGrid';
import { ProductList } from '@/interface/Product';
import { getToken } from '@/lib/GetToken';
import { cookies } from 'next/headers';


async function getProducts(token: string): Promise<ProductList> {
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

async function getProductPrices(token: any): Promise<any> {
    console.log("buyerToken", token)
    const headerOptions = {
        Authorization: `Bearer ${token.value}`,
        ContentType: 'application/json'
    }

    const fetched = await fetch(`https://sandboxapi.ordercloud.io/v1/me/products`, 
        {cache: 'no-store', method: 'GET', headers: headerOptions });
    const data = await fetched.json();
    return data;
    
}


export default async function Home() {
  const cookieStore = cookies();

  const token = await getToken();
  const productData: ProductList = await getProducts(token);
  const productPrices: ProductList = await getProductPrices(cookieStore.get('buyerToken'));

  const props = {
      products: productData.Items,
      priceSchedule: productPrices.Items
  }

  return (
    <>
      <Login />
      <ProductGrid {...props} />
      <Marquee products={productData}/>
    </>
  )
}

