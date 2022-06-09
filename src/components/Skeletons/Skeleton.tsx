import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const SkeletonView: React.FC = (): React.ReactElement => {
  return (
    <>
      <Stack spacing={1}>
        <Skeleton variant="text" />
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={410} height={218} />
      </Stack>
      <Stack spacing={1}>
        <Skeleton variant="text" />
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={410} height={218} />
      </Stack>
    </>
  );
};

export default SkeletonView;
