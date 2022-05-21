export const networkMap = {
  polygon: {
    title: 'Polygon Mainnet',
    key: 'polygon',
    scanner: 'https://polygonscan.com',
    rpcUrl: 'https://polygon-rpc.com/',
    defaultFactoryAddr: '0x45eBc3eAE6DA485097054ae10BA1A0f8e8c7f794'
  },
  rinkeby: {
    title: 'Ethereum Rinkeby',
    key: 'rinkeby',
    scanner: 'https://rinkeby.etherscan.io',
    rpcUrl: 'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
    defaultFactoryAddr: '0x925B24444511c86F4d4E63141D8Be0A025E2dca4'
  },
  neonslabdev: {
    title: 'NeonsLab Devtestnet',
    key: 'neonslabdev',
    scanner: 'https://neonscan.org',
    rpcUrl: 'https://proxy.devnet.neonlabs.org/solana',
    defaultFactoryAddr: '0xB46b95aa85D2085Bf6CCbb9cB953c28cc7DE6F4a'
  }
}
export const networks = Object.values(networkMap).map(network => network);