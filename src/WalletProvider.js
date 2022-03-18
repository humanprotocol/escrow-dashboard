import Web3 from "web3";

let web3 = null;

if (window.ethereum) {
  web3 = new Web3(window.ethereum);
}

export async function enableWeb3() {
  if (typeof window.ethereum === "undefined") {
    return {
      connected: false,
      message: "Metamask is not installed",
    };
  }
  if (await isWalletConnected()) {
    return web3;
  }
  try {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  } catch (err) {
    return {
      connected: false,
      errorMessage: err.message,
      errorCode: err.code,
    };
  }

  return {
    connected: true,
  };
}

export function getWeb3() {
  return web3;
}

export async function isWalletConnected() {
  if (!web3) {
    return false;
  }

  const accounts = await web3.eth.getAccounts();
  return accounts.length > 0;
}

export async function switchToPolygon() {
  const chainIdHex = Web3.utils.toHex('137');
  try {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: chainIdHex }],
    });
  } catch (switchError) {
    console.error(switchError);
    // This error code indicates that the chain has not been added to MetaMask.
    if (switchError.code === 4902) {
      try {
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId: chainIdHex,
              chainName: 'Polygon Testnet',
              nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
              rpcUrls: ['https://polygon-rpc.com', 'https://rpc-mainnet.maticvigil.com'],
              blockExplorerUrls: ['https://www.polygonscan.com']
            },
          ],
        });
      } catch (addError) {
        console.error(addError);

        return {
          connected: false,
          code: addError.code,
          message: addError.message
        }
      }

      return {
        connected: true,
      }
    }

    return {
      connected: false,
      code: switchError.code,
      message: switchError.message
    }
  }

  return {
    connected: true,
  }
}