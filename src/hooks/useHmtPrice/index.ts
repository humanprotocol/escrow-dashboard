import { useEffect, useState } from 'react';

type ITokenPrice = {
  usd: number;
  usd_24h_change: number;
};

export default function useHmtPrice() {
  const [price, setPrice] = useState<ITokenPrice>();

  useEffect(() => {
    fetch(
      `https://api.coingecko.com/api/v3/simple/token_price/ethereum?contract_addresses=0xd1ba9BAC957322D6e8c07a160a3A8dA11A0d2867&vs_currencies=usd&include_24hr_change=true`
    )
      .then((res) => res.json())
      .then((json) => {
        const keys = Object.keys(json);
        setPrice(json[keys[0]]);
      });
  }, []);

  return price;
}
