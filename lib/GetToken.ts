export async function getToken() {
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
  