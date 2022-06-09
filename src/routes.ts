import { FC } from 'react';
import BulkTransfer from './pages/BulkTransfer';
import Main from './pages/Main';

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
];
