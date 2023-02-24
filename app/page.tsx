import Login from '@/components/auth/login';
import Marquee from '@/components/marquee/Marquee';
import ProductGrid from '@/components/product/ProductGrid';
import { ProductList } from '@/interface/Product';
import { getToken } from '@/lib/GetToken';
import { cookies } from 'next/headers';


async function getProductImages(anonymousToken: string): Promise<ProductList> {
  const headerOptions = buildHeader(anonymousToken)

  const response = await fetch(`https://sandboxapi.ordercloud.io/v1/me/products`,
    { cache: 'force-cache', method: 'GET', headers: headerOptions });

  if (!response.ok) {
    throw new Error('Failed to fetch product images');
  }

  return await response.json();
}

async function getProductPrices(buyerToken: any): Promise<any> {
  const headerOptions = buildHeader(buyerToken)

  const response = await fetch(`https://sandboxapi.ordercloud.io/v1/me/products`,
    { cache: 'no-store', method: 'GET', headers: headerOptions });

  if (!response.ok) {
    throw new Error('Failed to fetch product prices');
  }
  return await response.json();
}


export default async function Home() {
  const cookieStore = cookies();

  const anonymousToken = await getToken();
  const productData: ProductList = await getProductImages(anonymousToken);
  
  const buyerToken = cookieStore.get('buyerToken');
  const productPrices: ProductList = await getProductPrices(buyerToken);

  const props = {
    products: productData.Items,
    priceSchedule: productPrices.Items
  }

  return (
    <>
      <Login />
      <ProductGrid {...props} />
      <Marquee products={productData} />
    </>
  )
}


function buildHeader(token: string) {
  return {
    Authorization: `Bearer ${token}`,
    ContentType: 'application/json',
  }
}
