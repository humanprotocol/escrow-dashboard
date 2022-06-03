import Web3 from 'web3';

export default function getWeb3(rpcUrl) {
  return new Web3(rpcUrl);
}
