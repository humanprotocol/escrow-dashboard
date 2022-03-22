import {useEffect, useState} from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import {escrowAddressState} from '../store/escrow';
import {isConnectedSelector} from '../store/wallet';
import { getWeb3 } from '../WalletProvider';
import EscrowView from './EscrowView';
import EscrowABI from '../contracts/EscrowAbi.json';

const statusesMap = ['Launched', 'Pending', 'Partial', 'Paid', 'Complete', 'Cancelled'];

export default function EscrowContainer() {
    const [escrowAddr] = useRecoilState(escrowAddressState);
    const isConnected = useRecoilValue(isConnectedSelector);
    const [escrowStatus, setEscrowStatus] = useState('');

    const [reputationOracle, setReputationOracle] = useState('');
    const [reputationOracleStake, setReputationOracleStake] = useState('');
  
    const [recordingOracle, setRecordingOracle] = useState('');
    const [recordingOracleStake, setRecordingOracleStake] = useState('');
  
    const [manifestUrl, setManifestUrl] = useState('');
    const [finalResultsUrl, setFinalResultsUrl] = useState('');
    const [balance, setBalance] = useState('');
  
  

    useEffect(() => {
        if (!isConnected || !escrowAddr) {
            return null;
        }
        async function setupEscrow() {
            const web3 = getWeb3();
            const Escrow = new web3.eth.Contract(EscrowABI, escrowAddr);
            const escrowSt = await Escrow.methods.status().call();
            setEscrowStatus(statusesMap[escrowSt]);
        
            const recOracleAddr = await Escrow.methods.recordingOracle().call();
            setRecordingOracle(recOracleAddr);
        
            const recOracleStake = await Escrow.methods.recordingOracleStake().call();
            setRecordingOracleStake(recOracleStake);
        
            const repOracleAddr = await Escrow.methods.reputationOracle().call();
            setReputationOracle(repOracleAddr);
        
            const repOracleStake = await Escrow.methods.reputationOracleStake().call();
            setReputationOracleStake(repOracleStake);
        
            const finalResults = await Escrow.methods.finalResultsUrl().call();
            setFinalResultsUrl(finalResults);
        
            const manifest = await Escrow.methods.manifestUrl().call();
            setManifestUrl(manifest);
        
            const balance = await Escrow.methods.getBalance().call();
            setBalance(web3.utils.fromWei(balance, 'ether'));
        
        }

        setupEscrow();

    }, [escrowAddr, isConnected]);

    return (
        <EscrowView
          status={escrowStatus}
          address={escrowAddr}
          repOracleAddr={reputationOracle}
          recOracleAddr={recordingOracle}
          repOracleStake={reputationOracleStake}
          recOracleStake={recordingOracleStake}
          balance={balance}
          manifestUrl={manifestUrl}
          finalResultsUrl={finalResultsUrl}

        />
    )
}
