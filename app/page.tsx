import styles from './page.module.css'
import ProductCard from '@/components/ProductCard';
import HandleAuth from '@/components/auth/HandleAuth';

async function getToken() {
  const buyerClientId = process.env.ORDERCLOUD_BUYER_CLIENT_ID as string;
  const buyerClientSecret = process.env.ORDERCLOUD_BUYER_SECRET as string;
  let token = { access_token: ""};
  const headerOptions = {
    'Content-Type': 'application/x-www-form-urlencoded',
    Accept: 'application/json',
  }
  const response = await fetch("https://sandboxapi.ordercloud.io/oauth/token",
    { method: 'POST', headers: headerOptions, body: `client_id=${buyerClientId}&client_secret=${buyerClientSecret}&grant_type=client_credentials` })
  token = await response.json()
  console.log("TOKEN ", token.access_token);

  return token.access_token;
}



async function getProducts(token: string) {
  const headerOptions = {
    Authorization: `Bearer ${token}`,
    ContentType: 'application/json'
  }

  const response = await fetch(`https://sandboxapi.ordercloud.io/v1/me/products`, { method: 'GET', headers: headerOptions });
  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    console.log("resoneseeeeer", response);
    // throw new Error('Failed to fetch data');
  }

  return await response.json();
}

export default async function Home() {
  const token = await getToken();
  console.log("TOKEN: ", token);


  const productData = await getProducts(token);
  console.log("resoneseeeeer", productData);

  return (
    <>
      {/* @ts-expect-error Server Component */}
      < ProductCard products={productData} />
    </>
  )
}
