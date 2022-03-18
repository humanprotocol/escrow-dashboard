import { useRecoilState } from "recoil";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";

import { walletState } from "../store/wallet";
import { escrowAddressState } from "../store/escrow";
import { chainIdToTitle, chainIdToScannerUrl } from "../constants";

export default function Info() {
  const [wallet] = useRecoilState(walletState);
  const [escrowAddr] = useRecoilState(escrowAddressState);
  const networkScannerUrl = wallet.networkChainId && chainIdToScannerUrl[wallet.networkChainId];
  const escrowUrl = `${networkScannerUrl}/address/${escrowAddr}`;

  return (
    <Card variant="outlined" sx={{ width: "450px" }}>
      <CardContent>
        <Divider textAlign="center">
          <Typography color="text.secondary" variant="body2">
            Network
          </Typography>
        </Divider>
        <Typography variant="body2" textAlign="center">
          {chainIdToTitle[wallet.networkChainId]}
        </Typography>
        <Divider textAlign="center" sx={{ mt: 1 }}>
          <Typography color="text.secondary" variant="body2">
            Escrow
          </Typography>
        </Divider>
        <Typography variant="body2" textAlign="center">
          {escrowAddr && <a href={escrowUrl} rel="noopener noreferrer" target="_blank"> {escrowAddr}</a>}
        </Typography>
      </CardContent>
    </Card>
  );
}
