import { Box } from '@mui/material';
import * as React from 'react';

type IInfiniteScroll = {
  onBottomHit: () => void;
  onPressed: boolean;
  isLoading: boolean;
};

export const InfiniteScroll: React.FC<IInfiniteScroll> = ({
  onBottomHit,
  onPressed,
  isLoading,
  children,
}) => {
  const contentRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (onPressed && !isLoading) {
      onBottomHit();
    }
  }, [onPressed, isLoading, onBottomHit]);

  return <Box ref={contentRef}>{children}</Box>;
};
