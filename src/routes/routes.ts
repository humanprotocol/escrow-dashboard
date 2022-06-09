import { FC } from 'react';
import { Main, BulkTransfer, Hmtransfer } from 'src/pages';

interface Route {
  key: string;
  title: string;
  path: string;
  enabled: boolean;
  component: FC<{}>;
}

export const routes: Array<Route> = [
  {
    key: 'main-route',
    title: 'Main',
    path: '/',
    enabled: true,
    component: Main,
  },
  {
    key: 'bulk-transfer-route',
    title: 'Bulk Transfer',
    path: '/bulk-transfer',
    enabled: true,
    component: BulkTransfer,
  },
  {
    key: 'hm-transfer-route',
    title: 'Hmtransfer',
    path: '/hmTransfer',
    enabled: true,
    component: Hmtransfer,
  },
];
