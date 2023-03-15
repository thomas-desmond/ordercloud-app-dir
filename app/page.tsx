import Login from '@/components/auth/login';
import Marquee from '@/components/marquee/Marquee';
import ProductGrid from '@/components/product/ProductGrid';
import { ProductList } from '@/interface/Product';
import { getToken } from '@/lib/GetToken';

async function getProductImages(anonymousToken: string): Promise<ProductList> {
  const headerOptions = buildHeader(anonymousToken)

  const response = await fetch(`https://sandboxapi.ordercloud.io/v1/me/products`,
    { cache: 'force-cache', method: 'GET', headers: headerOptions });

  if (!response.ok) {
    console.log("Unable to fetch prices, likely invalid token");
  }

  return await response.json();
}

export default async function Home() {
  const anonymousToken = await getToken();
  const productData: ProductList = await getProductImages(anonymousToken);

  const props = {
    products: productData?.Items,
  }

  return (
    <>
      <Login />
      {/* @ts-expect-error Async Server Component */}
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
