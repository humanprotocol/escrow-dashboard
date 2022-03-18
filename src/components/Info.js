import { useRecoilState } from "recoil";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";

import { walletState } from "../store/wallet";
import { chainIdToTitle } from "../constants";

export default function Info() {
  const [wallet] = useRecoilState(walletState);

  return (
    <Card variant="outlined" sx={{ width: "500px" }}>
      <CardContent>
        {!wallet.isConnected && (
          <Typography textAlign="center" variant="body2" color="text.secondary">
            Please, connect your wallet
          </Typography>
        )}
        <Divider textAlign="center">
          <Typography color="text.secondary" variant="body2">
            Account
          </Typography>
        </Divider>
        <Typography variant="body2" textAlign="center">
          {wallet.address}
        </Typography>
        <Divider textAlign="center" sx={{ mt: 1 }}>
          <Typography color="text.secondary" variant="body2">
            Network
          </Typography>
        </Divider>
        <Typography variant="body2" textAlign="center">
          {chainIdToTitle[wallet.networkChainId]}
        </Typography>
      </CardContent>
    </Card>
  );
}
