import {useEffect, useState} from 'react';

import web3 from '../web3';
import EscrowFactoryView from './EscrowFactoryView';
import EscrowFactoryABI from '../contracts/EscrowFactoryABI.json';

export default function EscrowContainer({address}) {
    const [latestEscrow, setLatestEscrow] = useState('');
    const [count, setCount] = useState(0);
    const eventsUrl = `https://polygonscan.com/address/${address}#events`;

    useEffect(() => {
        async function setupEscrow() {
            try {
                const EscrowFactory = new web3.eth.Contract(EscrowFactoryABI, address);
                const escrowCount = await EscrowFactory.methods.counter().call();
                setCount(escrowCount);
    
                const lastEscrow = await EscrowFactory.methods.lastEscrow().call();
                setLatestEscrow(lastEscrow);
            } catch(err) {
                console.error(err);

                alert("Invalid escrow factory");
            }

        }
        setupEscrow();
    }, [address]);

    return (
        <EscrowFactoryView
          count={count}
          address={address}
          latestEscrow={latestEscrow}
          eventsUrl={eventsUrl}
        />
    )
}
