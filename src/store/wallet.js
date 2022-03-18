import { atom } from "recoil";

import { isWalletConnected } from "../WalletProvider";

const defaultWalletState = {
  address: "",
  networkChainId: "",
  isConnected: false,
};

const initializeWalletEffect = ({ setSelf }) => {
  const setWallet = async () => {
    if (!(await isWalletConnected())) {
      return null;
    }
    const chainId = await window.ethereum.request({ method: "eth_chainId" });
    setSelf({
      address: window.ethereum.selectedAddress,
      networkChainId: chainId,
      isConnected: true,
    });

    window.ethereum.on("chainChanged", (chainChanged) => {
      setSelf((currState) => ({ ...currState, networkChainId: chainChanged }));
    });

    window.ethereum.on("accountsChanged", (accounts) => {
      setSelf((currState) => ({ ...currState, address: accounts[0] }));
    });
  };

  setWallet();
};

export const walletState = atom({
  key: "walletState",
  default: defaultWalletState,
  effects: [initializeWalletEffect],
});
