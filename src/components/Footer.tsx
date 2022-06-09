import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';
import { INDENT } from 'src/ui';
import { CardBlockWithChildren } from './Cards';

const Footer: React.FC = (): React.ReactElement => (
  <Card variant="outlined" sx={{ mt: INDENT.S }}>
    <CardContent>
      <CardBlockWithChildren>
        <Link
          href="https://github.com/humanprotocol/hmt-escrow"
          target="_blank"
          rel="noreferrer"
        >
          HMT Escrow Source Code
        </Link>
      </CardBlockWithChildren>
    </CardContent>
  </Card>
);

export default Footer;
