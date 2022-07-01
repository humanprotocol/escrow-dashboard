import { Box } from '@mui/material';
import * as React from 'react';

type IInfiniteScroll = {
  onBottomHit: () => void;
  onCalled: boolean;
  isLoading: boolean;
};

export const InfiniteScroll: React.FC<IInfiniteScroll> = ({
  onBottomHit,
  onCalled,
  isLoading,
  children,
}) => {
  const contentRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (onCalled && !isLoading) {
      onBottomHit();
    }
  }, [onCalled, isLoading, onBottomHit]);

  return <Box ref={contentRef}>{children}</Box>;
};
