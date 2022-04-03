import {useEffect, useState} from 'react';

import getWeb3 from '../web3';
import { ethers } from 'ethers';
import EscrowFactoryView from './EscrowFactoryView';
import EscrowFactoryABI from '../contracts/EscrowFactoryABI.json';

export default function EscrowContainer({address, scanner, rpcUrl}) {
    const [count, setCount] = useState(0);
    const [contractData, setContractData] = useState(['', '', '']);
    const eventsUrl = `${scanner}/address/${address}#events`;
    
    useEffect(() => {
        
        async function setupEscrow() {
            try {
                const provider = getWeb3(rpcUrl);
                const EscrowFactory = new ethers.Contract(address, EscrowFactoryABI, provider)
                let escrowCount = await EscrowFactory.counter();
                let lastEscrow = await EscrowFactory.lastEscrow();
                let eip = await EscrowFactory.eip20();
                let escrowCounters = await EscrowFactory.escrowCounters(lastEscrow);
                setCount(ethers.utils.formatUnits(escrowCount, 0));
                setContractData([lastEscrow, eip, ethers.utils.formatUnits(escrowCounters, 0)]);

                EscrowFactory.on('Launched', async (eip, escrow) => {
                    console.log(eip, escrow);
                    escrowCount = await EscrowFactory.counter();
                    escrowCounters = await EscrowFactory.escrowCounters(escrow);
                    setCount(ethers.utils.formatUnits(escrowCount, 0));
                    setContractData([escrow, eip, ethers.utils.formatUnits(escrowCounters, 0)]);
                });
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
          eventsUrl={eventsUrl}
          scanner={scanner}
          contractData={contractData}
        />
    )
}
