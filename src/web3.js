import { ethers } from "ethers";

export default function getWeb3(rpcUrl) {
  return new ethers.providers.JsonRpcProvider(rpcUrl)
}