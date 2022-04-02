import {useEffect, useState} from 'react';

import getWeb3 from '../web3';
import { ethers } from 'ethers';
import EscrowFactoryView from './EscrowFactoryView';
import EscrowFactoryABI from '../contracts/EscrowFactoryABI.json';

export default function EscrowContainer({address, scanner, rpcUrl}) {
    const [latestEscrow, setLatestEscrow] = useState('');
    const [count, setCount] = useState(0);
    const [contractData, setContractData] = useState(['', '', '']);
    const eventsUrl = `${scanner}/address/${address}#events`;
    
    useEffect(() => {
        
        async function setupEscrow() {
            try {
                const provider = getWeb3(rpcUrl);
                const EscrowDefaultFactory = new ethers.Contract(localStorage.getItem("defaultAddr"), EscrowFactoryABI, provider);
                EscrowDefaultFactory.on('Launched', (eip, escrow) => {
                    console.log(eip, escrow);
                    setLatestEscrow(escrow);
                });
                const EscrowFactory = new ethers.Contract(address, EscrowFactoryABI, provider)
                const escrowCount = await EscrowFactory.counter();
                const lastEscrow = await EscrowFactory.lastEscrow();
                const eip = await EscrowFactory.eip20();
                const escrowCounters = await EscrowFactory.escrowCounters(lastEscrow);
                setCount(ethers.utils.formatUnits(escrowCount, 0));
                setContractData([lastEscrow, eip, ethers.utils.formatUnits(escrowCounters, 0)]);
                setLatestEscrow(lastEscrow);
            } catch(err) {
                console.log("error_", err);

                alert("Invalid escrow factory");
            }

        }
        setupEscrow();
    }, [address]);

    return (
        <EscrowFactoryView
          count={ count }
          address={address}
          latestEscrow={latestEscrow}
          eventsUrl={eventsUrl}
          scanner={scanner}
          contractData={contractData}
        />
    )
}
