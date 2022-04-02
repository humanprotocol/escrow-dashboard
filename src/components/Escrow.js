import {useEffect, useState} from 'react';

import getWeb3 from '../web3';
import EscrowFactoryView from './EscrowFactoryView';
import EscrowFactoryABI from '../contracts/EscrowFactoryABI.json';

export default function EscrowContainer({address, scanner, rpcUrl}) {
    const [latestEscrow, setLatestEscrow] = useState('');
    const [count, setCount] = useState(0);
    const eventsUrl = `${scanner}/address/${address}#events`;
    
    useEffect(() => {
        
        async function setupEscrow() {
            try {
                const web3 = getWeb3(rpcUrl);
                // const EscrowDefaultFactory = new web3.eth.Contract(EscrowFactoryABI, localStorage.getItem("defaultAddr"));
                // console.log("contract", EscrowDefaultFactory.events);
                // EscrowDefaultFactory.events.Launched({}, (error, data) => {
                //     console.log(error, data);
                // });
                const EscrowFactory = new web3.eth.Contract(EscrowFactoryABI, address);
                const escrowCount = await EscrowFactory.methods.counter().call();
                setCount(escrowCount);
    
                const lastEscrow = await EscrowFactory.methods.lastEscrow().call();
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
          count={count}
          address={address}
          latestEscrow={latestEscrow}
          eventsUrl={eventsUrl}
          scanner={scanner}
        />
    )
}
