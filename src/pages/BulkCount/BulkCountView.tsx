import * as React from 'react';
import BulkCountCard from './BulkCountCard';

interface IBulkData {
  bulkData: number;
}

const BulkTransferViews: React.FC<IBulkData> = ({
  bulkData,
}): React.ReactElement | null => {
  if (!bulkData) return null;
  return (
    <>
      <BulkCountCard count={bulkData} />
    </>
  );
};

export default BulkTransferViews;
