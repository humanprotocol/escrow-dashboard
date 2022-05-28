import { useContext, useEffect, useState } from "react";

import getWeb3 from "../web3";
import EscrowFactoryView from "./EscrowFactoryView";
import EscrowFactoryABI from "../contracts/EscrowFactoryABI.json";
import { useQuery } from "@apollo/client";
import { ESCROWFACTORIES_COUNT, ESCROWFACTORY_COUNT } from "../queries";
import AppContext from "../AppContext";
import { networkMap } from "../constants";
import { countEscrowFactory } from "../utils";

export default function EscrowContainer({ escrowFactory }) {
  const [latestEscrow, setLatestEscrow] = useState("");
  const { network } = useContext(AppContext);

  const scanner = networkMap[network].scanner;
  const address = networkMap[network].defaultFactoryAddr || escrowFactory;
  const rpcUrl = networkMap[network].rpcUrl;

  const eventsUrl = `${scanner}/address/${address}#events`;
  const { data } = useQuery(ESCROWFACTORIES_COUNT);

  const { data: dataFactory } = useQuery(ESCROWFACTORY_COUNT, {
    variables: { id: escrowFactory },
    skip: !escrowFactory,
  });

  useEffect(() => {
    async function setupEscrow() {
      try {
        const web3 = getWeb3(rpcUrl);
        const EscrowFactory = new web3.eth.Contract(EscrowFactoryABI, address);
        const lastEscrow = await EscrowFactory.methods.lastEscrow().call();
        setLatestEscrow(lastEscrow);
      } catch (err) {
        console.error(err);
        alert("Invalid escrow factory");
      }
    }
    setupEscrow();
  }, [address]);

  return (
    <EscrowFactoryView
      count={countEscrowFactory(
        dataFactory?.escrowFactory
          ? [dataFactory.escrowFactory]
          : data?.escrowFactories
      )}
      address={address}
      latestEscrow={latestEscrow}
      eventsUrl={eventsUrl}
      scanner={scanner}
    />
  );
}
