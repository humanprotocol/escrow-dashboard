import * as React from 'react';
import { Divider, Typography } from '@mui/material';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { INDENT } from 'src/ui';

interface ICardLinkBox {
  url: string;
  text: string;
  header: string;
}

export const CardLinkBox: React.FC<ICardLinkBox> = ({
  url,
  text,
  header,
}): React.ReactElement => {
  return (
    <Box textAlign="center">
      <Divider sx={{ my: INDENT.S }}>
        <Typography variant="body2" color="text.secondary">
          {header}
        </Typography>
      </Divider>
      <Link
        href={url}
        target="_blank"
        rel="noreferrer"
        align="center"
        sx={{ fontSize: 14 }}
      >
        {text}
      </Link>
    </Box>
  );
};
