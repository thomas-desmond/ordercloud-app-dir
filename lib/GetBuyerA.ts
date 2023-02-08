export async function GetBuyerA() {
    const buyerClientId = process.env.ORDERCLOUD_BUYER_CLIENT_ID as string;
    const buyerClientSecret = process.env.ORDERCLOUD_BUYER_SECRET as string;
    const username = 'userA';
    const password = process.env.USER_A_PASSWORD as string;

    let token = { access_token: ""};
    const headerOptions = {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
    }
    const response = await fetch("https://sandboxapi.ordercloud.io/oauth/token",
      { method: 'POST', headers: headerOptions, body: `client_id=${buyerClientId}&client_secret=${buyerClientSecret}&username=${username}&password=${password}&grant_type=password&scope=Shopper` })
    token = await response.json()
  
    return token.access_token;
  }
  