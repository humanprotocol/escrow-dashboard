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
    moonbase: {
      title: 'Moonbase Alpha',
      key: 'moonbase',
      scanner: 'https://moonbase.moonscan.io/',
      rpcUrl: 'https://rpc.api.moonbase.moonbeam.network',
      defaultFactoryAddr: '0x2AB33c37AAbF7066f30C48B0043Bb031287Bd991'
    },
    moonbeam: {
      title: 'Moonbeam Mainnet',
      key: 'moonbeam',
      scanner: 'https://moonbeam.moonscan.io/',
      rpcUrl: 'https://rpc.api.moonbeam.network',
      defaultFactoryAddr: '0x3C5a2966A1b5eBF9f4b2B372857C4deD545Bed45'
    }
  }
  export const networks = Object.values(networkMap).map(network => network);