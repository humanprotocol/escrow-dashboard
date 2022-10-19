import { Box, Grid, LinearProgress, Typography } from '@mui/material';
import numeral from 'numeral';
import * as React from 'react';
import { CardWrapper } from 'src/components/Cards';
import useHMTData from 'src/hooks/useHMTData';
import useTokenStatistics from 'src/hooks/useTokenStatistics';
import { CardBlock } from './Cards';

export const TokenView: React.FC<{}> = (): React.ReactElement => {
  const tokenStatistics = useTokenStatistics();
  const data = useHMTData();

  const totalEvents = React.useMemo(() => {
    const { totalTransferEventCount, totalApprovalEventCount } =
      tokenStatistics || {};
    if (totalApprovalEventCount && totalTransferEventCount) {
      return Number(totalApprovalEventCount) + Number(totalTransferEventCount);
    }

    return 'N/A';
  }, [tokenStatistics]);

  const percentage = React.useMemo(() => {
    if (!data) return 0;

    return (data.circulatingSupply / data.totalSupply) * 100;
  }, [data]);

  return (
    <Grid container spacing={{ xs: 2, sm: 2, md: 3, lg: 4, xl: 5 }}>
      <Grid item xs={12} sm={12} md={4}>
        <CardBlock
          title="Price"
          value={data?.currentPriceInUSD}
          format="0,0.00"
        />
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <CardBlock title="Amount of transfers" value={totalEvents} />
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <CardBlock title="Holders" value={tokenStatistics?.holders} />
      </Grid>
      <Grid item xs={12}>
        <CardWrapper>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            flexWrap="wrap"
            mb={4}
          >
            <Box>
              <Typography
                variant="body2"
                color="primary"
                fontWeight={600}
                mb="4px"
              >
                Circulating Supply
              </Typography>
              <Typography variant="h2" fontSize={72} color="primary">
                {numeral(data?.circulatingSupply).format('0,0')}
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="body2"
                color="primary"
                fontWeight={600}
                mb="4px"
              >
                Total Supply
              </Typography>
              <Typography variant="h2" fontSize={72} color="primary">
                {numeral(data?.totalSupply).format('0,0')}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ width: '100%' }}>
            <LinearProgress
              variant="determinate"
              value={percentage}
              sx={{ height: '24px', borderRadius: '24px' }}
            />
          </Box>
        </CardWrapper>
      </Grid>
    </Grid>
  );
};
