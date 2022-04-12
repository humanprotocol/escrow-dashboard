import {useEffect, useState} from 'react';

import getWeb3 from '../web3';
import { ethers } from 'ethers';
import EscrowFactoryView from './EscrowFactoryView';
import EscrowFactoryABI from '../contracts/EscrowFactoryABI.json';
import EscrowABI from '../contracts/EscrowABI.json';
import { toast } from 'react-toastify';

export default function EscrowContainer({address, networkMap}) {
    const [count, setCount] = useState(0);
    const [contractData, setContractData] = useState(['','', '', '', '']);
    const [scanner, setScanner] = useState("");

    const eventsUrl = `${scanner}/address/${address}#events`;

    const notify = () => toast.info('Latest Escrow updated now!', {
                                    position: "top-center",
                                    autoClose: 3000,
                                    hideProgressBar: true,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                });
    
    useEffect(() => {
        async function setupEscrow() {
            try {
                const provider = getWeb3(networkMap['polygon'].rpcUrl);
                const EscrowFactory = new ethers.Contract(networkMap['polygon'].defaultFactoryAddr, EscrowFactoryABI, provider)
                let escrowCount = await EscrowFactory.counter();
                let lastEscrow = await EscrowFactory.lastEscrow();
                let eip = await EscrowFactory.eip20();
                let escrowCounters = await EscrowFactory.escrowCounters(lastEscrow);
                let Escrow = new ethers.Contract(lastEscrow, EscrowABI, provider)
                let balance = await Escrow.getBalance();
                setScanner('https://polygonscan.com');
                setCount(ethers.utils.formatUnits(escrowCount, 0));
                setContractData(['Polygon', lastEscrow, eip, ethers.utils.formatUnits(escrowCounters, 0), ethers.utils.formatUnits(balance, 18)]);
                EscrowFactory.on('Launched', async (eip, escrow) => {
                    console.log(eip, escrow);
                    notify()
                    escrowCount = await EscrowFactory.counter();
                    escrowCounters = await EscrowFactory.escrowCounters(escrow);
                    Escrow = new ethers.Contract(escrow, EscrowABI, provider)
                    balance = await Escrow.getBalance();
                    setScanner('https://polygonscan.com');
                    setCount(ethers.utils.formatUnits(escrowCount, 0));
                    setContractData(['Polygon', escrow, eip, ethers.utils.formatUnits(escrowCounters, 0), ethers.utils.formatUnits(balance, 18)]);
                });
            } catch(err) {
                console.log("error_", err);
                alert("Invalid escrow factory");
            }

            try {
                const provider = getWeb3(networkMap['rinkeby'].rpcUrl);
                const EscrowFactory = new ethers.Contract(networkMap['rinkeby'].defaultFactoryAddr, EscrowFactoryABI, provider)
                let escrowCount = await EscrowFactory.counter();
                let lastEscrow = await EscrowFactory.lastEscrow();
                let eip = await EscrowFactory.eip20();
                let escrowCounters = await EscrowFactory.escrowCounters(lastEscrow);
                let Escrow = new ethers.Contract(lastEscrow, EscrowABI, provider)
                let balance = await Escrow.getBalance();
                setScanner('https://rinkeby.etherscan.io');
                setCount(ethers.utils.formatUnits(escrowCount, 0));
                setContractData(['Rinkeby', lastEscrow, eip, ethers.utils.formatUnits(escrowCounters, 0), ethers.utils.formatUnits(balance, 18)]);

                EscrowFactory.on('Launched', async (eip, escrow) => {
                    console.log(eip, escrow);
                    notify()
                    escrowCount = await EscrowFactory.counter();
                    escrowCounters = await EscrowFactory.escrowCounters(escrow);
                    Escrow = new ethers.Contract(escrow, EscrowABI, provider)
                    balance = await Escrow.getBalance();
                    setScanner('https://rinkeby.etherscan.io');
                    setCount(ethers.utils.formatUnits(escrowCount, 0));
                    setContractData(['Rinkeby', escrow, eip, ethers.utils.formatUnits(escrowCounters, 0), ethers.utils.formatUnits(balance, 18)]);
                });
            } catch(err) {
                console.log("error_", err);
                alert("Invalid escrow factory");
            }

        }
        setupEscrow();
    }, []);

    return (
        <EscrowFactoryView
          count={ count }
          address={address}
          eventsUrl={eventsUrl}
          scanner={scanner}
          contractData={contractData}
          networkMap={networkMap}
        />
    )
}
