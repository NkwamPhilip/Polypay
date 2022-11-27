import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { TransactionsProvider } from './context/TransactionContext';
import { createRoot } from 'react-dom/client';
import { wagmiClient, chains } from '../add/src';
import {
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
  WagmiConfig,
} from 'wagmi';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<TransactionsProvider>
  <WagmiConfig client={wagmiClient}>
    <RainbowKitProvider chains={chains} modalSize="wide" showRecentTransactions={true}>
      <App />
    </RainbowKitProvider>
  </WagmiConfig>
</TransactionsProvider>);
