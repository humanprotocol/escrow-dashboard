import { useEffect, useState } from 'react';
import { COINGECKO_API_URL, HUMAN_TOKEN_ID } from '../constants/coingecko';

export const useGetTokenPrice = (currency: 'usd' | 'eur') => {
  const [price, setPrice] = useState('');
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    setIsloading(true);
    fetch(
      `${COINGECKO_API_URL}/simple/price?ids=${HUMAN_TOKEN_ID}&vs_currencies=${
        currency || 'usd'
      }`
    )
      .then((response) => response.json())
      .then((data) => setPrice(data[HUMAN_TOKEN_ID][currency || 'usd']))
      .finally(() => {
        setIsloading(false);
      });
  }, []);

  return {
    price,
    isLoading,
  };
};
