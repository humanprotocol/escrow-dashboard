import Web3 from 'web3';

export const chainIdToTitle = {
    [Web3.utils.toHex('1')]: 'Ethereum Mainnet',
    [Web3.utils.toHex('3')]: 'Ethereum Ropsten',
    [Web3.utils.toHex('4')]: 'Ethereum Rinkeby',
    [Web3.utils.toHex('5')]: 'Ethereum Goerli',
    [Web3.utils.toHex('137')]: 'Polygon Mainnet',
    [Web3.utils.toHex('80001')]: 'Polygon Mumbai'
};

export const chainIdToScannerUrl = {
    [Web3.utils.toHex('1')]: 'https://etherscan.io',
    [Web3.utils.toHex('3')]: 'https://ropsten.etherscan.io',
    [Web3.utils.toHex('4')]: 'https://rinkeby.etherscan.io',
    [Web3.utils.toHex('5')]: 'https://goerli.etherscan.io',
    [Web3.utils.toHex('137')]: 'https://polygonscan.com',
    [Web3.utils.toHex('80001')]: 'https://mumbai.polygonscan.com'
};

export const isPolygon = (hexChainId) => hexChainId === Web3.utils.toHex('137');